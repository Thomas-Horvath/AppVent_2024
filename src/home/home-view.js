import MainView from "../core/main-view.js";

class HomeView extends MainView {
    content(data) {
        return this.frame(`<h1>${data.title}</h1>
                             <p>${data.text}</p>
                             <a href="lists/987">Tovább</a>`);
    }
}

export default HomeView;