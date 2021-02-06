const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('92c813b9c0164363b4927e0c0b3e44bf');
const date = new Date();

newsapi.v2.everything({
  q: 'bitcoin',
  from: `${date.getFullYear}+'-'${date.getMonth}+'-'${date.getDate}-7`,
  to: `${date.getFullYear}+'-'${date.getMonth}+'-'${date.getDate}`,
  language: 'ru',
  sortBy: 'relevancy',
  pageSize: 100,
}).then((response) => {
  console.log(response);
});
