import React, { Component } from 'react'

import './styles.css'

export default class OptionsList extends Component {
  state = {
    isOpen: false
  }
  
  handleOptions = () => {
    const isOpen = this.state.isOpen ? false : true
    
    isOpen
      ? document.addEventListener('click', this.handleClickOutside, false)
      : document.removeEventListener('click', this.handleClickOutside, false)
    
    this.setState({
      isOpen: isOpen
    })
  }

  handleClickOutside = () => {
    document.removeEventListener('click', this.handleClickOutside, false)
    
    this.setState({
      isOpen: false
    })
  }
  
  render() {
    const optionalProps = {},
          classNames = ['zenchi-options-list']
    
    // Close list if isOpen = false
    !this.state.isOpen && classNames.push("closed")
    
    // Add id if one is supplied
    optionalProps.id = this.props.id ? this.props.id : null
    
    // Add additional classes if supplied
    this.props.className && classNames.push(this.props.className)
    
    return (
      <div {...optionalProps} className={classNames.join(' ')}>
        <div className="zenchi-options-list-icon" onClick={this.handleOptions}>&#8942;</div>
        <ul className="zenchi-options-list-panel">{this.props.children}</ul>
      </div>
    )
  }
}
