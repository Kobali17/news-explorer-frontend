class Api {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  getInitialCards() {
    return this._fetch('/cards', 'GET');
  }

  takeCardLike(cardId) {
    return this._fetch(`/cards/${cardId}/likes`, 'PUT');
  }

  removeCardLke(cardId) {
    return this._fetch(`/cards/${cardId}/likes`, 'DELETE');
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
