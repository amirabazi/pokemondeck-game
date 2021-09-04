import './App.css';
import Header from './public/Header';
import MainLeft from './public/MainLeft';
import LoginForm from './public/LoginForm';
import AboutLeft from './public/AboutLeft';
import Poke from './public/Poke';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>       
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/pokelist">
            <Pokelist />
          </Route>
          <Route path="/">
            <Home />
          </Route>          
        </Switch>        
      </div>
    </Router>
  );
}

function Home() {
  return (
       <div className="App">
         <Header />
         <MainLeft />         
        </div>
    );
}

function About() {
  return (
    <div className="App">
      <Header />
      <AboutLeft />   
     </div>
 );
}

function Pokelist() {
  
  return (
    <div className="Pokelist">
      <Header />  
      <Poke />          
    </div>
  );
}

function Login() {
  return (
    <div className="App">
      <Header />  
      <LoginForm />  
    </div>
);
}
