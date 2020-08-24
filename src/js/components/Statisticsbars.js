export default class Statisticsbars {
  constructor(width, template ) {
    this.template = template;
    this.width = width
   
  }
  createBar() {
    this.container = this.template.cloneNode(true);
    this.container.querySelector('.statistic__analitic-percent').setAttribute('style', `width: ${this.width }%`);
    this.container.querySelector('.statistic__analitic-digit').textContent =`${this.width}% ` ;
    return this.container;

  }
  _addBar(elem) {
    this.container.append(elem);
  }
  render(array) {
    array.forEach((elem) => this._addBar(elem));
  }

}

