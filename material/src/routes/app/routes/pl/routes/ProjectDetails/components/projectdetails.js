import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactTooltip from 'react-tooltip'

import ReactDOM from "react-dom";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';

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

class Details extends React.Component {
	
	render(){
		
		const hasProjectNumber = 1;

		// if project id is specified
		  if (hasProjectNumber) {
			  return(
					  <div>
						  <section className="hero">
						    <div className="hero-content">
						      <h1 className="hero-title">ECE496 project finder</h1>
						    </div>
						    <p className="text-muted">Saturday, September 24, 2016 5:02 PM by student</p>
						  </section>
						  <article className="article padding-lg-v article-dark article-bordered">

						    <div className="container-fluid with-maxwidth-sm">

						      <h4>Project Status</h4>
						      <p>Open, accept 2-4 team members</p>
						      
						      <h4>Related Area</h4>
						      <p>Software, Hardware</p>
						      
						      <h4>Description</h4>
						      <p>This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.</p>

						      <h4>Liked by</h4>

						      <h4>Discussion Area</h4>
						      
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
