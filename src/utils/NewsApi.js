const apiKey = '92c813b9c0164363b4927e0c0b3e44bf';
const now = new Date();
const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10);

const getNews = (keyword) => fetch(`https://nomoreparties.co/news/v2/everything?language=ru&q=${keyword}&sortBy=popularity&from=${startDate}&to=${finishDate}&pageSize=100&apiKey=${apiKey}`, {
  method: 'GET',
})
  .then((res) => {
    if (res.status !== 200) {
      const err = 'Ошибка доставки';
      return err;
    }
    return res.json()
  });
export default getNews;
