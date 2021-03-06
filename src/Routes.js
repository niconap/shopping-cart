import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./GitHub-Mark-64px.png";

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
    array.push(newItem);
    this.setState({
      cartContent: array,
    });
  };

  incrementItem = (item) => {
    let array = this.state.cartContent;
    let index = array.indexOf(item);
    let newItem = array[index];
    newItem.amount += 1;
    array[index] = newItem;
    this.setState({
      cartContent: array,
    });
  };

  decrementItem = (item) => {
    let array = this.state.cartContent;
    let index = array.indexOf(item);
    let newItem = array[index];
    newItem.amount -= 1;
    if (newItem.amount !== 0) {
      array[index] = newItem;
    } else {
      array.splice(index, 1);
    }
    this.setState({
      cartContent: array,
    });
  };

  emptyCart = () => {
    this.setState({
      cartContent: [],
    });
  };

  render() {
    return (
      <Router>
        <nav>
          <h2 id="pagetitle">furnishop</h2>
          <ul>
            <li>
              <Link to="/shopping-cart/">home</Link>
            </li>
            <li>
              <Link to="/shopping-cart/cart">cart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            exact
            path="/shopping-cart/"
            render={(props) => (
              <Home addToCart={this.addToCart} cart={this.state.cartContent} />
            )}
          />
          <Route
            exact
            path="/shopping-cart/cart"
            render={(props) => (
              <Cart
                cart={this.state.cartContent}
                addToCart={this.addToCart}
                increment={this.incrementItem}
                decrement={this.decrementItem}
                emptyCart={this.emptyCart}
                itemAmount={this.state.cartContent.length}
              />
            )}
          />
          <Route
            exact
            path="/shopping-cart/checkout"
            render={(props) => <Checkout emptyCart={this.emptyCart} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
