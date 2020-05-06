import {
  createStore,
  compose
} from 'redux';
import {
  syncHistoryWithStore
} from 'react-router-redux';
import {
  browserHistory
} from 'react-router';

// Root Reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

const enhancers = compose(
  // Check for the dev tools extension
  window.devToolsExtension
    ? window.devToolsExtension()
    : (store) => store
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', ()=> {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
