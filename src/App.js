import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Counter from './components/counter.component';
import Navbar from './components/navbar.component';
import Login from './components/login.component';


function App() { 
  return (    
    <Router>
      <Navbar />
      <Route path="/react-usereducer/login" component = {Login} />
      <Route path="/react-usereducer/counter" component = {Counter} />      
    </Router>
  );
}

export default App;
