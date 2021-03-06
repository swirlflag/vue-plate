import Vue from 'vue';
import VueRouter from 'vue-router';

import { store } from '@/store/store.js';

// import Page404          from '@/pages/Page404.vue';
import PageMain         from '@/pages/PageMain.vue';
import PageGlobal       from '@/pages/PageGlobal.vue';
import PageAboutPlate   from '@/pages/PageAboutPlate.vue';
import PageStore        from '@/pages/PageStore.vue';
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
            component   : () => import('@/pages/Page404.vue'),
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
            path        : '/store',
            name        : 'Store',
            component   : PageStore,
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
        ,
        
    ],
}

const useTest = false;

if(useTest){
    routerInfo.routes.push({
        path        : '/test',
        name        : 'test',
        component   : PageTest,
    });
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