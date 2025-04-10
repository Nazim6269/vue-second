import { createRouter, createWebHistory } from "vue-router";
import ProductsCt from "./components/ProductsCt.vue";
import HomeCt from "./pages/HomeCt.vue";
import SignUp from "./pages/SignUp.vue";

const routes = [
  { path: "/", component: HomeCt, name: "Home" },
  { path: "/products", component: ProductsCt, name: "Products" },
  { path: "/sign-up", component: SignUp, name: "SignUp" },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
