import MainView from '../core/main-view.js';
import PopupBox from "../components/popup-box.js";

class FamilyView extends MainView {
    static requires = { popup: PopupBox }

    content(model) {
        return this.frame(`
            <h1>Barátok</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae magni odio mollitia sint.
                Beatae delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <a href="" class="new" title="Új barát">
                <i class="fa-solid fa-circle-plus"></i>
            </a>
            ${model.length ?
            `<ul class="blocks family">
                ${model.map(item =>

                    `<li class="color${item.color}">
                    <div class="icon icon${item.icon}"></div>
                    <span>${item.name}</span>
                    <a href="" class="action" title="Töröl" data-id="${item.id}"> 
                        <i class="fa-solid fa-circle-minus"></i>
                    </a>
                </li>`

                ).join('')}


            </ul>` : `
            <div class="message warning">
                  <p><strong>Üres a lista</strong>Még nincsenek barátok</p> 
            </div>` }`);
    }


    showCreationForm() {
        this.popup.show("Új barát hozzáadása", `
            <form action="" class="familyNew">
                    <div>
                        <label for="name">Barát megnevezése</label>
                        <input type="text" id="name" name="name">
                    </div>
                    <div>
                        <label for="icon">Válassz ikont</label>
                        <fieldset class="chooser icons">
                            <input type="radio" name="icon" value="1" checked>
                            <input type="radio" name="icon" value="2">
                            <input type="radio" name="icon" value="3">
                            <input type="radio" name="icon" value="4">
                            <input type="radio" name="icon" value="5">
                            <input type="radio" name="icon" value="6">
                            <input type="radio" name="icon" value="7">
                            <input type="radio" name="icon" value="8">
                        </fieldset>
                    </div>
                    <div>
                        <label for="color">Válassz színt</label>
                        <fieldset class="chooser colors">
                            <input type="radio" name="color" value="1" checked>
                            <input type="radio" name="color" value="2">
                            <input type="radio" name="color" value="3">
                            <input type="radio" name="color" value="4">
                            <input type="radio" name="color" value="5">
                            <input type="radio" name="color" value="6">
                            <input type="radio" name="color" value="7">
                            <input type="radio" name="color" value="8">
                        </fieldset>
                    </div>
                    <button>
                        <i class="fa-solid fa-check"></i>
                        Hozzáad
                    </button>
                </form>
            `);

        return {
            onSubmit: (method => {
                let form = document.querySelector('form.familyNew')
                form.onsubmit = (e => {
                    e.preventDefault();
                    this.popup.close();
                    method({
                        name: form.name.value,
                        icon: form.icon.value,
                        color: form.color.value
                    });
                });
            })
        };
    }

    onNewClick(method) {
        this.click('a.new', method);
        return this;
    }
    onDelClick(method) {
        this.click('.family a.action', method);
        return this;
    }
}

export default FamilyView;