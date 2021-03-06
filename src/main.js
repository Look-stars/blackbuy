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
// 导入会员中心的页面
import centerContainer from './components/centerContainer.vue'
// 导入会员中心内部页面   嵌套路由
import vipDetail from './components/vipDetail.vue'
// 导入路由
import VueRouter from 'vue-router'
// 2
Vue.use(VueRouter)
//3 

// 4
const routes = [
  {
    path: '/',
    redirect: '/index'
   },
  {
   path: '/index',
   component: index
  },
  {
    // path: '/detail',
    // 动态路由方法
    path: '/detail/:id',
    component: detail
   },
   {
    path: '/centerContainer',
    component: centerContainer,
    children: [
      {
        path: 'vipDetail',
      component: vipDetail,
      },
      {
        path: '',
        redirect: 'vipDetail'
      }
    ]
   },
]
// 5
const router =new VueRouter({
  routes
})

Vue.config.productionTip = false

//设置axios到原型上   方便共享
import axios from 'axios'
Vue.prototype.$axios = axios
//设置axios的基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'
// 设置全局定义的过滤器
import moment from 'moment'
Vue.filter('formatTime', (value)=>{
  return moment(value).format("YYYY年MM月DD日");
})

new Vue({
  render: h => h(App),
  // 6
  router
}).$mount('#app')
