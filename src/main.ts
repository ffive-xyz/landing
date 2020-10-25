import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMykxKXzPa7l1WMgduhGcFUlA0lDfxxu8",
  authDomain: "ffive-xyz.firebaseapp.com",
  databaseURL: "https://ffive-xyz.firebaseio.com",
  projectId: "ffive-xyz",
  storageBucket: "ffive-xyz.appspot.com",
  messagingSenderId: "1031760909671",
  appId: "1:1031760909671:web:565ea112240d2c6429cbc2",
  measurementId: "G-Q91YBZCEN5"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
