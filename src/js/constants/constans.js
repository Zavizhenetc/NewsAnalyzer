
export { CONFIG_GITHUB, RESULT_CARDS, SEARCH_BUTTON, MORE_NEWS_BUTTON,  RESULT, PRELOADER, NOT_FOUND,  COMMIT_PLACES_LIST, CONFIG_NEWS, ERROR_MESAGES, FORM, REQUEST}

const  SEARCH_BUTTON = document.forms.searchForm;
const  MORE_NEWS_BUTTON = document.querySelector('.result__button');
//
const   RESULT = document.querySelector('.result');
const  PRELOADER = document.querySelector('.preloader');
const  NOT_FOUND = document.querySelector('.not-found');
const RESULT_CARDS = document.querySelector('.result__cards');
const COMMIT_PLACES_LIST = document.querySelector('.places-list');

const ERROR_MESAGES = {
  errorEmpty: 'Это обязательное поле',
  errorLength: 'Необходимо указать  до 40 символов',
};

 const _BASE_URL = NODE_ENV === 'production' ? 'https://' : 'http://';

//  конфиг для гитхабАпи
 const CONFIG_GITHUB = {
  baseUrl: `${_BASE_URL}api.github.com`
};
const _BASE_URL_NEWS = NODE_ENV === 'production' ? 'https://newsapi.org/v2/everything' : 'https://nomoreparties.co/news/v2/everything';
// const _BASE_URL_NEWS = NODE_ENV === 'production' ? 'https://newsapi.org/v2/everything' : 'http://praktikum.tk/news/v2/everything';

const FORM = document.querySelector('.search__form');
const REQUEST = document.getElementById('search');
// const REQUEST = FORM.elements.input;



// неделя для ньюсАпи
const NOW = new Date();
// console.log(NOW);
const SEVEN = 7;
const WEEK = new Date();
WEEK.setDate(NOW.getDate()-SEVEN); 
console.log(WEEK);

// конфиг для ньюсАпи
const CONFIG_NEWS = {
  
  baseUrl: `${_BASE_URL_NEWS}`,
    newsToken: '46363efe5d454868911d4a048693588b',
    pageSize: '100',
    from: NOW.toISOString().slice(0, 10),
    to: WEEK.toISOString().slice(0, 10),
    language: 'ru',
    sortBy:'publishedAt',
};


 

