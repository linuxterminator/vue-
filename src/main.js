import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//阿里图标
import "../src/static/ali_icon/iconfont.css";
//阿里字体

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
//引入markdown样式，并在要显示的页面上添加样式markdown-body，否则没有样式
import "mavon-editor/src/lib/css/markdown.css";
Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router: routerInstance,
  render: (h) => h(App),
}).$mount("#app");
