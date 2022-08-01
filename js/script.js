const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
   e.preventDefault();
   popup.classList.toggle("open");
   renderPopup();
   hamb.classList.toggle('active');
}
function renderPopup() {
   popup.appendChild(menu);
}
//Прокрутка до розділів

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", OnMenuLinkClick);
   })
};

function OnMenuLinkClick(e){
   const menuLink = e.target;
   if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
         top: gotoBlockValue,
         behavior: "smooth"
      });
      e.preventDefault();
   }
}