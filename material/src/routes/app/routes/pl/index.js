import React from 'react';
import { Route } from 'react-router-dom';

import AddProject from './routes/AddProject/'
import Project from './routes/ProjectListing/'
import ProjectDetails from './routes/ProjectDetails/'
import ViewHistory from './routes/ViewHistory/'
import LikedProject from './routes/LikedProject/'
import UserProfile from './routes/UserProfile/'






const Table = ({ match }) => (
  <div>
    <Route path={`${match.url}/ProjectListing`} component={Project}/>
    <Route path={`${match.url}/AddProject`} component={AddProject}/>
    <Route path={`${match.url}/ProjectDetails`} component={ProjectDetails}/>
    <Route path={`${match.url}/ViewHistory`} component={ViewHistory}/>
    <Route path={`${match.url}/LikedProject`} component={LikedProject}/>
    <Route path={`${match.url}/UserProfile`} component={UserProfile}/>

  </div>
)

export default Table;