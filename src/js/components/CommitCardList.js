export default class CardList {
  constructor(container) {
    this.container = container;
  }
  addCard(card) {
    this.container.append(card);
  }
  render(array) {
    array.forEach((elem) => this.addCard(elem));
  }
}