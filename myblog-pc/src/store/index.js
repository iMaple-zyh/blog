import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    loginUser: "",
    blogComment:""
  },
  // 同步操作
  mutations: {
    storeLoginUser(state, user){
      state.loginUser = user
    },
    storeBlogComment(state, comment) { 
      state.blogComment=comment
    }
  },
  // 异步操作
  actions: {
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem("mytoken", token);
    },
    logout: state => {
      state.token = null;
      localStorage.removeItem('mytoken');
    }
  },
  modules: {}
});