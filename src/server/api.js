import axios from './index'
import ApiConfig from 'src/config/api'

const Server = {}
ApiConfig.forEach(api => {
  Server[api.name] = async function ServerWrap ({ method = 'get', data = {}, action = [], message = '' } = {}) {
    const { data: result } = await axios({
      url: api.value,
      method,
      data,
      action,
      message
    })
    return result
  }
})

export default Server
