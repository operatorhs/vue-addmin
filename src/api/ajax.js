import axios from 'axios'

export default function request (data) {
  let url = 'http://www.operatorhs.com/'
  data.type = data.type || 'get'
  if (data.type === 'get') {
    let params = ''
    if (data.params) {
      let keys = Object.keys[data.params]
      keys.forEach(item => {
        params += keys + data.params[item] + '&'
      })
    }
    params = params !== '' ? '?' + params.substring(0, params.length - 1) : ''
    return axios.get(url + data.url + params)
  } else {
    let {user, pass} = data.params
    return axios.post(url + data.url, JSON.stringify({user, pass}))
  }
}
