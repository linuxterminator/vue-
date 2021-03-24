import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//打字机
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

//引入自己的全局css
import "@/style/web/style.scss";

import { routes } from "./route/router";
Vue.use(VueRouter);
let routerInstance = new VueRouter({
  routes: routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

Vue.config.productionTip = false;

new Vue({
  router: routerInstance,
  render: (h) => h(App),
}).$mount("#app");
