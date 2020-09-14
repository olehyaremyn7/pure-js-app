import {Component} from '../core/component'
import {apiService} from '../services/posts'
import {TransformService} from '../services/transform'
import {renderPost} from '../templates/post'

export class Posts extends Component{
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow() {
        this.loader.show()
        const fbData = await apiService.fetch()
        const posts = TransformService.fbObjectToArray(fbData)
        const html = posts.map(post => renderPost(post, {withButton: true})).join(' ')
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html)
    }

    onHide() {
        this.$el.innerHTML = ''
    }
}

function buttonHandler(event) {
    const $el = event.target
    const id = $el.dataset.id
    const title = $el.dataset.title

    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const isPost = favorites.find(post => post.id === id)

        if (isPost) {
            $el.textContent = 'Save'
            $el.classList.add('button-primary')
            $el.classList.remove('button-danger')
            favorites = favorites.filter(post => post.id !== id)
        } else {
            $el.classList.remove('button-primary')
            $el.classList.add('button-danger')
            $el.textContent = 'Delete'
            favorites.push({id, title})
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
}
