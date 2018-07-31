import HomePage from './components/HomePage.vue'
import SinglePage from './components/SinglePage.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/post/:id',
    name: 'post',
    component: SinglePage
  },
]