export default class DataStorage{
  constructor(){

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
  
  getRequest(){
    // return JSON.parse(localStorage.getItem('request'));
    return localStorage.getItem('request');
  }

  clearStorage(){
    localStorage.clear();
  }


}
