import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={ShopPage} path='/shop' />
      </Switch>
    </div>
  );
}

export default App;
