import Vue from 'vue'
import GobalMixins from '@/mixins/gobal/index'
import BaseElementComponent from '@/components/baseElement/index'
import GobalFilter from '@/filter/gobal/index'

export default function initGobal () {
  Object.keys(BaseElementComponent).forEach(component => {
    let compName = component.replace(/([A-Z])/g, '-$1').toLowerCase()
    compName = compName.substr(1, compName.lenght)
    console.log(compName)
    Vue.component(compName, BaseElementComponent[component])
  })
  Object.keys(GobalFilter).forEach(filter => {
    Vue.filter(filter, GobalFilter[filter])
  })

  Object.keys(GobalMixins).forEach(mixin => {
    Vue.mixin(GobalMixins[mixin])
  })
}
