import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePanel from './../components/HomePanel/HomePanel';
import AllStrains from './../components/AllStrains/AllStrains';
import StrainProfile from './../components/StrainProfile/StrainProfile';


const AppRouter = () => (
  <Switch>
    <Route path='/' component={HomePanel} exact={true} />
    <Route path='/effects/:id' component={AllStrains}/>
    <Route path='/strains/:id' component={StrainProfile}/>
    {/*<Route component={NotFoundPage} />*/}
  </Switch>
);

export default AppRouter;