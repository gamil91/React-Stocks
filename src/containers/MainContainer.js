import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks : [],
    portfolio : [],
    displayedStocks: [],
    sortedBy : 'None'
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({
      stocks: stocks,
      displayedStocks: stocks}))
  }

  selectedStocks = (type) => {
    if (type !== "All"){
    this.setState(
      {displayedStocks: this.state.stocks.filter(stock => stock.type === type) }
    )}
    else {this.setState({displayedStocks: this.state.stocks})}
  }

  sortBy = (e) => {

      if (e.target.value === "Alphabetically"){
        this.setState(prevState => {
          return { sortedBy: "Alphabetically",
            displayedStocks: prevState.displayedStocks.sort(
            (a, b) => a.name < b.name ? -1 : 1)
            
             }})}
        else {
          this.setState(prevState => {
            return { sortedBy: "Price",
              displayedStocks: prevState.displayedStocks.sort(
              (a, b) => { return a.price - b.price
              } )}})
        }
    // }
  }


  addStock = (stock) => {
    if (!this.state.portfolio.includes(stock)){
      this.setState(prevState => {
        return { portfolio: [...prevState.portfolio, stock]}
      })}
      else {
        this.setState(prevState => {
          return { portfolio: prevState.portfolio.filter(stocks => stocks !== stock )}
        })}
  }



  render() {
    
    return (
      <div>
        <SearchBar selected={this.selectedStocks} sortBy={this.sortBy} sortedBy={this.state.sortedBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock = {this.addStock} stocks={this.state.displayedStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer addStock = {this.addStock} myStocks = {this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
