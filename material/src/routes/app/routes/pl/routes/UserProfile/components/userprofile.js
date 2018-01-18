import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import QueueAnim from 'rc-queue-anim';
import ReactTooltip from 'react-tooltip'
import RaisedButton from 'material-ui/RaisedButton';

import ReactDOM from "react-dom";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';

const mWidthStyle = {
		  minWidth: '135px'
		};

const projectData = [
	  {
	    projectID: '0',
	    projectTitle:'ECE496 project finder',
	    howManyMembers: '4',
	    createdBy: 'student',
	    createDate: 'Saturday, September 24, 2016 5:02 PM',
	    relatedArea: 'Software, Hardware'


	  }
	];


const styles = {
  checkbox: {
    maxWidth: 150,
    marginBottom: 16,
    display:'inline-block'
  }
};


class Details extends React.Component {
	
	render(){
		
		const hasProjectNumber = 1;

		// if project id is specified
		  if (hasProjectNumber) {
			  return(
					  <div>
						  <section className="hero">
						    <div className="hero-content">
						      <h1 className="hero-title">Student Name</h1>
						    </div>
						    <p className="text-muted">Student</p>
						      <RaisedButton style={mWidthStyle} label="Edit Profile" /><div className="divider" />
						    
						  </section>
						  <article className="article padding-lg-v article-dark article-bordered">

						    <div className="container-fluid with-maxwidth-sm">
						      
						      <h4>Interested Area</h4>
						      <p>Software, Hardware</p>
						      
						      
						      <h4>Projects you may also like...</h4>
						      
						    </div>
						  </article>
						 </div>
						 );
		  }
		  
		  // if project id is not specified
		  return (
				  <div>
				  <p> ALLOW TO SEARCH HERE </p>
				  <div className="col-xl-8 ">
				  <div className="box box-transparent">
				  <div className="box-body">
				  <span className="cta-text">Please enter the title of the project you want to see</span>
				  <input type="projectTitle" className="form-control" id="projectTitle" placeholder="Enter Project Description" />
				  </div></div></div>
				  </div>);
		}
}


const Page = () => (
  <section className="chapter page-terms">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Details /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;