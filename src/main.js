import Vue from 'vue'
import App from './App.vue'
//三级联动组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'
import vueRouter from "vue-router"

import {reCategoryList} from '@/api';
reCategoryList();
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
