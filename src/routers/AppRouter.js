import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePanel from './../components/HomePanel/HomePanel';
import StrainsView from './../components/StrainsView/StrainsView';
// import AllStrains from './../components/AllStrains/AllStrains';
// import StrainProfile from './../components/StrainProfile/StrainProfile';
import StrainProfileTest from './../components/StrainProfileTest/StrainProfileTest';


const AppRouter = () => (
  <Switch>
    <Route path='/' component={HomePanel} exact={true} />
    <Route path='/effects/:id' component={StrainsView}/>
    {/*<Route component={NotFoundPage} />*/}
  </Switch>
);

export default AppRouter;