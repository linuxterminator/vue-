import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//全局组件
import inputPrimary from "@/components/inputPrimary"
import textareaPrimary from "@/components/textareaPrimary"
Vue.component("input-primary",inputPrimary)
Vue.component("textarea-primary",textareaPrimary)


//打字机
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)


//引入自己的全局css
import "./css/style.css";

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

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
//引入mavon-editor的话，highlight的样式会被覆盖,应为要想使用他的样式的话，
//你必须在样式里面加上markdown-body，这样highlight就不会被加载
//不使用mavon-editor里的highlight外链，使用本地加载试试？
Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router: routerInstance,
  render: (h) => h(App),
}).$mount("#app");
