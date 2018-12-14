import Occupy from './occupy'

const install = function (Vue) {
  Vue.directive('el-occupy', Occupy)
}

if (window.Vue) {
  window['el-occupy'] = Occupy
  Vue.use(install); // eslint-disable-line
}

Occupy.install = install
export default Occupy
