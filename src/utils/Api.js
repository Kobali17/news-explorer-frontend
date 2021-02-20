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

  createArticle(values) {
    return this._fetch('/articles', 'POST', JSON.stringify({
      keyword: values.keyword,
      title: values.title,
      description: values.description,
      source: values.source,
      url: values.url,
      urlToImage: values.urlToImage,
      publishedAt: values.publishedAt,
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
  baseUrl: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
