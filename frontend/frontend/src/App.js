import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from './Pages/Home/Home'
import {Login} from './Pages/Login/Login'
import {SignUp} from './Pages/SignUp/SignUp'
export default class App extends Component {
  render() {
    return (
    <>
          <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/signup" element={<SignUp/>}/>
          </Routes>
    </>
    )
  }
}
