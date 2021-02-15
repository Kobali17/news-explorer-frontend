const apiKey = '92c813b9c0164363b4927e0c0b3e44bf';

function weekagoISO() {
  return new Date(new Date() - 7).toISOString({ timeZone: 'UTC' });
}
function todayISO() {
  return new Date().toISOString({ timeZone: 'UTC' });
}

export default function getNews(searchValue) {
  return fetch(`https://newsapi.org/v2/everything/?${new URLSearchParams({
    q: searchValue,
    from: weekagoISO(),
    to: todayISO(),
    language: 'ru',
    sortBy: 'relevancy',
    pageSize: 100,
    apiKey,
  })}`);
}
