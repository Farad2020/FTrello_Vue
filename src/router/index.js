import { createRouter, createWebHashHistory } from "vue-router";
import CardDetailsComponent from "../components/CardDetailsComponent";
import CardsComponent from "../components/CardsComponent";
import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";
import ProfileComponent from "../components/ProfileComponent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CardsComponent
  },
  {
    path: "/cards/:id",
    name: "CardDetail",
    component: CardDetailsComponent
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterComponent
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileComponent
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
