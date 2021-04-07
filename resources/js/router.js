import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage.vue'
import secondPage from './components/pages/mySecondVuePage.vue'
import hooks from './components/basic/hooks.vue'

const routes=[
    {
        path:'/my-new-vue-router',
        component:firstPage
    },
    {
        path:'/my-another-route',
        component:secondPage
    },
    {
        path:'/hooks',
        component:hooks
    }
]

export default new Router({
    mode:'history',
    routes
})