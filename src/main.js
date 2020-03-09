import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";

Vue.use(VueRouter);
Vue.use(VueMaterial);

const routes = [
  {
    path: "/page1",
    component: Page1
  },
  {
    path: "/page2",
    component: Page2
  }
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
