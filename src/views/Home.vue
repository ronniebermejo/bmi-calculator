<template>
  <div class="home">
    <div class="row header">
      <div class="col-md-4"> <b>User:</b> {{currentUser.email}}</div>
      <div class="col-md-4 offset-md-4"><button class="badge badge-dark" @click="logout">Logout</button></div>
    </div>
    <body-mass-index-calc></body-mass-index-calc>
  </div>
</template>

<script>
import BodyMassIndexCalc from '@/components/BodyMassIndexCalc.vue'
import firebase from 'firebase'

export default {
  name: 'home',
  computed: {
    currentUser: {
      get () {
        return firebase.auth().currentUser
      }
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  components: {
    BodyMassIndexCalc
  }
}
</script>
<style scoped lang="scss">
  .header {
    background-color: silver;
  }
</style>
