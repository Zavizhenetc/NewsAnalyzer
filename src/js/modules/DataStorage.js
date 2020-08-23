export default class DataStorage{
  constructor(){

  }
  setTotalResults(totalResults){
    localStorage.setItem ('totalResults', JSON.stringify(totalResults))
  }

  setNews(news){
    localStorage.setItem ('news',JSON.stringify(news))

  }
  setRequest(request){
    localStorage.setItem ('request',request.value)

  }
  getNewsCards(){
    //  return localStorage.getItem('news');
     return JSON.parse(localStorage.getItem('news'));
  }
 
  getTotalResult(){
    // return JSON.parse(localStorage.getItem('totalResults'));
    return localStorage.getItem('totalResults');
  }
  
  getRequest(){
    // return JSON.parse(localStorage.getItem('request'));
    return localStorage.getItem('request');
  }

  clearStorage(){
    localStorage.clear();
  }


}
