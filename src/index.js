import './stylesheets/styles.css'
import {Header} from './shared/components/header'
import {Navigation} from './shared/components/navigation'
import {Posts} from './shared/components/posts'
import {Create} from './shared/components/create'
import {Favorite} from './shared/components/favorite'
import {Loader} from './shared/components/loader'

new Header('header')

const navigation = new Navigation('navigation')
const loader = new Loader('loader')

const posts = new Posts('posts', {loader})
const create = new Create('create')
const favorite = new Favorite('favorite', {loader})

navigation.availableTabs([
    { name: 'create', component: create },
    { name: 'posts', component: posts },
    { name: 'favorite', component: favorite }
])
