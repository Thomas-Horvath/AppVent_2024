import MainView from '../core/main-view.js';

class FamilyView extends MainView {
    content(model) {
        return this.frame(`
            <h1>Barátok</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae magni odio mollitia sint.
                Beatae delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <a href="" class="new" title="Új barát">
                <i class="fa-solid fa-circle-plus"></i>
            </a>

            <ul class="blocks family">
            ${model.map(item =>

                `<li class="color${item.color}">
                    <div class="icon icon${item.icon}"></div>
                    <span>${item.name}</span>
                    <a href="" class="action">
                        <i class="fa-solid fa-circle-minus"></i>
                    </a>
                </li>`

            ).join('')}


            </ul>
            `);
    }
}

export default FamilyView;