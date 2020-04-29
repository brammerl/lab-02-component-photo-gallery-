import './App.css';
import React, { Component } from 'react'
import Header from './header.js'
import ImageList from './imageList.js'
// import Footer from 'footer.js'
// import images from './data.js';
 
 export default class App extends Component {
   render() {
     return (
       <div>
        <Header/>
        <ImageList/>
      </div>
     )
   }
 }
