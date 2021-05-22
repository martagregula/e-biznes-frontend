import React from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import { CartComponent } from "./components/Cart";
import MainPage from "./components/MainPage";
import OrderPage from "./components/OrderPage";
import LoginComponent from "./components/LoginPage";

interface State {}
interface Props {}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/order-page" exact component={OrderPage} />
            <Route path="/productList" exact component={ProductList} />
            <Route path="/product/:id" exact component={ProductPage} />
            <Route path="/cart" exact component={CartComponent} />
            <Route path="/login" exact component={LoginComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
