export default class NewsCard {
  constructor(data, TEMPLATE) {
    this.link = data.url;
    this.img = data.urlToImage;
    this.date = data.publishedAt;
    this.title = data.title;
    this.text = data.description;
    this.name = data.source.name;
    this.TEMPLATE = TEMPLATE;
    this.data = data;
  }
  _newsDate() {
    return new Date(this.date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  createNewsCard() {
    this.container = this.TEMPLATE.cloneNode(true);
    if (this.img === null) {
      this.container
        .querySelector('.result__card-img')
        .setAttribute('src', `src/images/404_page.png`);
    } else {
      this.container
        .querySelector('.result__card-img')
        .setAttribute('src', `${this.img}`);
    }
    // this.container.querySelector('.result__card-img').setAttribute('src', `${this.img}`);
    this.container
      .querySelector('.result__card-link')
      .setAttribute('href', `${this.link}`);
    this.container.querySelector(
      '.result__date'
    ).textContent = this._newsDate();
    this.container.querySelector(
      '.result__card-title'
    ).textContent = this.title;
    this.container.querySelector('.result__card-text').textContent = this.text;
    this.container.querySelector(
      '.result__card-source-link'
    ).textContent = this.name;

    return this.container;
    // console.log(this.container);
  }
}
