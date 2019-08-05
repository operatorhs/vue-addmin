import ajax from './ajax'

export function login (data) {
  return ajax({type: 'post', url: 'login', params: data})
}

export function test () {
  return ajax({ type: 'get', url: 'blem' })
}
