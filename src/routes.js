import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Cart from './Cart';
import MyShelf from './MyShelf';


export default (
  <Switch> {/* competency 42G */}
    <Route exact path="/" component={ Login } /> {/* competency 42F */}
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/cart" component={ Cart } />
    <Route path="/myshelft" component={ MyShelf } />
  </Switch>
)