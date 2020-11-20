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

new Vue({
  render: h => h(App),
}).$mount('#app')
