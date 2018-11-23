import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { GitHubReadme } from '../../lib'

import './styles.css'

class GitHubReadmePage extends Component {
  componentDidMount() {
    const readMe = 'https://raw.githubusercontent.com/ChimeraZen/zenchi-github-readme/master/README.md'
    
    fetch(readMe)
      .then(res => res.text())
      .then(md => {
        this.setState({ md })
      })
  }
  // Use the data-id attribute to scroll target into view
  scrollToId = (e) => {
    const target = e.currentTarget.dataset.id,
          el = document.getElementById(target)
    
    // Scroll the element into view
    el.scrollIntoView({
      behavior: 'smooth'
    })
  }
  
  render() {
    return this.state !== null
      ? <div className="github-readme-page">
          <GitHubReadme file={this.state.md} />
        </div>
      : <div>Loading Component...</div>
  }
}

export default withRouter(GitHubReadmePage)
