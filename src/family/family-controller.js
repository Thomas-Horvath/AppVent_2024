import DiTarget from "../core/di-target.js";
import FamilyService from "./family-service.js";
import FamilyView from "./family-view.js";

class FamilyController  extends DiTarget{
static requires = { service: FamilyService, view: FamilyView}

    main() {
      let model = this.service.getAll();
      this.view.render(model);
    }
}

export default FamilyController;