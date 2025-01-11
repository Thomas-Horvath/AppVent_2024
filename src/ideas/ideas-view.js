import MainView from '../core/main-view.js';


class IdeasView extends MainView {
    loading() {
        this.title('Ajándékötletek')
        this.container.classList.add('loading');
    }

    content(items) {
        this.container.classList.remove('loading');
        return `${items.map(item => `<article>
        <a href="idea/${item.id}">
            <img src="${item.image}" alt="">
            <div class="info">
                <h3>${item.title}</h3>
                <p>${item.intro}</p>
            </div>
        </a>
    </article>`).join('')} `
    }

}
export default IdeasView;