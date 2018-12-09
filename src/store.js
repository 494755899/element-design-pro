import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'slide',
    contentWidth: 'Fixed',
    fixSiderbar: false,
    fixHeader: false,
    onlyScreen: false,
    navTheme: 'dark',
    hideHeader: false,
    backToTop: false,
    blindness: false
  },
  mutations: {
    changeMode (state, { modeType, mode }) {
      state[modeType] = mode
    }
  },
  actions: {

  }
})
