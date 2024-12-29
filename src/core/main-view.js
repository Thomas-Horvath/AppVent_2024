import DiTarget from "./di-target.js";
import Router from "./router.js";

class MainView extends DiTarget {

    static requires = { router: Router };

    container = null;

    init() {
        this.container = document.querySelector('main > .container');
    }

    render(model) {
        this.container.innerHTML = this.content(model);

        let self = this
        function linkClick(e) {
            e.preventDefault();
            let href = e.currentTarget.getAttribute('href'); // kiolvassuk ahref attrubútumot
            self.router.navigate(href);
        }
        this.container.querySelectorAll('a').forEach(a => {
            a.onclick = linkClick;
        });
        return this;
    }

    click(selector, methode) {
        function elemClick(e) {
            e.preventDefault();
            methode(e.currentTarget.dataset,e.currentTarget,e);
        }
        this.container.querySelectorAll(selector).forEach(elem => {
            elem.onclick = elemClick;
        });
    }


    frame(content) {
        return `<section>${content}</section>`;
    }



    content(model) {
        throw new Error("Method 'content' is not implemented")
    }
}

export default MainView;