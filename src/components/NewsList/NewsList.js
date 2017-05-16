import React, { Component } from 'react';
import './NewsList.css';

class NewsList extends Component {


  componentDidMount() {
    this.props.onFetchSources();
  }

  render() {
    return (
      <div className="news-container">
        {
          this.props.news.map((news, key) => {

            return(
              <div key={key} className="news-item">
                <h4 className="news-item__title"><a href={news.url}>{news.title}</a></h4>
                <img src={news.urlToImage} alt=""/>
                <span className="news-item__description">{news.description}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default NewsList;