class PopupBox extends HTMLElement {
    constructor() {
        super();
        let title = this.getAttribute('title');
        let content = this.innerHTML;

        this.innerHTML = `<div class='pbFrame'>
                            <span class='close'></span>
                            <div class='pbInside'>
                                <div class='pbHead'>
                                    <h3>${title}</h3>
                                </div>
                                <div class='pbBody'>
                                    ${content}
                                </div>   
                            </div> 
                        </div>`
        this.close();
        this.querySelector('.close').onclick = (() => { this.close() });

    }



    open() {
        this.style.display = 'block';
    }

    close() {
        this.style.display = 'none';
    }
}

window.customElements.define('popup-box', PopupBox);

export default PopupBox;