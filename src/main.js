import "./components/nav-bar.js";
import "./components/popup-box.js";
import "./components/title-navstack.js";
import Router from './core/router.js';
import HomeController from './home/home-controller.js';
import FamilyController from "./family/family-controller.js";
import { getInstance , registerInstance } from "./core/core.js";
import PopupBox from "./components/popup-box.js";
import IdeasController from "./ideas/ideas-controller.js";



// router

let router = getInstance(Router);

router.register('lists', HomeController, 'lists')
    .register('family', FamilyController )
    .register('ideas', IdeasController)
    .register('idea', IdeasController , 'read')
    .register('home', HomeController );





document.querySelectorAll('nav-bar').forEach(navbar => {
    navbar.onLinkClick = (href) => router.navigate(href);
});

let navStack = document.querySelector('title-navstack');
navStack.onChange = (path => router.navigate(path)); 
registerInstance(navStack);

let popupBox =document.createElement('popup-box');
document.body.appendChild(popupBox)

registerInstance(popupBox);

router.manage();