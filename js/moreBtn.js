
const menuTabsBtn = document.getElementById("menu-tabs-button");

menuTabsBtn.addEventListener("click", moreBtnPressed);

function changeText(elem){
    const text = elem.querySelector("div");
    var Text = elem.dataset.changetext;
    elem.dataset.changetext = text.innerText;
    text.innerText = Text;
}

function moreBtnPressed(){
    const list = this.nextElementSibling;
    if (this.dataset.changetext !== undefined){changeText(this);}
    this.classList.toggle("visible");
    list.classList.toggle("visible");
}

const ListOfMenu = document.querySelectorAll(".filter")

for(i = 0; i < ListOfMenu.length; i++){
    ListOfMenu[i].addEventListener("click", moreBtnPressedV2);
}

function moreBtnPressedV2(){
    const list = this.nextElementSibling;
    this.classList.toggle("visible");
    list.classList.toggle("visible");
}