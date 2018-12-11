import dayjs from 'dayjs'

export default (value) => {
  if (value) {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return ''
  }
}
