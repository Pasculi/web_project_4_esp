/* import { nameSelector, jobSelector } from "../pages/index.js" */
export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this.nameElement = document.querySelector(nameSelector);
    this.jobElement = document.querySelector(jobSelector);
  }
  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.jobElement.textContent,
    };

  }
  setUserInfo({name, about}) {
    this.nameElement.textContent = name;
    this.jobElement.textContent = about;
    console.log(this.nameElement.textContent, this.jobElement.textContent)
  }
}