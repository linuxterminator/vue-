//路由文件
import index from "@/view/index";
// import test from "@/view/test";

import page from "@/view/page";
import middle from "@/view/middle";
import about from "@/view/about"

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
        path: "tagArticle/:tagId",
        component: middle
      },
      {
        path: "page/:articleId",
        component: page,
      },
      {
        path: "about",
        component: about
      }
    ],
  },
  // {
  //   path: "/test",
  //   component: test,
  // },
];

export { routes };
