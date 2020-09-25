import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//引入自己的全局css
import "./style.css";

//阿里图标
import "./iconfont/iconfont.css";
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
//引入mavon-editor的话，highlight的样式会被覆盖,应为要想使用他的样式的话，
//你必须在样式里面加上markdown-body，这样highlight就不会被加载
//不使用mavon-editor里的highlight外链，使用本地加载试试？

//highlight.js的样式
//不过这个样式有点问题，有时候需要刷新才能出现
import "highlight.js/styles/atom-one-dark.css";
//第三方markdown样式
import "./markdown-style/typora-purple-theme-1.0/purple.css";
Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router: routerInstance,
  render: (h) => h(App),
}).$mount("#app");
