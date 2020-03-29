import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from '../pages/main';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        <Redirect from="*" to="/main" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
