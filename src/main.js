import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './registerServiceWorker'

let app = ''

const config = {
  apiKey: process.env.VUE_APP_FIRE_BASE_API_KEY,
  authDomain: 'mass-index.firebaseapp.com',
  databaseURL: 'https://mass-index.firebaseio.com',
  projectId: 'mass-index',
  storageBucket: 'mass-index.appspot.com',
  messagingSenderId: '1052641642437'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

Vue.config.productionTip = false
