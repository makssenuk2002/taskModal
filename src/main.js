import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store/index'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import localizeFilter from '@/filters/localize.filter'
import Loader from './components/app/Loader'
import firebase from 'firebase/compat'
import 'firebase/auth'
import 'firebase/database'
import currencyFilter from './filters/currency.filter'
import tooltip from './directives/tooltip.directive'
import Paginate from 'vuejs-paginate'
Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader',Loader)
Vue.component('Paginate', Paginate)
Vue.directive('tooltip', tooltip)
firebase.initializeApp({
  apiKey: "AIzaSyDehMcodFmrZZ6MbJ7HCkktsd1S7ArytmM",
  authDomain: "qqqqq-644df.firebaseapp.com",
  databaseURL: "https://qqqqq-644df-default-rtdb.firebaseio.com",
  projectId: "qqqqq-644df",
  storageBucket: "qqqqq-644df.appspot.com",
  messagingSenderId: "579766775991",
  appId: "1:579766775991:web:82bfcc0ca800b314561d32",
  measurementId: "G-2YJ68L2DMS"
})

let app
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

