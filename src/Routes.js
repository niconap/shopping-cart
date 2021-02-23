import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      cartContent: [],
    };
  }

  addToCart = (item) => {
    let newItem = item;
    newItem.amount = 1;
    let array = this.state.cartContent;
    array.filter((item) => {
      if (item.name === newItem.name) {
        newItem.amount = item.amount + 1;
        array.splice(array.indexOf(item), 1);
        return false;
      } else {
        return true;
      }
    });
    console.log(array);
    array.push(newItem);
    console.log(array);
    this.setState({
      cartContent: array,
    });
  };

  render() {
    return (
      <Router>
        <nav>
          <h1>FurniShop</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home addToCart={this.addToCart} cart={this.state.cartContent} />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart cart={this.state.cartContent} addToCart={this.addToCart} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
