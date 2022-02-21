import './App.css';
import React from 'react';
import {BrowserRouter,Route, Switch,Link} from 'react-router-dom';

import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar.js';
import Movies250 from './components/Movies250/Movies250';


function App() {
  
    return (
      <div className='App'>
      <Container>
        <BrowserRouter>
        <Navbar/> 
        <Switch>
          <Route exact path="/" component={Movies250}/>
        </Switch>
        </BrowserRouter>
      </Container>
      </div>
    
    );
}

export default App;


