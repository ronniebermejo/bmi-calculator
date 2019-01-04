<template>
  <div class="row">
    <div class="col-sm-4 offset-sm-4">
      <h1>BMI Calculator</h1>
      <p>Create Your Account</p>
      <form novalidate v-on:submit.prevent="signUp">
        <div class="form-group">
          <label class="form-control-label">Email:</label>
          <input class="form-control" type="text" name="email" v-model='email' placeholder="Email">
        </div>
        <div class="form-group">
          <label class="form-control-label">Password:</label>
          <input class="form-control" type="password" name="password" v-model='password' placeholder="Password"><br>
        </div>
        <button class="btn btn-primary" :disabled='!email || !password'>Sign Up</button>
        <br>
      </form>
      <router-link to="/signin">Do you already have an account?</router-link>
    </div>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      console.log(this)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        alert('Your account has been created')
        this.$router.replace('home')
      }, (error) => {
        console.error(error)
        alert(error.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
