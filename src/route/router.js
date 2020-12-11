//前台
import home from "@/view/fontend/home";
import page from "@/view/fontend/page";
import articleList from "@/view/fontend/articleList";
import about from "@/view/fontend/about"
import archive from "@/view/fontend/archive"
import index from "@/view/index"

//管理
import adminIndex from "@/view/admin/index"
import write from "@/view/admin/write"
import managehome from "@/view/admin/home"
import bloginfo from "@/view/admin/bloginfo"
import articleTable from "@/view/admin/articleTable"
import messageManage from "@/view/admin/messageManage"

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
        children: [
          {
            path: "",
            component: articleList,
          },
          {
            path: "page/:articleId",
            component: page,
          },
          {
            path: "archive",
            component: archive
          },
          {
            path: "/about",
            component: about
          },
        ]
      },
    ],
  },
  {
    path: "/huqingshan",
    component: adminIndex,
    children: [
      {
        path: "",
        component: managehome
      },
      {
        path: "/write",
        component: write
      },
      {
        path: "/bloginfo",
        component: bloginfo
      },
      {
        path:"/articleTable",
        component:articleTable
      },
      {
        path:"/messageManage",
        component:messageManage
      }
    ]
  }
];

export { routes };
