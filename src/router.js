//路由文件
import index from "@/view/index";
import test from "@/view/test";

let routes = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/test",
    component: test,
  },
];

export { routes };
