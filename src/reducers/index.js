import * as actionTypes from '../constants';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const initialState = [];

function news(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NEWS_SET:

      return [ ...state, ...action.news ];
  }

  return state;
}


export default combineReducers({
  news,
  routing: routerReducer
});