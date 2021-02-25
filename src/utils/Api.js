class Api {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  getInitialArticles() {
    return this._fetch('/articles', 'GET');
  }

  removeArticle(articleId) {
    return this._fetch(`/articles/${articleId}`, 'DELETE');
  }

  createArticle(values, keyword) {
    return this._fetch('/articles', 'POST', JSON.stringify({
      keyword,
      title: values.title,
      description: values.description,
      publishedAt: values.publishedAt,
      source: values.source,
      url: values.url,
      urlToImage: values.urlToImage,
    }));
  }

  getUserData() {
    return this._fetch('/users/me', 'GET');
  }

  _fetch(url, method, body) {
    return fetch(this._baseUrl + url, {
      method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...this._headers,
      },
      body,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

const api = new Api({
  baseUrl: 'http://api.lunara-news.students.nomoredomains.icu/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
