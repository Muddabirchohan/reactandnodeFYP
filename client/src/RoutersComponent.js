import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import ProductDescription from './ProductDescription';
import formsubmit from './formsubmit';
import sbaytop from './components/sbaytop';
import Customer from './components/Customer';
import Sighnup from './components/Sighnup';
import SellerPage from './components/SellerPage';


export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>   
        <Route  path="/form" component={formsubmit}/>          
        <Route path="/description" component={ProductDescription}/> 
        <Route path="/sbay" component={sbaytop}/>
        <Route path="/customer" component={Customer}/>
        <Route path="/sighnup" component={Sighnup}/>
        <Route path="/SellerPage" component={SellerPage}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
