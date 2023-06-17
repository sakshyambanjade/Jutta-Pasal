import React, { Component } from 'react'
import {Header} from '../../Components/Navbar/Header'
import {Navbar} from '../../Components/Navbar/Navbar'
import {Footer} from '../../Components/Footer/Footer'
export default class Home extends Component {
  render() {
    return (
      <>
      <Header/>
     <Navbar/>
     <Footer/>
      </>
    )
  }
}
