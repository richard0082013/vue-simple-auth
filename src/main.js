import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
let app = "";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9oc7nmYvbVHJcBHV2MHVuIz0Pqh0XYs",
  authDomain: "vue-firebase-008.firebaseapp.com",
  databaseURL: "https://vue-firebase-008.firebaseio.com",
  projectId: "vue-firebase-008",
  storageBucket: "",
  messagingSenderId: "193778379393",
  appId: "1:193778379393:web:e623e280615ee42d"
};
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
