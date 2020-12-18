import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolioStocks = () => {
    return this.props.myStocks.map(stock => <Stock key={stock.id} stock={stock} addStock={this.props.addStock}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
