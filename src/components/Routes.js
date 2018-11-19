import React from 'react'
import {  Switch,
          Route,
          withRouter } from 'react-router-dom'

import {  Progress } from '../lib'

import Homepage from '../pages/Homepage'
import VideoPlayerPage from '../pages/VideoPlayerPage'

export const Routes = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/videoplayer" component={VideoPlayerPage} />
      <Route exact path="/progress" component={Progress} />
    </Switch>
  </main>

export default withRouter(Routes)
