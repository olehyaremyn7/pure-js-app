import {Component} from '../core/component'

export class Header extends Component{
    constructor(id) {
        super(id)
    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide()
        }
        this.$el.querySelector('.js-header-start').addEventListener('click', btnHandler.bind(this))
    }
}

function btnHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
}
