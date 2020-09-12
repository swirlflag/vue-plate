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

import {
    PageMain, PageLayout , B ,C
} from '@/pages';


Vue.use(VueRouter);

const routerInfo =  {
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'main',
            component : PageMain,
        }
        ,
        {
            path : '/layout',
            name : 'layout',
            component : PageLayout,
        }
        ,
        {
            path : '/B',
            name : 'b',
            component : B,
        }
        ,
        {
            path : '/C',
            name : 'c',
            component : C,
        }
        ,
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