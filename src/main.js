import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'
import "vue-multiselect/dist/vue-multiselect.min.css"
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVue);
Vue.config.productionTip = false
console.log("vue2")


// const cache = ()=>{
//   if(!Vue.$redis){
//     Vue.$redis = new Redis()
//   }
//   return Vue.$redis
// }

// const name = cache().fetch('name')
// console.log(name)

// const redis = require("redis");
// const client = redis.createClient({
//   port:48379,
//   host:'0.0.0.0'
// });
 
// client.on("error", function(error) {
//   console.error(error);
// });
// client.on("connect", function() {
//   console.log("You are now connected");

// });
//   client.set("name", "kasturi", redis.print);
// let name=client.get("name", redis.print);
// console.log(name)


new Vue({
  render: h => h(App),
}).$mount('#app')
