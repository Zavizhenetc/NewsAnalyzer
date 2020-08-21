export default class NewsCardList {
  constructor(container) {
    this.container = container;
    // this.allNewsTwmplate = this.container.querySelectorAll('.result__card-link');

  }

  _addCard(card) {
    this.container.append(card);
  }
  render(array) {
    array.forEach((elem) => this._addCard(elem));
  }
  remove() {
    this.container.innerHTML = '';
  }

}