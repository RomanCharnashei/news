import * as actionTypes from '../constants';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


function news(state = [], action) {
  switch (action.type) {
    case actionTypes.NEWS_SET:

      return action.news;
  }

  return state;
}


function sources(state = [], action) {
  switch (action.type) {
    case actionTypes.SOURCES_SET:

      return action.sources;
  }

  return state;
}


function currentSource(state = null, action) {
  switch (action.type) {
    case actionTypes.CURRENT_SOURCE_SET:

      return action.currentSource;
  }

  return state;
}


export default combineReducers({
  news,
  sources,
  currentSource,
  routing: routerReducer
});