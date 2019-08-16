import {Component} from "./ui-framework-es+.js";

export class Menu extends Component {
    constructor(element, title, items) {
        super(element);
        this._title = title;
        this._items = items;
        this._render()
        this._dropdownArea = this._element.querySelector('.dropdown-menu');
        this._element.querySelector('button').addEventListener('click', this.toggle.bind(this))
    }

    open() {
        this._dropdownArea.classList.add('show')
    }

    close() {
        this._dropdownArea.classList.remove('show')
    }

    toggle() {
        this._dropdownArea.classList.toggle('show')
    }

    _render() {
        this._element.innerHTML = `
     <div class="dropdown">
         <button class="btn btn-secondary dropdown-toggle" type="button" >
            ${this._title}
         </button>
         <div class="dropdown-menu">
             ${this._items.map((item) => ` <a class="dropdown-item" href="#">${item}</a>`).join('')}
         </div>
     </div>
    `;
    }
}




