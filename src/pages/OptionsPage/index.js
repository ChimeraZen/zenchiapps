import React, { Component } from 'react'

import OptionsList from '../../lib/options-list'
import GitHubReadme from '../../lib/github-readme'

import './styles.css'

export default class OptionsPage extends Component {
  componentDidMount() {
    const readMe = 'https://raw.githubusercontent.com/ChimeraZen/zenchi-options-list/master/README.md'
    
    fetch(readMe)
      .then(res => res.text())
      .then(md => {
        this.setState({ md })
      })
  }
  
  render() {
    return (
      <article id="options-page">
        <section className="options-list-demo">
          <header>
            <h1>ZenChi OptionsList</h1>
            <OptionsList>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </OptionsList>
          </header>
          <p>
            The ZenChi OptionsList component can be added anywhere, but works best as a child of a &lt;header&gt; tag. The dropdown list has an <strong><code>margin-left: auto</code></strong> and the <strong>ul.panel</strong> is absolutely positioned to the <em>right</em>. These settings will have to be changed if the OptionsList is to be on the <em>left</em>.
          </p>

          <p>
            Optionally, a custom id, as well as additional classes can be added to the top-level element by adding them as props (i.e. id='list1' className="lists dark")
          </p>
        </section>
        
        <section className="readme">
          <header>
            <h2>Readme</h2>
          </header>
          { this.state !== null && <GitHubReadme file={this.state.md} /> }
        </section>
      </article>
    )
  }
}