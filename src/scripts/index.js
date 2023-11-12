import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/detail.css';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  mobileMenu: document.querySelector('#drawer-mobile-menu'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  lazySizes.init();
});
