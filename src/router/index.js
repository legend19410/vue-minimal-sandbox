import { createRouter, createWebHistory } from 'vue-router'
//import HelloWorld from '@/components/HelloWorld.vue';

//import middlewarePipeline from "./middlewarePipeline";
//import {auth} from "../middleware/auth";

const routes = [
    //{ path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/signin', name: 'sign-in', component: import("../views/sign-in.vue") },
]
  
const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
//   router.beforeEach((to, from, next) => {
//     const middleware = to.meta.middleware;
//     const store = useUserStore();
//     const context = { to, from, next, store, router };
  
//     if (!middleware) {
//       return next();
//     }
  
//     middleware[0]({
//       ...context,
//       next: middlewarePipeline(context, middleware, 1),
//     });
//   });
  
  export default router;