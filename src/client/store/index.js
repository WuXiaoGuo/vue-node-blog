import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import blog from './modules/blog'
import commet from './modules/commet'
import getters from './getters'
import state from './state'

// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
// export const state = {
//   loading: false,
//   UserList: [111,222,333], //用户列表
//   themeObj: 0,//主题
//   aboutmeObj:'',//关于我的信息
//   host:"http://"+window.location.host+"/port/",//接口路径
//   keywords:'',//关键词
//   errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') +'"'
// }

export default new Vuex.Store({
    // state,
    modules: {
      app,
      blog,
      commet
  },
  getters,
  state
})


// const store = new Vuex.Store({
//   modules: {
//       app,
//       blog
//   },
//   getters
// })

// export default store;