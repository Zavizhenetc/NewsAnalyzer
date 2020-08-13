export class GitHubApi {
  constructor (config){
    this.baseUrl = config.baseUrl;
  
  }
getGithubCommits() {
  return fetch(`${this.baseUrl}/repos/Zavizhenetc/NewsAnalyzer/commits`, {
  // return fetch("https://api.github.com/repos/Zavizhenetc/NewsAnalyzer/commits", {
  })
  .then((res)=>  this._getResponseData(res));
  
}
_getResponseData(res) {
    if (res.ok) {
      return res.json();
    } 
      return Promise.reject(res.status);
    }
}