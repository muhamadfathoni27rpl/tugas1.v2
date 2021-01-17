import logo from './logo.svg';
import React, {Component} from 'react';  
import './App.css';
import Bmi from './komponen//Bmi'
import Cicilan from './komponen/Cicilan'
import Harga from './komponen//Harga'
import Konver from './komponen/Konver'

class App extends Component{
  render(){
    return (
    <div className="App container">  
        <h2><a href="https://github.com/muhamadfathoni27rpl/tugas1.v2">Source Code</a></h2>
        <Bmi/>
        <Cicilan/>
        <Harga/>
        <Konver/>
    </div>
    );
  }
}

export default App;
