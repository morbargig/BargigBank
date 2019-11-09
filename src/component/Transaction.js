import React, { Component } from 'react';

class Transaction extends Component {


  render() {
    return <div> {this.props.user.Amount > 0 ? <div>Vendor : {this.props.user.Vendor}, Category : {this.props.user.Category} <span className="green"> Amount: {this.props.user.Amount}</span> </div> : <div>Vendor : {this.props.user.Vendor}, Category : 
    {this.props.user.Category} <span className="red"> Amount: {this.props.user.Amount}</span> </div>} </div>
  }

}

export default Transaction;
