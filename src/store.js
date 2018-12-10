import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let localStorageSetting = {
  layout: 'slide',
  primaryColor: '#1890FF',
  contentWidth: 'Fixed',
  fixSiderbar: false,
  fixHeader: false,
  onlyScreen: false,
  navTheme: 'dark',
  hideHeader: false,
  backToTop: false,
  blindness: false
}
if (localStorage.setting) {
  localStorageSetting = JSON.parse(localStorage.setting)
}
console.log(localStorageSetting)
export default new Vuex.Store({
  state: {
    ...localStorageSetting
  },
  mutations: {
    changeMode (state, { modeType, mode }) {
      state[modeType] = mode
    }
  },
  actions: {

  }
})
