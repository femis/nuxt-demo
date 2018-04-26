import axios from '~/plugins/axios'
import qs    from 'qs';
export default {
    get:function (url='',params={}) {
        return this.init(url, params, 'GET')
    },
    post:function () {
        return this.init(url, params, 'POST')
    },
    init:function (url,data,type='post') {
        return new Promise(function (resolve, reject) {
            axios({
                method:type,
                url: url,
                data: qs.stringify(data)
            }) .then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error)
            });
        })
    }
}