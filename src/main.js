import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
