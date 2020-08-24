

import './about.css';
import {swiper} from '../../vendor/swiper.js';
import  GitHubApi  from '../../js/modules/GithubApi.js';
import { CONFIG_GITHUB,  COMMIT_PLACES_LIST  } from '../../js/constants/constans.js';
import  CardList  from '../../js/components/CommitCardList.js';
import CommitCard from '../../js/components/CommitCard.js';


const commitTemplate = document.querySelector('#swiper-slide').content.querySelector('.swiper-slide');


const gitHubApi = new GitHubApi (CONFIG_GITHUB);
const cardList = new CardList(COMMIT_PLACES_LIST);



gitHubApi.getGithubCommits()
  .then((res) => {
    const commits = res.map((data) => {
      return new CommitCard(data, commitTemplate).createСommitCard();
    });
    cardList.render(commits);
    swiper.updateSlides();
  })
  .catch((err) => {
    alert(`Без паники ! это всего лишь ошибка ${err} `);
  });
