import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePanel from './../components/HomePanel/HomePanel';
import AllStrains from './../components/AllStrains/AllStrains';


const AppRouter = () => (
  <Switch>
    <Route path='/' component={HomePanel} exact={true} />
    <Route path='/all-strains' component={AllStrains}/>
    {/*<Route component={NotFoundPage} />*/}
  </Switch>
);

export default AppRouter;