import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const AddProjectForm = () => (
  <article className="article">
    <h2 className="article-title">Create a New Project</h2>
    <div className="box box-default">
      <div className="box-body padding-xl">
        <form role="form">
          <label>I am:
            <div className="form-group">
              <Createby />
            </div>
          </label>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Project Title</label>
            <input type="projectTitle" className="form-control" id="projectTitle" placeholder="Enter Project Title" />
          </div>

          <div className="form-group">
            <RelatedArea />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="projectDes" className="form-control" id="projectDes" placeholder="Enter Project Description" />
          </div>


          <RaisedButton label="Submit" primary className="btn-w-md" />
          <div className="divider" />
        </form>

      </div>
    </div>
  </article>
);



//created by
const styles = {
  customWidth: {
    width: 200,
  },
};

class Createby extends React.Component {

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
          <MenuItem value={1} primaryText="Student" />
          <MenuItem value={2} primaryText="Professor" />
          <MenuItem value={3} primaryText="Alumni" />
          <MenuItem value={4} primaryText="Company" />
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
        <label htmlFor="exampleInputPassword1">Related Area</label>
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



const Page = () => (
  <section className="container-fluid with-maxwidth chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><AddProjectForm /></div>

    </QueueAnim>
  </section>
);

module.exports = Page;
