# ZenChi Apps
  
**Description**:  ZenChi Apps is a growing collection of reuseable React components that have been
                  built with user-accessibilty in mind to provide the best experience across all platforms

**Version**:      [0.1.6](#v016)  
**Author**:       Elijah Liedtke (Chimera.Zen)  
**Email**:        [chimera.zen@gmail.com](mailto:chimera.zen@gmail.com)  
**Link**:         https://github.com/ChimeraZen/zenchiapps

**Copyright**:    Copyright (c) 2018, Elijah Liedtke  
**License**:      http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

## Table of Contents
1. [Instructions](#instructions)
    1. [Installation](#installation)
    2. [Updating](#updating)
    3. [Uninstall](#uninstall)
2. [Components](#components)
    1. [Progress](#progress)
3. [ChangeLog](#changelog)

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

Example: import Progress from 'zenchiapps'
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
## Components

### Progress
The ZenChi Progress component uses React v16.6 and the HTML5 canvas element to draw a radial or linear progress bar that uses the requestAnimationFrame API to ensure a consistent display across platforms.

This component can be initialized using `import Progress from 'zenchiapps'`

```
<Progress 
  title="Example" 
  withBorder
  max={100} 
  percentage={80} 
  speed={2} 
  type='radial'
  lineCap='round'
/>
```


### Parameters

Name        |Type     |Default|Syntax                                      |Description
------------|---------|-------|--------------------------------------------|-------------------------------
title       |string   |false  |string \| false                             |Default is false if no title prop is present
type        |string   |radial |'radial \| bar'                             |Type
max         |number   |100    |                                            |Default max is 100
percentage  |number   |75     |                                            |Default percentage is 75
speed       |number   |1.25   |                                            |Rate of progress increase between requested animation frames
withBorder  |boolean  |false  |true \| false                               |**True** if included as component prop, otherwise default is **false**


&nbsp;
### Dimensions

Name           |Type     |Default|Syntax          |Description
---------------|---------|-------|----------------|-------------------------------------
width          |number   |150    |                |Canvas width default is 150px
height         |number   |auto   |                |Canvas width default is **auto**


&nbsp;
### Styles

Name                |Type     |Default|Syntax                             |Description
--------------------|---------|-------|-----------------------------------|----------------------------------------
background          |string   |#FFF   |RGB\/A \| HEX \| COLOR             |Background color for canvas
progressTextAlign   |string   |center |'center\|end\|left\|right\|start'  |Default alignment for progress text is **center**


&nbsp;
### Stroke

Name           |Type     |Default |Syntax                  |Description
---------------|---------|--------|------------------------|----------------
titleTextColor |string   |#000    |RGB\/A \| HEX \| COLOR  |Title text color 
baselineColor  |string   |#DDD    |RGB\/A \| HEX \| COLOR  |Baseline color
borderColor    |string   |#DDD    |RGB\/A \| HEX \| COLOR  |Border color
barColor       |string   |#2196F3 |RGB\/A \| HEX \| COLOR  |Bar color

&nbsp;
## ChangeLog
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
