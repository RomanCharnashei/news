import React from 'react';
import { connect } from 'react-redux';
import NewsList from './NewsList';


function mapStateToProps(state) {

  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(NewsList);
