import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from "./routes";

Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
