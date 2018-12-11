import Vue from 'vue'
import '@babel/polyfill'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.less'
import '@/assets/css/element-reset.less'
import InitGobal from '@/util/buildIn/initGobal'
import routes from '@/util/buildIn/initRoutes'
import App from './App.vue'
import store from './store'
InitGobal()
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
