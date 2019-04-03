import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// JavaScript Libs

// CSS Libs
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './assets/css/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
