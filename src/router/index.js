import { createWebHashHistory, createRouter } from 'vue-router';
// import mainPage from '../components/mainPage.vue';
import itemInfoPage from '../components/itemInfoPage.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [{
        path: '/iteminfo',
        component: itemInfoPage
    }]
});

export default router;