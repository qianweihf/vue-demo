import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this      //安装全局事件总线，$bus就是当前应用的vm
  }
}).$mount('#app')
