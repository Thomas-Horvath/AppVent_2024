import "./components/nav-bar.js";

function NavClick(href) {
    console.log(`NavClick: ${href}`)
}

let navbar  = document.querySelector('nav-bar');
navbar.onLinkClick = NavClick;