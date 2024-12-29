
import DiTarget from "../core/di-target.js";
import HomeService from "./home-service.js";
import HomeView from "./home-view.js";


class HomeController extends DiTarget {
    static requires = {service: HomeService, view: HomeView};
 


    main() {
        let model = this.service.getData();
        this.view.render(model);
    }
    lists(arg) {
        console.log('Home Lists..', arg);
    }
    ideas() {
        console.log('Home Ideas..');
    }



}

export default HomeController;