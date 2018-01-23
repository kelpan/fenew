import React from 'react';
import APPCONFIG from 'constants/Config';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';


class LoginError extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
        formData: {
            email: '',
            password: '',
        },
        submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
      const { formData, submitted } = this.state;
    return (
      <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">

            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}>
            <fieldset>
            <div className="form-group">
            
            <TextValidator
            floatingLabelText="Utorid"
            onChange={this.handleChange}
            name="utorid"
            value={formData.utorid}
            validators={['required']}
            errorMessages={['this field is required']}
            fullWidth
            />
                </div>
                <div className="form-group">
            <TextValidator
                floatingLabelText="Password"
                onChange={this.handleChange}
                name="password"
                value={formData.password}
                validators={['required']}
                errorMessages={['this field is required']}
            fullWidth
            />
            <p className="formErrors">Authentication failed.</p>
            <div className="card-action no-border text-right">
            <RaisedButton
            type="submit" primary
            label={
                (submitted && 'Please wait while logging in...')
                || (!submitted && 'login')
            }
            style={{ marginRight: '16px' }}
            disabled={submitted}
            />
          </div>
            </div>
            </fieldset>
            </ValidatorForm>
          </div>
        </div>

        <div className="additional-info">
          <a href="https://recover.utorid.utoronto.ca/default.aspx" target="_blank">Forgot your password?</a>
        </div>

      </div>
    );
  }
}

const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <LoginError />
        </div>
      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
