import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Pravilnik from "../components/Pravilnik.vue";
import Kontakt from "../components/Kontakt.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/pravilnik",
    name: "Pravilnik",
    component: Pravilnik,
  },
  {
      path: "/kontakt",
      name: "Kontakt",
      component: Kontakt,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;