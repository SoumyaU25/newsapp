import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

   

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize = {5} country = "in" category = "generel"/>
         
      </div>
    )
  }
}

