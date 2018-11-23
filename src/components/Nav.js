import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Nav extends Component {
  state = {
    creator: 'closed',
    main: 'closed',
    quicklinks: 'closed',
    isMobile: false,
    showMobile: false
  }

  componentDidMount() {
    this.setMobileView()
    window.addEventListener("resize", this.setMobileView)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setMobileView)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        creator: 'closed',
        main: 'closed',
        quicklinks: 'closed'
      })
    }
  }

  setMobileView = () => {
    if(window.innerWidth < 600) {
      this.setState({
        showMobile: true
       })
    } else {
      this.setState({
        showMobile: false
       })
    }
  }

  handleClickOutside = () => {
    document.removeEventListener('click', this.handleClickOutside, false)
    
    this.setState({
      creator: 'closed',
      main: 'closed',
      quicklinks: 'closed'
    })
  }

  handleListState = (e) => {
    const target = e.currentTarget,
          name = target.getAttribute('name'),
          state = target.parentNode.getAttribute('data-list-state') === 'closed' ? 'open' : 'closed'
    
    state === 'open'
      ? document.addEventListener('click', this.handleClickOutside, false)
      : document.removeEventListener('click', this.handleClickOutside, false)
    
    this.setState({
      [name]: state
    })
  }
  
  render() {
    return (
      <nav>
        <div className="drop-down-list" data-list-state={this.state.creator}>
          <div className='list-icon' title='Links to Creator details' name="creator" onClick={this.handleListState}>
            <div className='avatar'>
              <i className="fas fa-user-tie"></i>
            </div>
            {this.state.creator === 'closed' ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i>}
          </div>
          <ul>
            <li>
              <NavLink to='/about'>About Creator</NavLink>
            </li>
            <li>
              <NavLink to='/about#credentials'>Credentials</NavLink>
            </li>
            <li>
              <NavLink to='/about#extras'>Extras</NavLink>
            </li>
          </ul>
        </div>
        
          {
            this.state.showMobile
              ? <div className="drop-down-list" data-list-state={this.state.main}>
                  <div className='list-icon' title='Links to Creator details' name="main" onClick={this.handleListState}>
                    <i className="fas fa-bars"></i>
                  </div>
                  <ul>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/videoplayer'>Video Player</NavLink>
                    </li>
                    {/* 
                    <li>
                      <NavLink to='/progress'>Progress</NavLink>
                    </li>
                    */}
                    <li>
                      <NavLink to='/github-readme'>GitHub Readme</NavLink>
                    </li>
                  </ul>
                </div>
              : <ul>
                  <li className={this.props.location.pathname === '/' ? 'active' : null}>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li className={this.props.location.pathname === '/videoplayer' ? 'active' : null}>
                    <NavLink to='/videoplayer'>Video Player</NavLink>
                  </li>
                    {/* 
                  <li className={this.props.location.pathname === '/progress' ? 'active' : null}>
                    <NavLink to='/progress'>Progress</NavLink>
                  </li>
                    */}
                  <li className={this.props.location.pathname === '/github-readme' ? 'active' : null}>
                    <NavLink to='/github-readme'>GitHub Readme</NavLink>
                  </li>
                </ul>
          }
        
        <div className="drop-down-list" data-list-state={this.state.quicklinks}>
          <div className='list-icon right' title='External Account Links' name="quicklinks" onClick={this.handleListState}>
            {this.state.quicklinks === 'closed' ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i>}
            <i className="fas fa-archway"></i>
          </div>
          <ul>
            <li><a href="https://www.linkedin.com/in/elijah-liedtke/" rel="nofollow"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
            <li><a href="https://github.com/ChimeraZen/" rel="nofollow"><i className="fab fa-github"></i>GitHub</a></li>
            <li><a href="https://jsfiddle.net/user/ChimeraZen/fiddles/" rel="nofollow"><i className="fab fa-jsfiddle"></i>JSFiddle</a></li>
            <li><a href="https://www.npmjs.com/~chimera.zen"><i className="fab fa-npm" rel="nofollow"></i>NPM</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
