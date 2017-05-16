import * as actionTypes from '../constants';


export function setNews(news) {

  return {
    type: actionTypes.NEWS_SET,
    news
  };
};


export function setSources(sources) {

    return {
        type: actionTypes.SOURCES_SET,
        sources
    };
}


export function fetchNews() {

    return function (dispatch) {
        fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=2ed7c580e4884a50a6e7d0256ef9e8ce')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setNews(data.articles));
            });
    };
}

export function fetchSources(dispatch) {

    return function () {
        fetch('https://newsapi.org/v1/sources')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setSources(data.sources));
            })
    }
}