<template>
  <div class="signup">
    <p>Let's create a new account !</p>
    <input type="text" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <button @click="signup">Sign Up</button>
    <span>or go back to <router-link to='/login'>login</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "signup",
  data() {
    return {
      email:'',
      password:'',
    }
  },
  methods: {
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        function(err){
          alert(err)
        }
      )
    }
  }
}
</script>

<style scoped>
  .signup {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer
  }
  p {
    margin-top: 40px;
    font-size: 14px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 12px;
  }
</style>