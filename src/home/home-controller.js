
import PopupBox from "../components/popup-box.js";
import DiTarget from "../core/di-target.js";
import HomeService from "./home-service.js";
import HomeView from "./home-view.js";
import SecondView from "./second-view.js";
import ThirdView from "./third-view.js";


class HomeController extends DiTarget {
    static requires = { service: HomeService, view: HomeView, sview: SecondView , tview: ThirdView ,popup: PopupBox};



    main() {
        // this.view.title()
        // let model = this.service.getData();
        // this.view.render(model);
    }
    lists(arg) {
        this.view.title('Home Lists')
        this.sview.render(arg)
            .onCustomClick(data => {
                this.popup.show('Popup title', `<p>Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                <a href="">Click</a></p>`)
                                                .click('a' , () => console.log('Click') );
            })
    }
    ideas() {
        this.view.title('Home Ideas')
        this.tview.render();
    }



}

export default HomeController;