import Vue from 'vue'
import vueRouter from 'vue-router'
import configs from '../config'

import swipe from '../pages/swipe.vue'
import alert from '../pages/alert.vue'
import select from '../pages/select.vue'
import catalog from '../pages/catalog.vue'
import common_input from '../pages/common_input.vue'
var arr = [
    swipe, alert, select, common_input
]
Vue.use(vueRouter)

var routes = [];
configs.forEach((config)=>{
    if(config.list && config.list.length){
        config.list.forEach((nav)=>{
            var temp={}
            arr.forEach((component)=>{
                if(!!~component.__file.indexOf(nav.path.slice(1))) {
                    temp = component;
                }
            })
            routes.push({
                path: nav.path,
                name: nav.name,
                component: temp
            })
        })
    }
})
routes.push({
    path: '/',
    name: 'catalog',
    component: catalog
})
var obj = new vueRouter({
    routes
})
export default obj

