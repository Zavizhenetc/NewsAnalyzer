import "./analytics.css";
import Statistics from "../../js/components/Statistics.js";
import Statisticsbars from "../../js/components/Statisticsbars.js";
import NewsCardList from "../../js/components/NewsCardList.js";
import DataStorage from "../../js/modules/DataStorage.js";

const analiticDaysTemplate = document.getElementById("analiticDayTemplate")
  .content;

const daysContainer = document.querySelector(".statistic__analitic-dates");
const barsContainer = document.querySelector(".statistic__analitic-percents");
const analyticsTitle = document.querySelector(".analytics-heading__title");
const analyticsMonth = document.querySelector(".statistic__table-date");
const month = new Date().toLocaleString("ru", {
  month: "long",
});
const analyticsTotalNews = document.querySelector(
  ".analytic-heading__text-digit"
);
const analyticsTitleSum = document.querySelector(
  ".analytic-heading__subtitle-digit"
);

const analyticsBarsTemplate = document.getElementById("analiticBarTemplate")
  .content;

const storage = new DataStorage();
const barsList = new NewsCardList(barsContainer);
const daysList = new NewsCardList(daysContainer);


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
  return new Date(day).toLocaleString("ru", {
    day: "numeric",
    weekday: "short",
  });
});
// cобираем массив с заголовками
const arr = storage.getNewsCards();

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
analyticsTitle.textContent = `Вы спросили: «${header}»`;
analyticsMonth.textContent = `Дата (${month})`;
analyticsTotalNews.textContent = `${storage.getTotalResult()}`;
analyticsTitleSum.textContent = `${totalSubtitle(request)}`;

//собираем даты для бара
const datIso = dates.map((day) => {
  return day.toISOString().slice(0, 10);
});

//считаем количетсво  запросов

function widthCalculate(day) {
  return arr.filter((data) => {
    if (
      (data.title.includes(request)) || (data.description.includes(request))
    ) {
      return data.publishedAt.slice(0, 10) === day;
    }
  }).length;
}

// переводим даты в ISO
const arrForBars = datIso.map((day) => {
  return widthCalculate(day);
});

//высчитываем  %  для бара
function getWidth(arr) {
  return arr.map((data) => {
    let tur = storage.getTotalResult(request);
    return Math.floor((data * 100) / tur);
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
