//路由文件
import index from "@/view/index";

import page from "@/view/page";
import home from "@/view/home";
import about from "@/view/about"
import tagArticle from "@/view/tagArticle"
import friend from "@/view/friend"

let routes = [
  {
    path: "/",
    component: index,
    //index模版里面有子路由，意味着index里面也需要router-view
    children: [
      //都是同级路由，home页面默认加载
      {
        path: "",
        component: home,
      },
      {
        path: "tagArticle/:tagId",
        component: tagArticle
      },
      {
        path: "page/:articleId",
        component: page,
      },
    ],
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/friend",
    component: friend
  }
];

export { routes };
