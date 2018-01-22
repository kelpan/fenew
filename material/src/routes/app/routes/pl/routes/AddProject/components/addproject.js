import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Form, form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import { FormErrors } from './FormErrors';

class Page extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      title: '',
      intro: '',
      formErrors: {email: '', title: '', intro: '', description: ''},
      emailValid: false,
      titleValid: false,
      introValid:false,
      desValid:false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let titleValid = this.state.titleValid;
    let introValid = this.state.introValid;
    let desValid = this.state.desValid;
    let formValid = this.state.formValid;



    switch(fieldName) {
      case 'email':
        emailValid = value.match();
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'title':
        titleValid = value.length <=20;
        fieldValidationErrors.title = titleValid ? '': ' is too long';
        break;

      case 'intro':
        introValid = (value.length >= 30 && value.length <= 60);
        fieldValidationErrors.intro = introValid ? '': '  should between 30 and 60 characters';

      case 'description':
        desValid = (value.length <= 500);
        fieldValidationErrors.description = desValid ? '': '  is too long';

        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      titleValid: titleValid,
      introValid: introValid,
      desValid: desValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.titleValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2 className="article-title">Create a New Project</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.title)}`}>
          <label htmlFor="title">Title</label>
          <input type="title" className="form-control" name="title"
                 placeholder="title"
                 value={this.state.title}
                 onChange={this.handleUserInput}  />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.intro)}`}>
          <label htmlFor="Intro">Intro</label>
          <textarea type="intro" className="form-control" name="intro"
                    placeholder="Intro"
                    rows="2"
                    value={this.state.intro}
                    onChange={this.handleUserInput}  />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.description)}`}>
          <label htmlFor="Description">Description</label>
          <textarea type="description" className="form-control" name="description"
                    placeholder="Description"
                    rows="5"
                    value={this.state.description}
                    onChange={this.handleUserInput}  />
        </div>

        <div className="form-group">
          <lable>  Number of Members</lable>
          <Members />
        </div>



        <div className="form-group">
          <RelatedArea />
        </div>

        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

//created by
const styles = {
  customWidth: {
    width: 200,
  },
};

class Members extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="2" />
          <MenuItem value={2} primaryText="3" />
          <MenuItem value={3} primaryText="4" />
          <MenuItem value={4} primaryText="2-4" />
        </DropDownMenu>
      </div>
    );
  }
}




//related area
const tableData = [
  {
    name: 'Software'
  },
  {
    name: 'Computer Networks'
  },
  {
    name: 'Semiconductor Physics'
  },
  {
    name: 'Photonics'
  },
  {
    name: 'Electromagnetics'
  },
  {
    name: 'Energy Systems'
  },
  {
    name: 'Analog'
  },
  {
    name: 'Digital Electronics'
  },
  {
    name: 'Control'
  }, {
    name: 'Communications'
  },
  {
    name: 'Signal Processing'
  },
  {
    name: 'Computer Hardware'
  }
];





class RelatedArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '250px',
    };
  }
  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <article className="article">
        <label htmlFor="exampleInputtitle1">Related Area</label>
        <div className="row">
          <div className="col-xl-9">

            <Table
              height={this.state.height}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableRowColumn tooltip="Related Area">Select All</TableRowColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map((row, index) => (
                  //<TableRow key={index} selected={row.selected}>
                  <TableRow>
                    <TableRowColumn>{row.name}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
      </article>
    );
  }
}





export default Page;
