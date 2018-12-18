import EBConfig from '@/config/baseElement'
const { pageSize, pageSizes, pageSizeName, pageName } = EBConfig.elementTable
export default {
  data () {
    return {
      [pageName]: 1,
      [pageSizeName]: pageSize,
      total: 0,
      pageSizes,
      pageSizeName,
      pageName
    }
  }
}
