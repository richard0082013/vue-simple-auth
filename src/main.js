import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
let app = "";
// Your web app's Firebase configuration
const firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
