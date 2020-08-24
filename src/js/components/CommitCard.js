export default class CommitCard {
  constructor(data, TEMPLATE) {
    this.name = data.commit.committer.name;
    this.link = data.author.avatar_url;
    this.date = data.commit.committer.date;
    this.text = data.commit.message;
    this.email = data.commit.committer.email;
    this.TEMPLATE = TEMPLATE;

  
  }
  _commitDate() {
    return new Date(this.date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      
    });
  }

  createСommitCard() {
    this.container = this.TEMPLATE.cloneNode(true);
    this.container.querySelector('.history__slide-date').textContent = this._commitDate();
    this.container.querySelector('.history__slide-title').textContent = this.name;
    this.container.querySelector('.history__slide-text').textContent = this.text;
    this.container.querySelector('.history__slide-email').textContent = this.email;
    this.container.querySelector('.history__slide-avatar').setAttribute('src', `${this.link}`);
    return this.container;
  }
}
