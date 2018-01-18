import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

export default class ResetFormExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit() {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    reset() {
        this.setState({
            formData: {
                email: '',
                password: '',
            },
        });
        this.refs.form.resetValidations();
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Reset form</h2>
                <TextValidator
                    floatingLabelText="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    floatingLabelText="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <RaisedButton
                    type="submit"
                    label={
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                    style={{ marginRight: '16px' }}
                    disabled={submitted}
                />
                <RaisedButton
                    type="button"
                    label="reset"
                    onClick={this.reset}
                    primary
                />
            </ValidatorForm>
        );
    }
}