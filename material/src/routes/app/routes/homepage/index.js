import React from 'react';

import Intro from './routes/introduction/'
import Login from './routes/login/'

import { Route } from 'react-router-dom';


const home = ({ match }) => (
  <div>
    <Route path={`${match.url}/introduction`} component={Intro}/>
    <Route path={`${match.url}/login`} component={Login}/>

  </div>
)

export default home;
