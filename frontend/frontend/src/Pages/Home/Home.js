import React, { Component } from 'react'
import {Navbar} from '../../Components/Navbar/Navbar'
import {Footer} from '../../Components/Footer/Footer'
import {Sidebar} from '../../Components/SideMenu/SideMenu'
import {Hl} from '../../Components/HorizontalLine/Hl'
export default class Home extends Component {
  render() {
    return (
      <>
     <div className='Navigation Bar'><Navbar/></div>
     <Hl/>
      <div className='Menu-Side-Bar'>  <Sidebar/></div>
     <div className='Footer-Section'><Footer/></div>
      </>
    )
  }
}
