import React from 'react';
import './NewsList.css';

function NewsList({ news = [] }) {

  return (
    <div className="news-container">
      {
        news.map((news, key) => {

          return(
            <div className="news-item">
              <h4 className="news-item__title"><a href={news.url}>{news.title}</a></h4>
              <img src={news.urlToImage} alt=""/>
              <span className="news-item__description">{news.description}</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default NewsList;