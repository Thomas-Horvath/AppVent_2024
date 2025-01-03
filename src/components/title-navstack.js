class TitleNavstack extends HTMLElement {
    onChange = (() => { });
    #internals = null;  // # = privát változó
    #pathStack = [];
    constructor() {
        super();
        this._internals = this.attachInternals();
        this._internals.states.add('title');
    }
    connectedCallback() {
        this.querySelector('*[data-nav]').onclick = (e) => {
            e.preventDefault();
            this.back();
        }
    }

    next(title, path) {

    }

    back() {

    }

    reset() {

    }
}

window.customElements.define('title-navstack', TitleNavstack);

export default TitleNavstack;