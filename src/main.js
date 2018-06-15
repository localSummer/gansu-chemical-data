// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import fly from 'flyio';
import echarts from 'echarts';
import 'iview/dist/styles/iview.css';
import './assets/styles/main.scss';

import { Row, Col } from 'iview';
Vue.component('Row', Row);
Vue.component('Col', Col);

Vue.config.productionTip = false;

fly.config.withCredentials = true;
fly.config.baseURL = '/';

Vue.prototype.$http = fly;
Vue.prototype.$echarts= echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
