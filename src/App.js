import React from 'react';
import {Switch ,Route} from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from "./pages/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from './pages/signin_and_signup/signin_and_signup';



function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component ={HomePage} />
      <Route path='/shop' component = {ShopPage} />
      <Route path='/signin' component = {SignInAndSignUp} />
    </Switch>
    </div>
  );
}

export default App;
