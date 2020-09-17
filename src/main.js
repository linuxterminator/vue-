import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import { routes } from "./router";
Vue.use(VueRouter);
let routerInstance = new VueRouter({
  routes: routes,
});

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router: routerInstance,
  render: (h) => h(App),
}).$mount("#app");
