
export function NavBar() {

    let nav = document.querySelector('header nav');
    nav.addEventListener('click', () => {
        nav.classList.toggle('visible')
    });
}
