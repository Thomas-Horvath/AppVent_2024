import MainView from "../core/main-view.js";

class SecondView extends MainView {
    content(id) {
        return this.frame(`<h1>Entity${id}</h1>
                             <p>Lorem ipsum dolor sit ...</p>
                             <a href="home">Vissza</a>
                             <br>
                             <br>
                             <a href="" data-id="1" data-name="First">Custom Click</a>
                             <a href="" data-id="2" data-name="Second">Custom Click</a>
                             <a href="" data-id="3" data-name="Third">Custom Click</a>
                             `);
    }

    onCustomClick(method) {
        this.click('a[href=""]', method);
    }
}

export default SecondView;