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
    this.setState({
      cartContent: [...this.state.cartContent, item],
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
