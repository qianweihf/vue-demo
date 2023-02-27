import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
//导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/app.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
    store,
    router,
    beforeCreate(){
    Vue.prototype.$bus=this      //安装全局事件总线，$bus就是当前应用的vm
  },
  render:h => h(App)
}).$mount('#app')
