export default class Statistics {
  constructor(weekDays, template) {
    this.template = template;
    this.date = weekDays;
    // this.width = getWidth
   
  }


  createDay() {
    this.container = this.template.cloneNode(true);
    this.container.querySelector('.statistic__analitic-date').textContent = this.date;
    return this.container;

  }

  _addDay(elem) {
    this.container.append(elem);
  }
  render(array) {
    array.forEach((elem) => this._addDay(elem));
  }

}

