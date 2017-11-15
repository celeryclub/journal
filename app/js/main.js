import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/js/routes'
import App from '@/js/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
