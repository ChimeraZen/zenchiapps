import React, { Component } from 'react'

import './styles.scss'

export default class Homepage extends Component {
  // Use the data-id attribute to scroll target into view
  handleScrollTo = (e) => {
    const target = e.currentTarget.dataset.id,
          el = document.getElementById(target)
    
    // Scroll the element into view
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  render() {
    return (
      <article id='main-page'>
        <header>
          <h1>Welcome to ZenChi Apps</h1>
          <span>The official repository of ZenChi (Zen<em>Kai</em>) apps</span>
        </header>
        
        <nav>
          <ul>
            <li data-id='programs' onClick={this.handleScrollTo}>
              Programs
            </li>
            <li data-id='about' onClick={this.handleScrollTo}>
              About
            </li>
          </ul>
        </nav>
        
        <section id='programs'>
          <header>
            <h2>
              Programs
            </h2>
          </header>
          <p>
            The following collection of React-based apps has been created to assist with the creation of new and exciting re-useable components. If you wish to use them in your own apps, all of the ZenChi apps are available on <a href="https://www.npmjs.com/settings/chimera.zen/packages" title="Packages available on www.npmjs.com">NPM</a> as standalone packages or part of the <a href="https://www.npmjs.com/package/zenchiapps" title="ZenChi Apps Package on www.npmjs.com">ZenChiApps</a> package.
          </p>
          <p>
            Questions, comments, suggestions and concerns are welcome and can be sent to <a href="mailto:chimera.zen@gmail.com">chimera.zen@gmail.com</a>
          </p>

          <p>
            I hope you enjoy this app!
          </p>

          <section>
            <header>
              <h2 id="installation">Instructions</h2>
            </header>
            <section>
              <header>
                <h3 id="installation">Installation</h3>
              </header>

              <ol>
                <li>
                  Navigate to your app directory and install the ZenChi VideoPlayer package using:
                  <pre>npm i zenchiapps</pre>
                </li>
                <li>
                  Once installed, an App can be imported using:
                  <pre>
                    <p>import &#123; component_name &#125; from 'zenchiapps'</p>
                    <i>Example: import &#123; VideoPlayer &#125; from 'zenchiapps'</i>
                  </pre>
                </li>
              </ol>
            </section>

            <section>
              <header>
                <h3 id="updating">Updating</h3>
              </header>

              <ol>
                <li>
                  Navigate to your app directory and enter:
                  <pre>npm update zenchiapps</pre>
                </li>
              </ol>
            </section>

            <section>
              <header>
                <h3 id="uninstall">Uninstall</h3>
              </header>

              <ol>
                <li>
                  Navigate to your app directory and enter:
                  <pre>npm uninstall zenchi-videoplayer</pre>
                </li>
              </ol>
            </section>
          </section>

          <section>
            <header>
              <h2><a href="/videoplayer">Video Player</a></h2>
            </header>
            
            <p>
              <strong>Description:</strong> The ZenChi Video Player is a React-based video player that uses the File API to allow users to add local video files into a playlist
            </p>

            <p>
              <strong>Version:</strong> 0.1.2<br/>
              <strong>Author:</strong> Elijah Liedtke (Chimera.Zen)<br/>
              <strong>Email:</strong> <a href="mailto:chimera.zen@gmail.com">chimera.zen@gmail.com</a><br/>
              <strong>Link:</strong> <a href="https://github.com/ChimeraZen/zenchi-videoplayer">https://github.com/ChimeraZen/zenchi-videoplayer</a>
            </p>
            
            <p>
              <strong>Copyright:</strong> Copyright (c) 2018, Elijah Liedtke<br/>
              <strong>License:</strong> <a href="http://www.gnu.org/licenses/old-licenses/gpl-2.0.html">http://www.gnu.org/licenses/old-licenses/gpl-2.0.html</a>
            </p>
          </section>

          <section>
            <header>
              <h2><a href="/github-readme">GitHub Readme</a></h2>
            </header>
            
            <p>
              <strong>Description:</strong> The ZenChi GitHub Readme component uses a raw file of GitHub markdown and recreates a facsimile of how GitHub displays markdown
            </p>

            <p>
              <strong>Version:</strong> 0.1.1<br/>
              <strong>Author:</strong> Elijah Liedtke (Chimera.Zen)<br/>
              <strong>Email:</strong> <a href="mailto:chimera.zen@gmail.com">chimera.zen@gmail.com</a><br/>
              <strong>Link:</strong> <a href="https://github.com/ChimeraZen/zenchi-github-readme">https://github.com/ChimeraZen/zenchi-github-readme</a>
            </p>
            
            <p>
              <strong>Copyright:</strong> Copyright (c) 2018, Elijah Liedtke<br/>
              <strong>License:</strong> <a href="http://www.gnu.org/licenses/old-licenses/gpl-2.0.html">http://www.gnu.org/licenses/old-licenses/gpl-2.0.html</a>
            </p>
          </section>
        </section>
        
        <section id="about">
          <header>
            <h2>
              About
            </h2>
          </header>
          <p>
            Started in the fall of 2018, ZenChi Apps is a growing collection of reuseable React components that have been built with user-accessibilty in mind to provide the best experience across all platforms.
          </p>
        </section>
      </article>
    )
  }
}
