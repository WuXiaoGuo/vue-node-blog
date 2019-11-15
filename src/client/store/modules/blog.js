import axios from "../../utils/fetch";
import { blogTypes } from "./classify";

const blog = {
  state: {
    types: blogTypes,
    list: [],
    homeList: [],
    info: {},
    currType: "",
    pagesize: 5,
    loadingMore: false,
    loadingBol: true
  },
  mutations: {
    BLOGLIST(state, res) {
      state.list = res;
    },
    BLOGINFO(state, res) {
      state.info = res.data;
    },
    SAVE_TYPE(state, res) {
      state.currType = res;
    },
    ClERABlogLIST(state,res){
      state.list = res
    }
  },
  actions: {
    clearBlogList({commit,state},params){
      return new Promise((resolve,reject) => {
        commit('ClERABlogLIST',[])
        resolve()
      })
    },
    // 获取博客列表
    async getBlogList({ commit, state }, params) {
      params.pagesize = params.pagesize || state.pagesize;
      state.loadingMore = true;
      state.loadingBol = false;
      return new Promise((resolve, reject) => {
        axios
          .get("blog/list", params)
          .then(res => {
            state.loadingMore = false;
            resolve(res);
            if(state.currType != params.type){
              if(res.data.length <= 0){
                commit('BLOGLIST',[])
              } else {
                commit('BLOGLIST',res.data)
              }
            } else {
              if(res.data.length > 0){
                commit("BLOGLIST", state.list.concat(res.data));
              } else {
                state.loadingBol = false;
              }
            }
            commit("SAVE_TYPE", params.type);
            if (res.data.length >= state.pagesize) {
              state.loadingBol = true;
            }
          })
          .catch(err => {
            // console.log(err)
            reject(err);
          });
      });
    },

    // 获取博客详情
    getBlogInfo({ commit }, _id) {
      return new Promise((resolve, reject) => {
        axios
          .get("blog/info", { _id })
          .then(res => {
            commit("BLOGINFO", res);
            resolve(res);
          })
          .catch(err => {
            // console.log(err)
            reject(err);
          });
      });
    }
  }
};
export default blog;
