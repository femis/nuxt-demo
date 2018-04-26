import * as axios from 'axios'

let options = {}
if (process.server) {
    options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    options.timeout = 120
    options.withCredentials = true //表示跨域请求时是否需要使用凭证
    options.xsrfCookieName = 'XSRF-TOKEN'
    options.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
}
export default axios.create(options)
