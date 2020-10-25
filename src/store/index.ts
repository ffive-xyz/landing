import { createStore } from "vuex";
import * as firebase from "firebase/app";

export default createStore({
  state: {
    theme: ""
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getTheme: state => state.theme
  },
  strict: process.env.NODE_ENV !== "production"
});
