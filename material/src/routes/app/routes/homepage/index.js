import React from 'react';

import Intro from './routes/introduction/'
import Login from './routes/login/'
import LoginError from './routes/loginerror'

import { Route } from 'react-router-dom';


const home = ({ match }) => (
  <div>
    <Route path={`${match.url}/introduction`} component={Intro}/>
    <Route path={`${match.url}/login`} component={Login}/>
    <Route path={`${match.url}/loginerror`} component={LoginError}/>

  </div>
)

export default home;
