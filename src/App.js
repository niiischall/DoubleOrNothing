import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './screens/home';
import Result from './screens/result';
import Error from './screens/error';

const App = (props) => {
  return (
    <Switch>
      <Route 
        path      = "/home" 
        component = {Home}
      />
      <Route 
        path      = "/result" 
        component = {Result}
      />
      <Route path = "/" exact>
        <Redirect to = "/home" />
      </Route>
      <Route 
        component = {Error}
      />
    </Switch>
  );
}

export default App;
