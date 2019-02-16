const navButtons = document.querySelector(".navbox");

const opener = document.querySelector("#openMenu");

const closer = document.querySelector("#closeMenu");

opener.addEventListener("click", function() {
  console.log("opener");
  navButtons.classList.toggle("menuClose");
  opener.classList.toggle("menuClose");
  closer.classList.toggle("menuClose");
});

closer.addEventListener("click", function() {
  console.log("closer");
  navButtons.classList.toggle("menuClose");
  opener.classList.toggle("menuClose");
  closer.classList.toggle("menuClose");
});


let links = document.querySelectorAll(".link");

class Tab {
  constructor(link) {
    this.link = link;
    this.link.addEventListener("click", () => {this.linkClick();});
    this.linkData = this.link.dataset.tab;
    this.tabContent = document.querySelector(`.content[data-tab='${this.linkData}']`);
    this.tabContent = new Content(this.tabContent);
  
  }
  linkClick() {

    this.tabContent.toggleContent();
  }
}

class Content {
  constructor(tabContent) {
    this.tabContent = tabContent;
  }
  toggleContent() {
    const currentTab = document.querySelector('.tabShow');
    currentTab && currentTab.classList.toggle('tabShow');

    this.tabContent.classList.toggle('tabShow');
   
  }
}

links = Array.from(links).map(link => new Tab(link));