import React, { Component } from 'react'

import { VideoPlayer } from '../../lib'

import './styles.css'

export default class VideoPlayerPage extends Component {
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
    return (
      <div className="videoplayer-page">
        <section>
          <header className="primary-header">
            <h1>ZenChi Video Player</h1>
            <span data-id="012" data-type="link" onClick={this.scrollToId}>v0.1.2</span>
          </header>
          <VideoPlayer />
        </section>
        
        <article>
          <header>
            <h2>Readme.md</h2>
            <div className="mb20">
              <span className="heading">Description:</span>
              The ZenChi Video Player is a React-based video player that uses the File API to allow users to add local video files into a playlist
            </div>

            <div>
              <span className="heading">Version:</span>
              <span data-id="012" data-type="link" onClick={this.scrollToId}>0.1.2</span>
            </div>

            <div>
              <span className="heading">Author:</span>
              Elijah Liedtke (Chimera.Zen)
            </div>

            <div>
              <span className="heading">Email:</span>
              <a href="mailto:chimera.zen@gmail.com">chimera.zen@gmail.com</a>
            </div>

            <div className="mb20">
              <span className="heading">Link:</span>
              <a href="https://github.com/ChimeraZen/zenchi-videoplayer">https://github.com/ChimeraZen/zenchi-videoplayer</a>
            </div>

            <div className="copyright">
              <span className="heading">Copyright:</span>
              Copyright (c) 2018, Elijah Liedtke
            </div>

            <div className="link">
              <span className="heading">License:</span>
              <a href="http://www.gnu.org/licenses/old-licenses/gpl-2.0.html">http://www.gnu.org/licenses/old-licenses/gpl-2.0.html</a>
            </div>
          </header>
          
          <section>
            <header className="toc">
              <h2>Table of Contents</h2>
              <nav>
                <ol>
                  <li>
                    <span data-id="instructions" data-type="link" onClick={this.scrollToId}>
                      Instructions
                    </span>
                    <ol>
                      <li>
                        <span data-id="installation" data-type="link" onClick={this.scrollToId}>
                          Installation
                        </span>
                      </li>
                      <li>
                        <span data-id="updating" data-type="link" onClick={this.scrollToId}>
                          Updating
                        </span>
                      </li>
                      <li>
                       <span data-id="uninstall" data-type="link" onClick={this.scrollToId}>
                         Uninstall
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span data-id="components" data-type="link" onClick={this.scrollToId}>
                      Components
                    </span>
                    <ol>
                      <li>
                        <span data-id="videoplayer" data-type="link" onClick={this.scrollToId}>
                          VideoPlayer
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span data-id="changelog" data-type="link" onClick={this.scrollToId}>
                      Changelog
                    </span>
                  </li>
                </ol>
              </nav>
            </header>
            
            <hr />
            
            <section>
              <header>
                <h2 id="instructions">Instructions</h2>
              </header>
              
              <p>
                The following has been provided to assist in installing, updating or removing the ZenChi (pronounced: zen-Kai) Video Player. Questions, comments, suggestions and concerns are welcome and can be sent to <a href="mailto:chimera.zen@gmail.com">chimera.zen@gmail.com</a>
              </p>

              <p>
                I hope you enjoy this app!
              </p>
              
              <p>
                <strong>Note: Some videos will not work due to codec incompatibility, and browser & device limitations.</strong>
              </p>
              
              <section>
                <header>
                  <h3 id="installation">Installation</h3>
                </header>
                
                <ol>
                  <li>
                    Navigate to your app directory and install the ZenChi VideoPlayer package using:
                    <pre>npm i zenchi-videoplayer</pre>
                  </li>
                  <li>
                    Once installed, the VideoPlayer component can be imported using:
                    <pre>import { VideoPlayer } from 'zenchi-videoplayer'</pre>
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
                    <pre>npm update zenchi-videoplayer</pre>
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
                <h2 id="components">Components</h2>
              </header>
            
              <section>
                <header>
                  <h3 id="videoplayer">VideoPlayer</h3>
                </header>
                <p>
                  The ZenChi VideoPlayer component uses React v16.6 and the HTML5 File API to allow users to add local video files into a playlist.
                </p>

                <p>
                  This component can be initialized using 
                  <code>import { VideoPlayer } from 'zenchiapp-videoplayer'</code>
                </p>
                
                <pre>
                  &lt;VideoPlayer /&gt;
                </pre>
                
                <table className="mb20">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>id</td>
                      <td>string</td>
                      <td></td>
                      <td><em>(Optional)</em> Id props are passed to the top-level container</td>
                    </tr>
                    <tr>
                      <td>className</td>
                      <td>string</td>
                      <td>zenchi-videoplayer</td>
                      <td><em>(Optional)</em> Class props are passed to the top-level container</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </section>
            
            <section className="changelog">
              <header>
                <h2 id="changelog">ChangeLog</h2>
              </header>
              
              <section>
                <header>
                  <h3 id="012">v0.1.2</h3>
                </header>
                
                <ul>
                  <li>
                    Style updates
                  </li>
                </ul>
              </section>
              
              <section>
                <header>
                  <h3 id="011">v0.1.1</h3>
                </header>
                
                <ul>
                  <li>
                    Style updates
                  </li>
                  <li>
                    Added ref to active title for setTimeout connection
                    <ul>
                      <li>Active title fades after set 3 seconds</li>
                    </ul>
                  </li>
                  <li>
                    Added logic to add custom id and classNames to VideoPlayer top-level container
                  </li>
                  <li>
                    Added <strong>width: <em>100%</em></strong> to <code>&lt;video&gt;</code> element
                  </li>
                </ul>
              </section>
              
              <section>
                <header>
                  <h3 id="010">v0.1.0</h3>
                </header>
                
                <ul>
                  <li>
                    Initial GIT Commit and NPM package test
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </article>
      </div>
    )
  }
}
