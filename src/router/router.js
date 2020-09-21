import Vue from 'vue';
import VueRouter from 'vue-router';

import PageMain         from '@/pages/PageMain.vue';
import PageGlobal       from '@/pages/PageGlobal.vue';
import PageAboutPlate   from '@/pages/PageAboutPlate.vue';
import PageAPI          from '@/pages/PageAPI.vue';
import PagePlugin       from '@/pages/PagePlugin.vue';

Vue.use(VueRouter);

const routerInfo =  {
    mode : 'history',
    routes : [
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
        },
        {
            path        : '/api',
            name        : 'API',
            component   : PageAPI,
        },
        {
            path        : '/plugin',
            name        : 'Plugin',
            component   : PagePlugin,
        },

        // {
        //     path : '/news',
        //     name : 'news',
        //     component : ViewNews,
        //     beforeEnter : (to,from,next) => {
        //         bus.$emit('start:spinner');
        //         store.dispatch('FETCH_NEWS')
        //             .then(() => next())
        //             .catch((error) => {
        //                 console.log(error)
        //             })
        //         ;
        //     }
        // },
    ],
}

const router = new VueRouter(routerInfo);

// router.beforeResolve((to, from, next) => {
//     console.log({to,from,next});
// })

console.log(router.beforeEach);

router.beforeEach(() => {
    console.log(1);
})

router.afterEach((to) => {        
    const vue = router.app;    
    if(!router.app){
        return
    }
    vue.$_ua.pageview(to.path).send();
});

export {
    router,
    routerInfo,
}