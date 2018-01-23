import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Form, form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { FormErrors } from './FormErrors';


class Page extends Component {
  constructor (props) {
    super(props);
    this.state = {
     // email: '',
      title: '',
      introduction: '',
      formErrors: {/*email: '', */title: '', introduction: '', description: ''},
     // emailValid: false,
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
    //let emailValid = this.state.emailValid;
    let titleValid = this.state.titleValid;
    let introValid = this.state.introValid;
    let desValid = this.state.desValid;
    let formValid = this.state.formValid;



    switch(fieldName) {
      /*case 'email':
        emailValid = value.match();
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;*/
      case 'title':
        titleValid = (value.length >= 1 && value.length <= 50);
        if(titleValid){
        	fieldValidationErrors.title = '';
        } else if(value.length < 1){
        	fieldValidationErrors.title = ' should not be empty';
        } else {
        	fieldValidationErrors.title = ' is too long';
        }/*
        fieldValidationErrors.title = (titleValid && value.length >= 1) ? '': ' should not be empty';
        fieldValidationErrors.title = (titleValid && value.length <= 20) ? '': ' is too long';*/
        break;

      case 'introduction':
        introValid = (value.length >= 1 && value.length <= 200); 
        if(introValid){
        	fieldValidationErrors.introduction = '';
        } else if(value.length < 1){
        	fieldValidationErrors.introduction = ' should not be empty';
        } else {
        	fieldValidationErrors.introduction = ' is too long';
        }
        //fieldValidationErrors.introduction = introValid ? '': '  should between 1 and 60 characters';
        break;

      case 'description':
        desValid = (value.length >= 1 && value.length <= 1000);
        if(desValid){
        	fieldValidationErrors.description = '';
        } else if(value.length < 1){
        	fieldValidationErrors.description = ' should not be empty';
        } else {
        	fieldValidationErrors.description = ' is too long';
        }/*
        fieldValidationErrors.description = desValid ? '': '  should between 1 and 500 characters';*/
        break;
        
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
     // emailValid: emailValid,
      titleValid: titleValid,
      introValid: introValid,
      desValid: desValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: (this.state.introValid && this.state.titleValid && this.state.desValid)});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
	<section className="container-fluid with-maxwidth chapter">
    <QueueAnim type="bottom" className="ui-animate">
    <div key="1">
  	  <article className="article">
  	    <h2 className="article-title">Create a New Project</h2>
        <div className="box box-default">
        <div className="box-body padding-xl">
	      <form className="demoForm">
	        <div className="panel panel-default">
	          <FormErrors formErrors={this.state.formErrors} />
	        </div>
	
	        <div className={`form-group ${this.errorClass(this.state.formErrors.title)}`}>
	          <label htmlFor="title">Project Title (required)</label>
	          <input type="title" className="form-control" name="title"
	                 placeholder="Please enter project title..."
	                 value={this.state.title}
	                 onChange={this.handleUserInput}  />
	        </div>
	
	        <div className={`form-group ${this.errorClass(this.state.formErrors.introduction)}`}>
	          <label htmlFor="introduction">Project Introduction (required)</label>
	          <textarea type="introduction" className="form-control" name="introduction"
	                    placeholder="Please enter a short introduction of the project..."
	                    rows="2"
	                    value={this.state.introduction}
	                    onChange={this.handleUserInput}  />
	        </div>
	
	        <div className={`form-group ${this.errorClass(this.state.formErrors.description)}`}>
	          <label htmlFor="Description">Project Description (required)</label>
	          <textarea type="description" className="form-control" name="description"
	                    placeholder="Please enter the detailed project description..."
	                    rows="5"
	                    value={this.state.description}
	                    onChange={this.handleUserInput}  />
	        </div>
	
	        <div className="form-group">
	          <lable>  Number of Members</lable>
	          <Members />
	        </div>
	
	
	        <div className="form-group">
	          <MultiSelectField />
	        </div>
	
	        <RaisedButton label="Submit" primary className="btn-w-md" disabled={!this.state.formValid} href="#/app/pl/ProjectDetails"/>
	      </form>
	      </div>
	      </div>
	    </article>
	    </div>
	    </QueueAnim>
	  </section>
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




const FLAVOURS = [
  { label: 'Software', value: 'Software' },
  { label: 'Hardware', value: 'Hardware' },
  { label: 'Digital', value: 'Digital' },
];

const WHY_WOULD_YOU = [
  { label: 'Software (are you crazy?)', value: 'Software', disabled: true },
].concat(FLAVOURS.slice(1));

var MultiSelectField = createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: PropTypes.string,
  },
  getInitialState () {
    return {
      removeSelected: false,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    };
  },
  handleSelectChange (value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  },
  toggleCheckbox (e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  },
  toggleRtl (e) {
    let rtl = e.target.checked;
    this.setState({ rtl });
  },

  render () {
    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    return (
      <div className="section">
        <Select
          closeOnSelect={stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Project Related Area(s)"
          removeSelected={false}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />

      </div>
    );
  }
});



export default Page;
