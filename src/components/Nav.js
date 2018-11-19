import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import appContext from './contexts'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className={this.props.location.pathname === '/' ? 'active' : null}>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className={this.props.location.pathname === '/videoplayer' ? 'active' : null}>
            <NavLink to='/videoplayer'>Video Player</NavLink>
          </li>
          <li className={this.props.location.pathname === '/progress' ? 'active' : null}>
            <NavLink to='/progress'>Progress</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Nav)
