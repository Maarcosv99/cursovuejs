import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./modules/actions";

import stocks from './modules/stocks'
import portfolio from "./modules/portfolio";

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})
