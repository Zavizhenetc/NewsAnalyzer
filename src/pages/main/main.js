import './main.css';
import NewsApi from '../../js/modules/NewsApi.js'; 
import SearchInput from '../../js/components/SearchInput.js';
import DataStorage from '../../js/modules/DataStorage.js';
import NewsCard from '../../js/components/NewsCard.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import {setStyleNone, setStyleBlock, } from '../../js/utils/utils.js';
import { SEARCH_BUTTON, RESULT_CARDS, MORE_NEWS_BUTTON,  RESULT, PRELOADER, NOT_FOUND, CONFIG_NEWS,  FORM, REQUEST } from '../../js/constants/constans.js';
const   NEWS_TEMPLATE= document.querySelector('.result__template').content;
const newsApi = new NewsApi(CONFIG_NEWS);// 
export const storage = new DataStorage();
export const newsList = new NewsCardList(RESULT_CARDS);
const validationForm = new SearchInput(FORM);


// валидируем инпут
validationForm.setEventListenersValidation();
SEARCH_BUTTON.addEventListener('click', ()=>{
  validationForm.resetError();
  validationForm.setSubmitButtonState(false);
} )




getStorageNews() ; // отображаем последний удачный запрос  

// слушаем кнопку 'искать'
SEARCH_BUTTON.addEventListener('submit', getRender);

// слушаем кнопку 'показать еще'
MORE_NEWS_BUTTON.addEventListener('click', () => {
  moreCardsShow(count());
  blockMoreNewsButton(count());
});





// получаем новости из сторедж
function getStorageNews() {
  setStyleBlock(PRELOADER); //отображаем спинер
  let storageNews = storage.getNewsCards();
  console.log(count());

  if (storageNews.length == 0) {
    setStyleBlock(NOT_FOUND); // отображаем грустный смайл 
    setStyleNone(RESULT);// убираем результаты
    setStyleNone(PRELOADER)//убираем спинер
  } else {
    const newsCommit = storageNews.map((data) => {
      return new NewsCard(data, NEWS_TEMPLATE).createNewsCard();
    });
    const newsSlice = newsCommit.slice(0, 3);
    newsList.render(newsSlice);
    setStyleNone(PRELOADER)//убираем спинер
    setStyleBlock(RESULT) // отображаем результаты 
    setStyleNone(NOT_FOUND); // убираем грустный смайл 

  }
}

// добавляем еще новостей
function moreCardsShow(count) {
  PRELOADER.style.display = 'block';
  let storageNews = storage.getNewsCards();
  const newsCommit = storageNews.map((data) => {
    return new NewsCard(data, NEWS_TEMPLATE).createNewsCard();
  });
  const newsSlice = newsCommit.slice(0, count);
  newsList.remove();
  newsList.render(newsSlice);
  PRELOADER.style.display = 'none';
  window.count = newsSlice.length;
 
}
//убираем кнопку еще
function blockMoreNewsButton(count){
  let storageNews = storage.getNewsCards();
  if (storageNews.length == window.count)
  {
    setStyleNone (MORE_NEWS_BUTTON);
  }
}

// считаем количество новостей 
function count() {
  let count = window.count;
  // console.log(count);
  if (isNaN(count) || count === 0) {
    return 6;
  }
  return count + 3;
}

// получаем и отрисовываем новости из локал если запрос  в локалсторедж. Нет - отправляем запрос и отрисовываем 3 карточки
function getRender(event) {
  event.preventDefault();
  window.count = 0;
 
  let storageRequest = storage.getRequest();
  if (REQUEST.value === storageRequest) {
    getStorageNews();
    FORM.reset();
  } else {
    newsList.remove();
    getApiNews();
  }
  setStyleBlock(MORE_NEWS_BUTTON)
}

// получаем новости по запросу
export function getApiNews() {
  setStyleBlock(PRELOADER)//отображаем спинер
  setStyleNone(NOT_FOUND); // убираем грустный смайл 
  newsApi

    .getNews(REQUEST.value)
   
    .then((res) => {
      if (res.articles.length == 0) {
        setStyleBlock(NOT_FOUND); // отображаем грустный смайл 
        setStyleNone(RESULT); // убираем результаты 
        setStyleNone(PRELOADER);//убираем спинер
      } else {
        storage.clearStorage();
        storage.setRequest(REQUEST);
        storage.setNews(res.articles);
        let storageNews = storage.getNewsCards();
        const newsCommit = storageNews.map((data) => {
          return new NewsCard(data, NEWS_TEMPLATE).createNewsCard();
        });
        const newsSlice = newsCommit.slice(0, 3);
        newsList.render(newsSlice);
        setStyleNone(PRELOADER); //убираем спинер
        setStyleBlock(RESULT); // отображаем результаты 
      }
    })
    .then((res) => {
      FORM.reset();
    })
    .catch((err) => {
      alert (`Без паники ! это всего лишь ошибка ${err} `);
    });
}





