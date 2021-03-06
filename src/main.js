// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './common/reset.css'
// import Velocity from 'velocity-animate'
// window.Velocity = window.velocity = Velocity
// import 'velocity-animate/velocity.ui.js'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

