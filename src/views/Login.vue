<template>
  <div class="row">
    <div class="col-sm-4 offset-sm-4">
      <h1>BMI Calculator</h1>
      <form novalidate v-on:submit.prevent="login">
        <div class="form-group">
          <label class="form-control-label">Email:</label>
          <input class="form-control" type="text" name="email" v-model='email' placeholder="Email">
        </div>
        <div class="form-group">
          <label class="form-control-label">Password:</label>
          <input class="form-control" type="password" name="password" v-model='password' placeholder="Password"><br>
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
        <br>
        <router-link to="/signup">Create an account</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.replace('home')
        }, () => {
          alert('Invalid Password')
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
