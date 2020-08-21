import "./analytics.css";
import Statistics from "../../js/components/Statistics.js";
import NewsCardList from "../../js/components/NewsCardList.js";
import DataStorage from "../../js/modules/DataStorage.js";

const breadcrumbsMain = document.querySelector(".breadcrumbs__list-link");
// breadcrumbsMain.addEventListener('click',moreCardsShow());

const analiticDaysTemplate = document.getElementById("analiticDayTemplate")
  .content;

// const daysContainer = document.querySelector(".stat"); 
const daysContainer = document.querySelector(".statistic__analitic-dates");

const storage = new DataStorage();
const daysList = new NewsCardList(daysContainer);


//=====получаем неделю

const dates = [];
const date = new Date();
for (let i = 0; i < 7; i++) {
  const tempDate = new Date();
  tempDate.setDate(date.getDate() - i);
  dates.push(tempDate);
}
const weekDays = dates.map((day) => {
  return new Date(day).toLocaleString("ru", {
    day: "numeric",
    weekday: "short",
  });
});

// let storageNews = storage.getNewsCards();
console.log(weekDays)
const days = weekDays.map((data) => {
  return new Statistics(data, analiticDaysTemplate).createDay();
});


// const days =
//   new Statistics(weekDays, analiticDaysTemplate).createDay();

console.log(days);
// const days = new Statistics(weekDays, analiticDaysTemplate).createDay();
daysList.render(days);







// const days = weekDays.map((date) => {
//   return new Statistics(date, analiticDaysTemplate).createDay();
// });

// daysList.render(days);

// const statistic = new Statistics(weekDays, analiticDaysTemplate );


// console.log(days)


// ==================temp======

// const NOW = new Date();
// console.log(NOW);
// const WEEK = new Date();
// WEEK.setDate(new Date().getDate()-7);
// console.log(WEEK);
// const weekForStatistics=[];
//  const weekForStatistics = NOW - WEEK
// .toLocaleString('ru', {
//       day: 'numeric',
//       weekday:'short',
//     })
// var date = new Date();

// for (var i = 0; i < 7; i++){
//   var tempDate = new Date();
//   tempDate.setDate(date.getDate()-i);
//   var str = tempDate.getDate() + "/" + tempDate.getMonth();
//   dates.push(str);
// }
// console.log(dates);

// const dates = [];
// const date = new Date();
// for (let i = 0; i < 7; i++) {
//   const tempDate = new Date();
//   tempDate.setDate(date.getDate() - i);
//   dates.push(tempDate);
// }
// const weekDays = dates.map((day) => {
//   return new Date(day).toLocaleString("ru", {
//     day: "numeric",
//     weekday: "short",
//   });
// });

// console.log(weekDays);

// console.log(dates);
