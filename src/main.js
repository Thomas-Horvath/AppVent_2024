import "./components/nav-bar.js";
import Router from './core/router.js';
import config from './config.js';
import HomeController from './home/home-controller.js';
import FamilyController from "./family/family-controller.js";




// router

let router = new Router(config);

router.register('lists', HomeController, 'lists')
    .register('family', FamilyController )
    .register('ideas', HomeController, 'ideas')
    .register('home', HomeController )
    .manage();




document.querySelectorAll('nav-bar').forEach(navbar => {
    navbar.onLinkClick = (href) => router.navigate(href);
});

