class TitleNavstack extends HTMLElement {
    onChange = (() => { });
    #internals = null;  // # = privát változó
    #pathStack = [];
    #actualPath = null;

    constructor() {
        super();
        this.#internals = this.attachInternals();
       this.reset();
    }
    connectedCallback() {
        this.querySelector('*[data-nav] a').onclick = (evt => {
            evt.preventDefault();
            this.back();
        });
    }

    next(title, path) {
        this.#internals.states.delete('title');
        this.querySelector('*[data-nav] span').innerHTML = title;
        if (this.#actualPath) {
            this.#pathStack.push(this.#actualPath);
        }
        this.#actualPath = path;
    }

    back() {
        if (this.#pathStack.length) {
            let prev = this.#pathStack.pop();
            this.#actualPath = null;
            this.onChange(prev);
        } else {
            this.reset();
            this.onChange('');
        }
    }

    reset() {
        this.#pathStack = [];
        this.#internals.states.add('title');
        this.#actualPath = null
    }
}

window.customElements.define('title-navstack', TitleNavstack);

export default TitleNavstack;