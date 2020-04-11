import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Header from './Header/Header';
import AdoptionPage from './AdoptionPage/AdoptionPage';

export default class App extends React.Component{
    
    
    render(){
        return (
        <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/Home' component={AdoptionPage}/>
        </Switch>
       </div>
    )
  }
}