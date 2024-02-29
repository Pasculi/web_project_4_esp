export default class Api{
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;

  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,
      this._headers
    )
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`,
      this._headers
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }
  updateUser(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers:
        this._headers
      ,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        about
      })
    }).then(response => response.json())

  }
  addCards(link, title) {

  }
  deletCard(idCard) {

  }
  likeCard(idCard) {

  }
  deleteLikeCard(idCard) {

  }

}





