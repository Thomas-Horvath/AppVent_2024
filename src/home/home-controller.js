import { getInstance } from "../core/core.js";
import DiTarget from "../core/di-target.js";
import HomeService from "./home-service.js";
import HomeView from "./home-view.js";


class HomeController extends DiTarget {
    static requires = {service: HomeService, view: HomeView};
 


    main() {
        this.view.showData(this.service.getData());
    }
    lists(arg) {
        console.log('Home Lists..', arg);
    }
    ideas() {
        console.log('Home Ideas..');
    }



}

export default HomeController;