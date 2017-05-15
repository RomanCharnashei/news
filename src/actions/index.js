import * as actionTypes from '../constants';


export function setNews(news) {

  return {
    type: actionTypes.NEWS_SET,
    news
  };
};



export function fetchNews() {

    return function (dispatch) {
        fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=2ed7c580e4884a50a6e7d0256ef9e8ce')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setNews(data.articles));
            });
    };
}