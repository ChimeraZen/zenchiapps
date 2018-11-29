import React from 'react'
import {  Switch,
          Route,
          withRouter } from 'react-router-dom'

import {  Progress } from '../lib'

import Homepage from '../pages/Homepage'
import AboutPage from '../pages/AboutPage'
import OptionsPage from '../pages/OptionsPage'
import VideoPlayerPage from '../pages/VideoPlayerPage'
import GitHubReadmePage from '../pages/GitHubReadmePage'

export const Routes = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/options-list" component={OptionsPage} />
      <Route exact path="/videoplayer" component={VideoPlayerPage} />
      <Route exact path="/progress" component={Progress} />
      <Route exact path="/github-readme" component={GitHubReadmePage} />
    </Switch>
  </main>

export default withRouter(Routes)
