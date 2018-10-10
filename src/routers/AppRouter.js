import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePanel from './../components/HomePanel/HomePanel';
import StrainsView from './../components/StrainsView/StrainsView';
import GeneralPage from './../components/GeneralPage/GeneralPage';
import NoMatch from './../components/NoMatch/NoMatch';


const AppRouter = () => (
  <Switch>
    <Route path='/' component={HomePanel} exact />
    <Route path='/effects/:id' component={StrainsView}/>
    <Route path='/about-strain-search' component={GeneralPage}/>
    <Route path='/disclaimer' component={GeneralPage}/>
    <Route component={NoMatch} />
  </Switch>
);

export default AppRouter;