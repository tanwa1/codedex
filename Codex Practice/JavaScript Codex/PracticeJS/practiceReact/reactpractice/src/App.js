import logo from './logo.svg';
import './App.css';
import NoteWrapper from './NoteWrapper';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NavBar from './Components/NavBar';


function App() {
return(

  <Router>
    <Switch>
      <Route exact path='/' element = {<Home/>}></Route>
      <Route exact path='/about' elemeent={<About/>} ></Route> 
      <Route exact path='/contact' element={<Contact/>}> </Route>
    </Switch>
  </Router>
);
}

export default App;
