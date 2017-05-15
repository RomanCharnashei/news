import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';


import App from './App'
import NewsList from './components/NewsList';
import rootReducer from './reducers'
import * as actions from './actions'



// Add the reducer to your store on the `routing` key
const store = createStore(rootReducer, applyMiddleware(thunk));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
store.dispatch(actions.fetchNews());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={NewsList} />
        <Route path="/" component={NewsList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)