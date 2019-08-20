<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="signout">SignOut</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    signout: function() {
      firebase.auth().signOut().then(
        () => {
          this.$router.replace("login")
        }
      )
    }
  }
};
</script>
