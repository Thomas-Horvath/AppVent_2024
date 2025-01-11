import MainView from '../core/main-view.js';


class IdeaReadView extends MainView {
    loading() {
        this.title('Ajándékötlet-cikk')
        this.container.classList.add('loading');
    }

    content(model) {
        this.container.classList.remove('loading');
        return this.frame(`<h1>${model.title}</h1>
            <p><stronge>${model.intro}</stronge></p>
            <img src="${model.image}"/>
            <p>${model.body}</p>
            `)
    }

}
export default IdeaReadView;