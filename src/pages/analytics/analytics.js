import './analytics.css';
import Statistics from '../../js/components/Statistics.js';
import Statisticsbars from '../../js/components/Statisticsbars.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import DataStorage from '../../js/modules/DataStorage.js';
import { DAYS_CONTAINER, BARS_CONTAINER, ANALYTICS_TITLE,  ANALYTICS_MONTH, ANALYTICS_TOTAL_NEWS, ANALYTICS_TITLE_SUM} from '../../js/constants/constans.js';

const analiticDaysTemplate = document.getElementById('analiticDayTemplate')
  .content;

const month = new Date().toLocaleString('ru', {
  month: 'long',
});
const analyticsBarsTemplate = document.getElementById('analiticBarTemplate')
  .content;

const storage = new DataStorage();
const barsList = new NewsCardList(BARS_CONTAINER);
const daysList = new NewsCardList(DAYS_CONTAINER);

//получаем даты за неделю
const dates = [];
const date = new Date();
for (let i = 0; i < 7; i++) {
  const tempDate = new Date();
  tempDate.setDate(date.getDate() - i);
  dates.push(tempDate);
}
// готовим массив к рендеру
const weekDays = dates.map((day) => {
  return new Date(day).toLocaleString('ru', {
    day: 'numeric',
    weekday: 'short',
  });
});
// cобираем массив с заголовками
// const arr = storage.getNewsCards();

const arr = storage.getNewsCards().filter(function(elem) {
  return elem.description !== null; 
});


console.log(arr);

const newArrTitle = arr.map((data) => {
  return data.title;
});

//считаем количество упоминаний заголовках
const request = storage.getRequest();
function totalSubtitle(request) {
  const arrTitle = newArrTitle.filter(function (elem) {
    return elem.toLowerCase().indexOf(request.toLowerCase()) > -1;
  });
  return arrTitle.length;
}
totalSubtitle(request);

//заголовок

//делаем первую букву заглавной
const header = request[0].toUpperCase() + request.slice(1);

//отрисовываем данные заголовка
ANALYTICS_TITLE.textContent = `Вы спросили: «${header}»`;
ANALYTICS_MONTH.textContent = `Дата (${month})`;
ANALYTICS_TOTAL_NEWS.textContent = `${storage.getTotalResult()}`;
ANALYTICS_TITLE_SUM.textContent = `${totalSubtitle(request)}`;

//собираем даты для бара
const datIso = dates.map((day) => {
  return day.toISOString().slice(0, 10);
});

//считаем количетсво  запросов

function widthCalculate(day) {
  return arr.filter((data) => {
    const title = data.title.toLowerCase();
    const description = data.description.toLowerCase();
    console.log(title);
    if (
      // (data.title.includes(request)) || (data.title.includes(header)) || (data.description.includes(request)) || (data.description.includes(header))
      (title.includes(request))  || (description.includes(request)) 
    ) {
      return data.publishedAt.slice(0, 10) === day;
    }
  }).length;
}

// переводим даты в ISO
const arrForBars = datIso.map((day) => {
  return widthCalculate(day);
});
console.log(arrForBars);

//высчитываем  %  для бара
function getWidth(array) {
  return array.map((data) => {
    // const total = totalSubtitle(request);
    let total = storage.getTotalResult(request);

    return Math.round((data / total) * 100 );
  });
}
const width = getWidth(arrForBars);

// отрисовываем даты
const days = weekDays.map((data) => {
  return new Statistics(data, analiticDaysTemplate).createDay();
});
daysList.render(days);

//отрисовываем график
const bars = width.map((data) => {
  return new Statisticsbars(data, analyticsBarsTemplate).createBar();
});
barsList.render(bars);
