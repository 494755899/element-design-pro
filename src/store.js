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
    ...localStorageSetting,
    innerNavgation: []
  },
  mutations: {
    changeMode (state, { modeType, mode }) {
      state[modeType] = mode
    },
    addInnerNavgation (state, { name, path }) {
      console.log('add')
      state.innerNavgation.push({ name, path })
    },
    removeInnerNavgation (state, index) {
      state.innerNavgation.splice(index, 1)
    },
    closeAnotherTag (state, path) {
      const currentPath = []
      state.innerNavgation.forEach(item => {
        if (item === path) {
          currentPath.push(item)
        }
      })
      state.innerNavgation = currentPath
    },
    closeAllTag (state) {
      state.innerNavgation = []
      console.log(state.innerNavgation)
    }
  },
  actions: {

  }
})
