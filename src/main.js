import "./components/nav-bar.js";
import Router from './core/router.js';
import config from './config.js';


 
// router

let router = new Router(config);

router.register('lists', () => { console.log('Lists..') })
    .register('family', () => { console.log('Family..') })
    .register('ideas', () => { console.log('Ideas..') })
    .register('home', () => { console.log('Home..') })
    .manage();




document.querySelectorAll('nav-bar').forEach(navbar => {
    navbar.onLinkClick = (href) => router.navigate(href);
});

