export default class Statistics {
  constructor(weekDays, template) {
    this.template = template;
    this.date = weekDays;
   
  }


  createDay() {
    this.container = this.template.cloneNode(true);
    this.container.querySelector('.statistic__analitic-date').textContent = this.date;
    return this.container;

  }
  _addCard(card) {
    this.container.append(card);
  }
  render(array) {
    array.forEach((elem) => this._addCard(elem));
  }
  // render(elem) {
  //   this.elem = elem;
  //   this.container.innerHTML = this.elem;
  // }
}

