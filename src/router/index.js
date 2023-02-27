import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import StudentList from "../pages/StudentList.vue";

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/studentList',
            component:StudentList
        }
    ]
})
