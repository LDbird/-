import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.axios = axios;

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
});

import Scroll from '@/components/Scroll';
Vue.component('Scroll',Scroll);

import Loading from '@/components/Loading';
Vue.component('Loading',Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
