import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Nav from './components/Nav'
import Routes from './components/Routes'

import appContext from './components/contexts'

import './App.css'

export default class App extends Component {
  static contextType = appContext

  render() {
    return (
      <BrowserRouter>
        <section id="zenchiapps">
          <Nav />
          <Routes />
        </section>
      </BrowserRouter>
    )
    
  }
}
