import Vue from 'vue'
import '@babel/polyfill'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.less'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
