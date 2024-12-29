
import DiTarget from "../core/di-target.js";
import HomeService from "./home-service.js";
import HomeView from "./home-view.js";
import SecondView from "./second-view.js";


class HomeController extends DiTarget {
    static requires = { service: HomeService, view: HomeView, sview: SecondView };



    main() {
        let model = this.service.getData();
        this.view.render(model);
    }
    lists(arg) {
        this.sview.render(arg)
            .onCustomClick((data) => {
                document.querySelector('popup-box').open();
            })
    }
    ideas() {
        console.log('Home Ideas..');
    }



}

export default HomeController;