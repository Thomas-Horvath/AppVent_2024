import "./components/nav-bar.js";
import Router from './core/router.js';



// router

let router = new Router();

router.register('lists', () => { console.log('Lists..') })
    .register('family', () => { console.log('Family..') })
    .register('ideas', () => { console.log('Ideas..') })
    .register('home', () => { console.log('Home..') })




document.querySelectorAll('nav-bar').forEach(navbar => {
    navbar.onLinkClick = (href) => router.navigate(href);
});

