import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './components/app';
import Admin from './components/admin';

ReactDOM.render(
  <Router basename="/oversight">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
