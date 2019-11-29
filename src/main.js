import Vue from 'vue'
import App from './App.vue'
import ListAnimation from './lib'

Vue.config.productionTip = false

Vue.use(ListAnimation)

new Vue({
  render: h => h(App)
}).$mount('#app')
