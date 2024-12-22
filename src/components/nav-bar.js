class NavBar extends HTMLElement {
    onLinkClick = (() => {});

    connectedCallback() {
        let links = this.querySelectorAll('a');
        this.innerHTML = '<nav><ul></ul></nav>';
        this.#createList(links);
        this.#setupEvents(links);

    }



    #createList(links) {
        let ul = this.querySelector('ul');
        for (let a of links) {
            let li = document.createElement('li');
            li.setAttribute('class', a.getAttribute('class'));
            a.removeAttribute('class');
            li.appendChild(a);
            ul.appendChild(li);
        }
    };

    #setupEvents(links) {
        let nav = this.children[0];
        nav.addEventListener('click', () => {
            nav.classList.toggle('visible')
        });

        for (let a of links) {
            a.onclick = (e) => {
                e.preventDefault();
                let href = e.currentTarget.getAttribute('href');
                this.onLinkClick(href);
            }
        }

    }
}



window.customElements.define('nav-bar', NavBar);