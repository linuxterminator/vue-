//路由文件
import index from "@/view/index";
import test from "@/view/test";

import page from "@/view/page";
import middle from "@/view/middle";

let routes = [
  {
    path: "/",
    component: index,
    //index模版里面有子路由，意味着index里面也需要router-view
    children: [
      {
        path: "",
        component: middle,
      },
      {
        path: "page/:id",
        component: page,
      },
    ],
  },
  {
    path: "/test",
    component: test,
  },
];

export { routes };
