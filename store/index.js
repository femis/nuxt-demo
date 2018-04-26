import Vue from 'vue'
import Vuex from 'vuex'
import modules from './loader'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const createStore = () => {
    return new Vuex.Store({
        modules,
        strict: debug
    })
}
export default createStore