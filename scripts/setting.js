"use strict";
const newsPerPageEl = document.querySelector("#input-page-size");
const categoryEl = document.querySelector("#input-category");
const submit = document.querySelector("#btn-submit");

const newsPerPage = newsPerPageEl.value;
const category = categoryEl.value;
let currentUser;
// kiểm tả tk đang login
const checkLogin = function () {
  for (const [key, value] of Object.entries(localStorage)) {
    if (key === "USER_LOGIN") {
      console.log(key);
      currentUser = JSON.parse(value);
      return currentUser;
    }
  }
};

// Tạo constructor claass lưu setting
class Setting {
  constructor(newsPerPage, category, owner) {
    this.newsPerPage = newsPerPage;
    this.category = category;
    this.owner = owner;
  }
}

const KEYSETTING = "SETTING";

// Lắng nghe sự kiện clich vào save setting
submit.addEventListener("click", function () {
  checkLogin();
  if (confirm("Are you sure to save setting?")) {
    const setting = new Setting(newsPerPageEl.value, categoryEl.value, currentUser.userName);
    saveToStorage(KEYSETTING, JSON.stringify(setting));
    newsPerPageEl.value = "";
    categoryEl.value = "General";
  }
});
