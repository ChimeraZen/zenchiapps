import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import avatar from '../../assets/images/eliedtke.jpeg'

import './styles.css'

class AboutPage extends Component {
  componentDidMount() {
    if(this.props.location.hash.indexOf('#') !== -1) {
      const hash = this.props.location.hash.substring(1),
            el = document.getElementById(hash)

      this.scrollTimerId = setTimeout(() => {
        // Scroll the element into view
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 500)
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.scrollTimerId)
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.location.hash.indexOf('#') !== -1) {
      const hash = this.props.location.hash.substring(1)
      this.scrollToHash(hash)
    } else if(this.props.location.hash.indexOf('#') === -1) {
      const el = document.getElementById('about-page')

      // Scroll the element into view
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  scrollToHash = (hash) => {
    const el = document.getElementById(hash)

    // Scroll the element into view
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  render() {
    return (
      <article id="about-page">
        <header>
          <img className="creator-avatar" src={avatar} alt="Elijah Liedtke - Creator of ZenChi Apps" />
          
          <div className="creator-header">
            <h1>Elijah Liedtke</h1>
            <span><em>Web Developer & Digital Consultant</em></span>
            <ul className="quicklinks">
              <li><a href='mailto:eli_lied@hotmail.com'><i className="fas fa-envelope" title="eli_lied@hotmail.com"></i></a></li>
              <li><a href='https://www.linkedin.com/in/elijah-liedtke/'><i className="fab fa-linkedin" title="LinkedIn"></i></a></li>
              <li><a href="https://github.com/ChimeraZen/" rel="nofollow"><i className="fab fa-github"></i></a></li>
              <li><a href="https://jsfiddle.net/user/ChimeraZen/fiddles/" rel="nofollow"><i className="fab fa-jsfiddle"></i></a></li>
              <li><a href="https://www.npmjs.com/settings/chimera.zen/packages"><i className="fab fa-npm" rel="nofollow"></i></a></li>
            </ul>
          </div>

          <div className="creator-description">
            <p>
              Over the years, I've written many different scripts in many different languages. Whether I'm using PHP to query a MySQL database, jQuery/JavaScript to work with the DOM, or React to create a reusable component, I have a desire to follow a standard operating procedure.
            </p>
            <p>
              In my time as a Web Developer and Digital Consultant, I've had the pleasure of working with people and helping to guide them as they learn more about the marvel that is the internet and the advancement of technology in our day-to-day lives.
            </p>
          </div>
        </header>
          
        <section id="credentials">
          <header>
            <h2>
              Credentials
            </h2>
          </header>
            
          <section className="work-experience">
            <header>
              <h3>TECH SUPPORT</h3>
              <span>The Sisters of St. Joseph</span>
              <div>
                <span>Pembroke, ON</span>
                <span><em>Oct 2017 - Present</em></span>
              </div>
            </header>
            <p>
              Assist the Sisters with their needs such as: printing an email; updating OS and software on their computers and tablets; and, installing necessary software
            </p>
          </section>

          <section className="work-experience">
            <header>
              <h3>WEB DEVELOPER</h3>
              <span>Rapid Media</span>
              <div>
                <span>Palmer Rapids, ON</span>
                <span><em>June 2015 - Sept 2018</em></span>
              </div>
            </header>
            <p>
              Manage updates, backups, and modifications to the CMS system and suggest improvements to security, SEO, UI and overall User Experience
            </p>
          </section>

          <section className="work-experience">
            <header>
              <h3>WEB DEVELOPER</h3>
              <span>Pembroke Public Library</span>
              <div>
                <span>Pembroke, ON</span>
                <span><em>Apr 2012 - Dec 2012</em></span>
              </div>
            </header>
            <p>
              Manage updates, backups, and modifications to the CMS system and suggest improvements to security, SEO, UI and overall User Experience
            </p>
          </section>
        </section>
        <section>
          <header>
            <h2>
              Extras
            </h2>
          </header>
          
          <section>
            <header>
              <h3 id="extras">Why are we here?</h3>
            </header>
            <p>
              This isn't a philosophical question. I mean, why are we here on this page? Well, I assume it's to get to know more about me, and what it is that I do, of course!
            </p>
            <p>
              Born and raised in Ontario, Canada, I've spent the last 20+ years watching the progression of the internet age. With the ever-changing environment that is programming, I find that every day provides me with an opportunity to learn and apply all that I've acquired in my search for more knowledge. That everything can be applied to another in some fashion has been the driving force behind this quest and many others, but that's a story for another time.
            </p>
          </section>
          
          <section>
            <header>
              <h3>Once upon another time...</h3>
            </header>
            <p>
              While cooking some pizza pockets in-between watching episodes of "The Fresh Prince of Bel-air" and "Saved by the Bell", I was introduced to the internet. Once the squealing squelches of the dial-up modem subsided and the panicked perils of a picked-up telephone became common, I promptly dove into the sea of information before me.
            </p>
            <p>
              Landing in the city of Geo (Geocities), I was exposed to the incredible possibilities that exist within the interconnected framework of the internet. I realized that anything I wanted to know or show the world was just a mouse-click away.
            </p>
            <p>
              It didn't take long to realize that blinking text and midi-heavy pages might seem "cool", but from a User Experience stand-point, it's a terribly awful experience!! That had nothing on the brain-busting UH-OH!'s of ICQ however. Figuring out how to modify a program's visual and functional aspects using programs downloaded from the internet unleashed a thirst for knowledge that would never be quenched.
            </p>
            <p>
              Since then, I've expanded my skillset to include, among other things, HTML5, CSS3 & preprocessors, PHP & MySQL, and Joomla/WordPress and, most recently, ReactJS.
            </p>
          </section>
        </section>
      </article>
    )
  }
}

export default withRouter(AboutPage)