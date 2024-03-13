class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;

  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,
      { headers: this._headers }
    )
      .then(response => response.json())
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`,
      { headers: this._headers }
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
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers:
        this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar
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
  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify({
        idCard
      })
    })
      .then((res) => res.json())

  }
  likeCard(id, isLiked) {
    const method = isLiked ? "DELETE" : "PUT";
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: method,
      body: JSON.stringify({
        id
      })
    })
      .then((res) => res.json())
  }
  deleteLikeCard(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify({
        id
      })
    })
      .then((res) => res.json())
  }
}

export const api = new Api('https://around.nomoreparties.co/v1/web_es_11', {

  authorization: "962f1eb6-c335-46ac-b3a5-7d22c2a5fd9a", "Content-Type": "application/json"

});