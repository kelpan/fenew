import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const EditAreaForm = () => (
  <article className="article">
    <h2 className="article-title">Edit User Profile</h2>
    <div className="box box-default">
      <div className="box-body padding-xl">
        <form role="form">

          <div className="form-group">
            <RelatedArea />
          </div>
          
          <RaisedButton label="Submit" primary className="btn-w-md"  href="#/app/pl/UserProfile"/>
          <div className="divider" />
        </form>

      </div>
    </div>
  </article>
);

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
        <label htmlFor="exampleInputPassword1">Interested Area</label>
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
      <div key="1"><EditAreaForm /></div>

    </QueueAnim>
  </section>
);

module.exports = Page;