import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Delete from '@/components/Delete'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name: 'Hello',
            component: Hello
        },
        {
            path:'/register',
            name: 'register',
            component: Register
        },
        {
            path:'/delete',
            name: 'delete',
            component: Delete
        }
    ]
})