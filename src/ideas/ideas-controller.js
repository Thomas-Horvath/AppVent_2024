import DiTarget from "../core/di-target.js";
import IdeaReadView from "./ideas-read-view.js";
import IdeasService from "./ideas-service.js";
import IdeasView from "./ideas-view.js";



class IdeasController extends DiTarget {
  static requires = { service: IdeasService, view: IdeasView, readView: IdeaReadView }

  async main() {
    this.view.loading();

    let ideas = await this.service.getIdeas();
    this.view.render(ideas);
  }

  async read(id) {
    this.readView.loading();
    let idea =await this.service.getIdeaById(id);
    this.readView.render(idea);
  }
}

export default IdeasController;