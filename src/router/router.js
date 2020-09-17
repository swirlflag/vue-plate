import Vue from 'vue';
import VueRouter from 'vue-router';
// // import bus from '../utils/bus.js';
// // import { store } from '../store/index.js';

// // import ViewNews from '../views/ViewNews.vue';
// // import ViewAsk from '../views/ViewAsk.vue';
// // import ViewJobs from '../views/ViewJobs.vue';
// // import ViewItem from '../views/ViewItem.vue';
// // import ViewUser from '../views/ViewUser.vue';
// // import CreateListView from '../views/CreateListView.js';

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

export {
    router,
    routerInfo,
}