import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue Libs
import VueImageLoader from '@kevindesousa/vue-image-loader'

// JavaScript Libs
import moment from 'moment'

// CSS Libs
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './assets/scss/icons.scss'
import './assets/scss/style.scss'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'frosted-glass',
  'frosted-glass-container'
]
Vue.use(VueImageLoader)

window.moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
