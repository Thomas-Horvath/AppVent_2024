class PopupBox extends HTMLElement {
    #internals = null;

    constructor() {
        super();
        this.#internals = this.attachInternals();  // egyedi állapotok definiálásához
    }


    connectedCallback() {
        let title = this.getAttribute('title');
        let content = this.innerHTML;
        this.removeAttribute('title');

        this.innerHTML = `<div class='pbFrame'>
                            <span class='close'></span>
                            <div class='pbInside'>
                                <div class='pbHead'>
                                    <h3>${title}</h3>
                                </div>
                                <div class='pbBody'>
                                    ${content}
                                </div>   
                            </div> 
                        </div>`
        this.close();
        this.querySelector('.close').onclick = (() => { this.close() });

    }


    show(title, content) {
        this.querySelector('.pbHead h3').innerHTML = title;
        this.querySelector('.pbBody').innerHTML = content;
        this.open();
        return this;
    }

    click(selector, methode) {
        function elemClick(e) {
            e.preventDefault();
            methode(e.currentTarget.dataset,e.currentTarget,e);
        }
        this.querySelectorAll(selector).forEach(elem => {
            elem.onclick = elemClick;
        });
    }


    open() {
        this.#internals.states.add('visible')
    }

    close() {
        this.#internals.states.delete('visible')
    }
}

window.customElements.define('popup-box', PopupBox);

export default PopupBox;


