# ZenChi Apps
  
**Description**:  ZenChi Apps is a growing collection of reuseable React components that have been
                  built with user-accessibilty in mind to provide the best experience across all platforms

**Version**:      [0.1.8](#v018)  
**Author**:       Elijah Liedtke (Chimera.Zen)  
**Email**:        [chimera.zen@gmail.com](mailto:chimera.zen@gmail.com)  
**Link**:         https://github.com/ChimeraZen/zenchiapps

**Copyright**:    Copyright (c) 2018, Elijah Liedtke  
**License**:      http://www.gnu.org/licenses/gpl-3.0.html

## Table of Contents
1. [Instructions](#instructions)
    1. [Installation](#installation)
    2. [Updating](#updating)
    3. [Uninstall](#uninstall)
2. [ChangeLog](#changelog)

---

## Instructions
The following has been provided to assist in installing, updating or removing the ZenChi (pronounced: *zen-Kai*) Apps. Questions, comments, suggestions and concerns are welcome and can be sent to [chimera.zen@gmail.com](mailto:chimera.zen@gmail.com).

I hope you enjoy this app!

&nbsp;
### Installation
1. Navigate to your app directory and install the ZenChi Apps package using:
```
npm i zenchiapps
```
2. Once installed, ZenChi components can be imported using this syntax and replacing `component_name` with the required component:
```
import component_name from 'zenchiapps'

Example: import { VideoPlayer } from 'zenchiapps'
```
&nbsp;
### Updating
1. Navigate to your app directory and enter:
```
npm update zenchiapps
```
&nbsp;
### Uninstall
1. Navigate to your app directory and enter:
```
npm uninstall zenchiapps
```

&nbsp;
## ChangeLog
### v0.1.8
* Security fixes




### v0.1.7
* Created OptionsList component
* Created OptionsList demo page
* Nav.js
  * Moved main menu into const mainMenu
  * Added navlink for OptionsList demo page




### v0.1.6
* Added event listener for when to show mobile menu
* Updated VideoPlayer to version 0.1.3
* Added function to scroll to id based on location hash
* Added delay to AboutPage
* Corrected link to NPM




### v0.1.5
* Reverted SCSS back to CSS due to issues with Netlify.com and the node-sass package




### v0.1.4
* Created landing page and About me page
* Added SCSS
* Added styling
* Added condition for displaying hamburger menu on screens of less than 600px width
* Updated an issue with the readme section where { component } would try to import the component unless {} was changed to HTML entities



### v0.1.3
* Created blank landing page
* Added routing for display pages
* Created display pages for VideoPlayer and Progress components



### v0.1.2
* Cleaned up Readme.md and added installation instructions



### v0.1.1
* NPM package publish fix
  * /lib/index.js changed to `export { default as Progress } from 'zenchiapps'`
* component import instructions corrected



### v0.1.0
* Initial Commit and NPM package test
