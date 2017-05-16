import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import NewsList from './NewsList';


function mapStateToProps(state) {

  return {
    news: state.news
  }
}


function mapDispatchToProps(dispatch) {

  return {
    onFetchSources: bindActionCreators(actions.fetchSources, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
