//引入Vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//使用插件
Vue.use(Vuex)

//准备actions，用于响应组件动作
const actions = {

}

//准备mutations，用于操作数据（state）
const mutations = {

}

//准备state，用于存储数据
const state = {
    todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'睡觉',done:false},
        {id:'003',title:'打游戏',done:true}
    ]
}

//准备getters，用于将state中的数据进行加工
const getters = {

}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})