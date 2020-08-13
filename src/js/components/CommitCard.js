
export class CommitCard {

  constructor(data, template){
    this.name = data.commit.committer.name;
    this.link = data.author.avatar_url;
    // this.date = date;
    this.text = data.commit.message;
    this.email = data.commit.committer.email;
    this.template = template;
    // this.res = res;
   

  }

  createCard() {
    this.container = this.template.cloneNode(true);
    // this.container.querySelector(".history__slide-date").textContent = this.date;
    this.container.querySelector(".history__slide-title").textContent = this.name;
    this.container.querySelector(".history__slide-text").textContent = this.text;
    this.container.querySelector(".history__slide-email").textContent = this.email;
    // this.container.querySelector(".history__slide-avatar").style.backgroundImage = `url(${this.link})`;
    this.container.querySelector(".history__slide-avatar").setAttribute ("src", `${this.link}`);

    // this.setEventListeners();
    return this.container;
  }
 


  // like(event) {
  //   event.target.classList.toggle("place-card__like-icon_liked");

  // }

  // remove() {
  //   this.container.remove();
 
  // }
 
  // openImage = ()=> {
  //   this.openPicturesCall(this.link);
  // };

  // setEventListeners() {
  //   this.container.addEventListener("click", (event) => {
  //     if (event.target.classList.contains("place-card__like-icon")) {
  //       this.like(event);
  //     }
  //     if (event.target.classList.contains("place-card__delete-icon")) {

  //       this.remove(event);
  //     }
  //     if (event.target.classList.contains("place-card__image")) {

  //       this.openImage(this.link);
  //     }
  //   });
  // }
  
  
}




