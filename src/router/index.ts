// import store from "@/store";
// import { nextTick } from "@vue/runtime-core";
import { createRouter, createWebHistory, Router } from "vue-router";
import routes from "./routes";

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const isLoginPage = to.matched.some(
//     (p: any) => p.path.indexOf("/login") === 0,
//   );
//   try {
//     const isAuthenticated: boolean = store.getters["auth/isAuthenticated"];
//     const requiresAuth: boolean = to.meta.requiresAuth as boolean;
//     if (isAuthenticated && isLoginPage) {
//       return next("/");
//     }
//     if (requiresAuth && !isAuthenticated) {
//       return next("login");
//     }
//     if (isAuthenticated && to.query?.companyCode) {
//       nextTick(() => {
//         store.commit("auth/SET_SELECTED_COMPANY", to.query.companyCode);
//       });
//     }
//     return next();
//   } catch (err) {
//     return isLoginPage ? next() : next("login");
//   }
// });

export default router;
