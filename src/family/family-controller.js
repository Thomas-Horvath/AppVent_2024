import DiTarget from "../core/di-target.js";
import FamilyService from "./family-service.js";
import FamilyView from "./family-view.js";

class FamilyController extends DiTarget {
  static requires = { service: FamilyService, view: FamilyView }

  main() {
    let model = this.service.getAll();
    this.view.render(model)
      .onNewClick(() => {
        this.view.showCreationForm()
          .onSubmit(data => {
            this.service.add(data);
            this.main();
          })
      })
      .onDelClick(del => {
        this.service.remove(del.id);
        this.main();
      })
  }
}

export default FamilyController;