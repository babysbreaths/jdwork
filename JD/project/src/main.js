// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iscroll from "../static/js/iscroll5.js";
import jquery from "jquery";

Vue.prototype.$=jquery;
Vue.prototype.$iscroll=iscroll;

Vue.config.productionTip = false

//引入mint ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//加载更多
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import "../static/css/reset.css";
import "../static/js/iscroll5.js"

//懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
