// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Importa los componentes que usarás en las rutas
import FundamentosComponent from './components/FundamentosComponent.vue';
import HelloWorld from './components/HelloWorld.vue';
import CalendarComponent from './components/CalendarComponent.vue';
import TailwindTest from './components/TailwindTest.vue';

const routes = [
    { path: '/fundamentos', component: FundamentosComponent },
    { path: '/helloworld', component: HelloWorld },
    { path: '/calendar', component: CalendarComponent },
    { path: '/tailwindtest', component: TailwindTest }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

export default router;
