function log(elem) {
  console.log(elem);
}
import "./about.css";
import "../../vendor/swiper.js";
import { GitHubApi } from "../../js/modules/GithubApi.js";
import { CONFIG } from "../../js/constants/constans.js";
import { CardList } from "../../js/components/CommitCardList.js";
import { CommitCard } from "../../js/components/CommitCard.js";



const commitPlacesList = document.querySelector(".places-list");

const gitHubApi = new GitHubApi(CONFIG);
// const gitHubApi = new GitHubApi();
const cardList = new CardList(commitPlacesList);

const template = document
  .querySelector("#swiper-slide")
  .content.querySelector(".swiper-slide");

gitHubApi
  .getGithubCommits()
  .then((res) => {
    // console.log(res);
    const basicCommits = res.map((data, res) => {
      return new CommitCard(data, template).createCard();
    });
    cardList.render(basicCommits);
  })
  .catch((err) => {
    console.log(`Без паники ! это всего лишь ошибка ${err} `);
  });
