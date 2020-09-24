import Vue from 'vue';
import VueRouter from 'vue-router';

import { store } from '@/store/store.js';

import Page404          from '@/pages/Page404.vue';
import PageMain         from '@/pages/PageMain.vue';
import PageGlobal       from '@/pages/PageGlobal.vue';
import PageAboutPlate   from '@/pages/PageAboutPlate.vue';
import PageAPI          from '@/pages/PageAPI.vue';
import PagePlugin       from '@/pages/PagePlugin.vue';
import PageTest         from '@/pages/PageTest.vue';

Vue.use(VueRouter);

const routerInfo =  {
    mode : 'history',
    routes : [
        {
            path        : '*',
            name        : '404',
            component   : Page404,
        }
        ,
        {
            path        : '/test',
            name        : 'test',
            component   : PageTest,
        }
        ,
        {
            path        : '/',
            name        : 'Main',
            component   : PageMain,
        }
        ,
        {
            path        : '/plate',
            name        : 'Plate',
            component   : PageAboutPlate,
        }        
        ,
        {
            path        : '/global',
            name        : 'Global',
            component   : PageGlobal,
        }
        ,
        {
            path        : '/api',
            name        : 'API',
            component   : PageAPI,
        }
        ,
        {
            path        : '/plugin',
            name        : 'Plugin',
            component   : PagePlugin,
        }

    ],
}

const router = new VueRouter(routerInfo);

router.beforeEach((to,from,next) => {
    next();
})

router.afterEach((to) => {

    if(router.app){

        if(store.state.is_dev){
            router.app.$_ua.pageview(to.path).send();
        }

    }

});

export {
    router,
    routerInfo,
}