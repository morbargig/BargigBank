import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {


    render() {
        return (
            this.props.users.map(u => <Transaction user={u} />)
        )
    }

}

export default Transactions;
