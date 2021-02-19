const apiKey = '92c813b9c0164363b4927e0c0b3e44bf';
const newsUrl = 'https://nomoreparties.co/news/v2/everything?';
const now = new Date();
const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10);

export default function getNews(keyword) {
  return fetch(`${newsUrl}q=${keyword}&language=ru&from=${finishDate}&to=${startDate}&sortBy=relevancy&pageSize=100&apiKey=${apiKey}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
}
