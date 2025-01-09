import DiTarget from "../core/di-target.js";



class IdeasController extends DiTarget {
  static requires = { service: FamilyService, view: FamilyView }

  main() {
   
  }
}

export default IdeasController;