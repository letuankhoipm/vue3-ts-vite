import { RouteRecordRaw } from "vue-router";
import landingPageRoutes from "@/modules/landing-page/router/landing-page.routing";

const Login = () => import("@/modules/auth/views/login.vue");
const LandingPage = () => import("@/modules/landing-page/landing-page.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/landing-page",
  },
  {
    path: "/login",
    name: "LOGIN",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/landing-page",
    name: "LANDING_PAGE",
    component: LandingPage,
    children: landingPageRoutes,
  },
];

export default routes;
