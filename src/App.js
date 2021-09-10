import './App.css';
import Header from './public/Header';
import MainLeft from './public/MainLeft';
import LoginForm from './public/LoginForm';
import AboutPage from './public/AboutPage';
import PokeDeck from './public/PokeDeck';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import ResponsiveMenu from './public/ResponsiveMenu';

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
         <ResponsiveMenu/>       
        </div>
    );
}

function About() {
  return (
    <div className="App">
      <Header />
      <AboutPage />   
      <ResponsiveMenu/> 
     </div>
 );
}

function Pokelist() {
  
  return (
    <div className="Pokelist">
      <Header />  
      <PokeDeck />
      <ResponsiveMenu/>       
    </div>
  );
}

function Login() {
  return (
    <div className="App">
      <Header />  
      <LoginForm />
      <ResponsiveMenu/>   
    </div>
);
}
