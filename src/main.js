import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import './style/style.scss'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
