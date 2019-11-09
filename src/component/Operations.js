import React, { Component } from 'react';

class Operations extends Component {
  constructor() {
    super()
    this.state = {
      testText: '',
      Transactions: [],
      Categorys: [],
    }
  }
  updateusersText = (e) => {
    let name = e.target.name
    let text = e.target.value
    // this.state[name] = 0
    this.setState({
      [name]: text
    }, function () {
      // console.log(this.state)
    })
  }

  newPositiveTransaction = () => {
    console.log(this.props.data)
    this.props.userSum()
    if (this.state.Amount > 0) {
      // let x = this.state.Vendor
      let Transactions = {
        Amount: parseInt(this.state.Amount),
        Vendor: this.state.Vendor,
        Category: this.state.Category
      }
      this.addTransaction(Transactions)
      this.setState({
        Transactions: [...this.state.Transactions, Transactions]
      }, function () {
        // this.props.addtTransaction(Transactions)
        this.setState({
          Amount: 0,
          Vendor: '',
          Category: ''
        })
      }); alert("your Transaction saved Successfully")
    } else { alert("sorry the Amount field most be positive") }
    // console.log(this.state.Transactions)
  }
  newNegativeTransaction = () => {
    if (this.props.userSum() < -500) {
      return alert("Sorry Insufficient Funds")
    }
    if (this.state.Amount < 0) {
      // let x = this.state.Vendor
      let Transactions = {
        Amount: parseInt(this.state.Amount),
        Vendor: this.state.Vendor,
        Category: this.state.Category
      }
      console.log(Transactions)
      // this.props.addTransaction(Transactions)
      this.addTransaction(Transactions)
      this.setState({
        Transactions: [...this.state.Transactions, Transactions],
        // Amount: "",
        // Vendor: '',
        // Category: ''
      }, function () {
        // this.addtTransaction()
        this.setState({
          Amount: 0,
          Vendor: '',
          Category: '',
          data: {},
          Categorys: []
        })
      }); alert("your Transaction saved Successfully")
    } else { alert("sorry the Amount field most be negative ") }
    // console.log(this.state.Transactions)
  }

  addTransaction = async (Transactions) => {
    // console.log("fdshsdh")
    // let Transaction = {
    //   Amount: 6,
    //   Vendor: "vfds",
    //   Category: "vdsv"
    // }
    await this.props.addTransaction(Transactions)
    this.GetCatgorys()
  }

  GetCatgorys = () => {
    let x = this.props.data.map(c => c.Category)
    console.log(x)
    let unique = [...new Set(x)];
    console.log(unique)
    this.setState({
      Categorys: unique
    })
  }

  //   getDiv = () => {
  // return (  <div> {this.state.Categorys}</div> )
  //   }

  getId = (e) => {
    e.target.id = "hover"
    let x = e.target
    console.log(x,x.id)
  }

  render() {
    return <div> <div>---------------------------------------------------------------------------</div>
      {/* {this.getDiv()} */}
      <h1> Operations : </h1>
      <input name="Amount" type="number" value={this.state.Amount} onChange={this.updateusersText} placeholder={"Amount"} />
      <input name="Vendor" type="text" value={this.state.Vendor} onChange={this.updateusersText} placeholder={"Vendor"} />
      <input name="Category" type="text" value={this.state.Category} onChange={this.updateusersText} placeholder={"Category"} />
      <button onClick={this.newPositiveTransaction} >Deposit</button>
      <button onClick={this.newNegativeTransaction}>Withdraw</button>

      {/* {this.getDiv()} */}
      {this.state.Categorys !== undefined ? this.state.Categorys.map(c => <div> <h1>Categorys: {c} </h1>
        <div> {this.props.data.filter(u => u.Category === c).map(a => <div> {a.Amount > 0 ? <div onClick={this.getId} id={a._id}>Vendor : {a.Vendor} <span className="green">, Amount: {a.Amount}</span> </div>
          : <div onMouseOver={this.getId} id={a._id} > Vendor : {a.Vendor} <span className="red">, Amount: {a.Amount}</span> </div>} </div>)} </div>
        {/* {this.state.Categorys.filter(u => u === c ).map( a => a)} */}
      </div>) : null}

    </div>

  }

}

export default Operations;
