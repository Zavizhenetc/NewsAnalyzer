export default class NewsCardList {
  constructor(container) {
    this.container = container;
    this.allNewsTwmplate = this.container.querySelectorAll('.result__card-link');

  }

  addCard(card) {
    this.container.append(card);
  }
  render(array) {
    array.forEach((elem) => this.addCard(elem));
  }
  remove() {
    this.container.innerHTML = '';
  }

}