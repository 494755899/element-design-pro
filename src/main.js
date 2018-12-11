import Vue from 'vue'
import '@babel/polyfill'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.less'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/productClass',
      component: () => import('./pages/productClass.vue')
    }
  ]
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
