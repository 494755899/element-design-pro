import Bus from '@/util/buildIn/bus'
export default {
  methods: {
    _openDialog (data) {
      Bus.$emit('Dialogs.push', data)
    },
    _closeDialog () {
      Bus.$emit('Dialogs.close', this.destoryName)
    }
  }
}
