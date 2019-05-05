import Vue from 'vue'
import App from './App.vue'
// 引入  饿了吗ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 引入全局样式  只导入不使用  可以省略  xxx from
import './assets/statics/site/css/style.css'
// 导入首页组件  vue
import index from './components/index.vue'
// 导入详情页组件
import detail from './components/detail.vue'
// 导入路由
import VueRouter from 'vue-router'
// 2
Vue.use(VueRouter)
//3 

// 4
const routes = [
  {
   path: '/index',
   component: index
  },
  {
    // path: '/detail',
    // 动态路由方法
    path: '/detail/:id',
    component: detail
   }
]
// 5
const router =new VueRouter({
  routes
})

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  // 6
  router
}).$mount('#app')
