import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import { routes } from "./router";
Vue.use(VueRouter);
let routerInstance = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router: routerInstance,
  render: (h) => h(App),
}).$mount("#app");
