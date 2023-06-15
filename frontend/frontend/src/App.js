import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from './Pages/Home/Home'
export default class App extends Component {
  render() {
    return (
    <>
          <Routes>

          <Route path="/" element={<Home/>}/>

          </Routes>
    </>
    )
  }
}
