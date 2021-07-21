const root = document.querySelector(':root');
const nav = document.querySelector('.navlist');
const itemHome = document.querySelector('.home');
const itemAbout = document.querySelector('.about');
const itemProduct = document.querySelector('.product');
const itemContact = document.querySelector('.contact');

let positionFinish;

const fncHome = () => {
  positionFinish = '0px';
  itemAbout.classList.remove('active');
  itemHome.classList.add('active');
  itemProduct.classList.remove('active');
  itemContact.classList.remove('active');
  root.style.setProperty('--position-finish', positionFinish);
}

const fncAbout = () => {
  positionFinish = '150px';
  itemHome.classList.remove('active');
  itemAbout.classList.add('active');
  itemProduct.classList.remove('active');
  itemContact.classList.remove('active');
  root.style.setProperty('--position-finish', positionFinish);
}

const fncProduct = () => {
  positionFinish = '300px';
  itemHome.classList.remove('active');
  itemAbout.classList.remove('active');
  itemProduct.classList.add('active');
  itemContact.classList.remove('active');
  root.style.setProperty('--position-finish', positionFinish);
}

const fncContact = () => {
  positionFinish = '452px';
  itemHome.classList.remove('active');
  itemAbout.classList.remove('active');
  itemProduct.classList.remove('active');
  itemContact.classList.add('active');
  root.style.setProperty('--position-finish', positionFinish);
}

itemHome.addEventListener('click', fncHome);
itemAbout.addEventListener('click', fncAbout);
itemProduct.addEventListener('click', fncProduct);
itemContact.addEventListener('click', fncContact);
