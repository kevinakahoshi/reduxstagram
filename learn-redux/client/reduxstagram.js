import React from 'react';
import { render } from 'react-dom';

// Styles
import css from './styles/style.styl';

// Components
import Main from './components/main';
import Single from './components/single';
import PhotoGrid from './components/photo-grid';

// React Router
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

const router = (
  <Router
    history={browserHistory}>
      <Route
        path="/"
        component={Main}>
          <IndexRoute
            component={PhotoGrid} />
          <Route
            path="/view/:postId"
            component={Single} />
      </Route>
  </Router>
)

render(
  router,
  document.getElementById('root')
);
