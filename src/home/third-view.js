import MainView from "../core/main-view.js";

class ThirdView extends MainView {
    content(id) {
        return this.frame(`<h1>Third View</h1>
                             <p>Lorem ipsum dolor sit ...</p>
                             <a href="home">Vissza</a>`);
    }

    onCustomClick(method) {
        this.click('a[href=""]', method);
    }
}

export default ThirdView;