import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function myFunction(x) {
  if(x%3==0)
      return 'yes';
  else if(x%3==1)
      return 'no';
  else if(x%3==2)
    return 'unknown';

}

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,

      isInStock: myFunction(Math.floor((Math.random() * 100) + 1)%3)
    });
  }
}

addProducts(5);

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  filter(event) {
    if (this.refs.nokCheckbox.checked && this.refs.okCheckbox.checked&& this.refs.unknowCheckbox.checked) {
      // all checkboxes are checked means we want to remove the filter for this column
      this.props.filterHandler();
    } else {
      this.props.filterHandler({ callback: this.isFiltered });
    }
  }

  isFiltered(targetValue) {
    if (targetValue === 'no') {
      return (this.refs.nokCheckbox.checked);
    } else if(targetValue==='yes'){
      return (this.refs.okCheckbox.checked);
    }else{
      return (this.refs.unknowCheckbox.checked)
    }

  }

  cleanFiltered() {
    this.refs.okCheckbox.checked = true;
    this.refs.nokCheckbox.checked = true;
    this.refs.unknowCheckbox.checked = true;
    this.props.filterHandler();
  }

  render() {
    return (
      <div>
        <input ref='okCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } /><label>{ this.props.textOK }</label>
        <input ref='nokCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } style={ { marginLeft: 30 + 'px' } } /><label>{ this.props.textNOK }</label>
        <input ref='unknowCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } style={ { marginLeft: 60 + 'px' } } /><label>{ this.props.textunknown }</label>
      </div>
    );
  }
}

CheckboxFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  textOK: PropTypes.string,
  textNOK: PropTypes.string,
  textunknown: PropTypes.string
};

CheckboxFilter.defaultProps = {
  textOK: 'OK',
  textNOK: 'Not OK',
  textunknown:'unknown'
};

function getCustomFilter(filterHandler, customFilterParameters) {
  return (
    <CheckboxFilter filterHandler={ filterHandler } textOK={ customFilterParameters.textOK } textNOK={ customFilterParameters.textNOK } textunknown={ customFilterParameters.textunknown } />
  );
}

export default class CustomFilter extends React.Component {
  handleClick = () => {
    this.refs.isInStock.cleanFiltered();
  }

  render() {
    return (
      <div>
        <button className='btn btn-default' onClick={ this.handleClick }>Clear Filter</button>
        <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn ref='isInStock' dataField='isInStock' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' , textunknown:'unknown' } } }>Product Is In Stock</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
