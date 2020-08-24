
export default class NewsApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.newsToken = config.newsToken;
    this.dateFrom = config.from
    this.dateTo = config.to
    this.lang = config.language
    this.pageSize = config.pageSize;
    this.sortBy = config.sortBy;

  }

  getNews(request) {
    return fetch(`${this.baseUrl}?apiKey=${this.newsToken}&from=${this.dateFrom}&to=${this.dateTo}&pageSize=${this.pageSize}&sortBy=${this.sortBy}&language=${this.lang}&q=${request}`, {
    }).then((res)=>  this._getResponseData(res));
  
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } 
      return Promise.reject(res.status);
    }
}
