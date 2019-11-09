import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Transactions from './component/Transactions';
import Operations from './component/Operations';
import route from "./config/config"


// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      sum: null,
      data: []
    }
  }

  componentWillMount = () => {
    this.userSum()
  }

  userSum = () => {
    // console.log("fgdshs")
    let sum = 0
    this.state.data.map(u => sum += u.Amount)
    console.log(sum)
    this.setState({
      sum: sum
    })
    // return <div> {this.state.sum}</div>
    return sum
  }

  async componentDidMount() {
    const res = await axios.get(`${route}Transactions`)
    console.log(res.data)
    this.setState({ data: res.data })
    console.log(this.state.data, this.state.users)
  }

  addTransaction = async (Transaction) => {
    console.log(Transaction)
    await axios.post(`${route}Transaction`, Transaction)
    // .then(res => {console.log(res); console.log(res.config.data) })
    // console.log("gdsg")
    this.componentDidMount()
    // let Data=[...this.state.data]
    // Data.push(Transaction)

    // this.setState({
    //   data: Data
    // })
  }


  render() {
    return (
      <Router>
        <div>
          <h1> sum : </h1>  {this.state.sum}
        </div>
        ---------------------------------------------------------------------------------------------
         <h1> Transactions : </h1>
        <Transactions users={this.state.data} />
        <Operations addTransaction={this.addTransaction} userSum={this.userSum} data={this.state.data} />
        <Route />
      </Router>
    )
  }

}

export default App;
