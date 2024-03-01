export default class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;

  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,
      this._headers
    )
      .then(response => response.json())
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`,
      this._headers
    )
      .then(response => response.json())
  }
  updateUser(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers:
        this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        about
      })
    }).then(response => response.json())

  }
  updateAvatar(urlAvatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers:
        this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        urlAvatar
      })
    }).then(response => response.json());
  }
  addCard(link, name) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        link,
        name
      })
    })
      .then((res) => res.json())

  }
  deletCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify({
        idCard
      })
    })
      .then((res) => res.json())

  }
  likeCard(idCard) {
    return fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
      headers: this._headers,
      method: 'PUT',
      body: JSON.stringify({
        idCard
      })
    })
      .then((res) => res.json())
  }
  deleteLikeCard(idCard) {
    return fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify({
        idCard
      })
    })
      .then((res) => res.json())

  }
}

export const api = new Api('https://around.nomoreparties.co/v1/web_es_11', {
  headers: {
    authorization: "962f1eb6-c335-46ac-b3a5-7d22c2a5fd9a", "Content-Type": "application/json"
  }
});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGViNDBmZmQ0Mjk5ZDQ5YmJhMGI1N2RiZDUwYzFjZCIsInN1YiI6IjYzNWQ1MjY5YjMzMTZiMDA4MWZhZTJkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oMZKBkrvXsw_iuBhlIXfyGNJsiJ19fRYqYFVt7Nwopc'
  }
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));