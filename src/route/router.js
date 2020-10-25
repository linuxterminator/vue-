//前台
import index from "@/view/fontend/index";
import page from "@/view/fontend/page";
import articleList from "@/view/fontend/articleList";
import about from "@/view/fontend/about"
import tagArticle from "@/view/fontend/tagArticle"
import archive from "@/view/fontend/archive"
import home from "@/view/fontend/home"
import leaveMessage from "@/view/fontend/leaveMessage";

//管理
import adminIndex from "@/view/admin/index"
import write from "@/view/admin/view/write"
import managehome from "@/view/admin/view/home"
import bloginfo from "@/view/admin/view/bloginfo"
import articleTable from "@/view/admin/view/articleTable"
import messageManage from "@/view/admin/view/messageManage"

//路由结构
//  +app
//      +home   网站根页面 "/""
//          ++index 默认加载的首页 ""
//              +articleList 首页展示文章 
//              +page:id 展示具体文章
//              +tagArticle 展示标签下的文章
//          +about 关于
//          +archive 归档
//      +admin  后台页面 "/admin"
//          ++managehome 默认加载的后台首页  ""
//          ++write 写博文

let routes = [
  {
    path: "/",
    component: home,
    //index模版里面有子路由，意味着index里面也需要router-view
    children: [
      //都是同级路由，home页面默认加载
      {
        path: "",
        component: index,
        children: [
          {
            path: "",
            component: articleList,
          },
          {
            path: "tagArticle/:tagId",
            component: tagArticle
          },
          {
            path: "page/:articleId",
            component: page,
          },
        ]
      },
      {
        path:"leaveMessage",
        component:leaveMessage
      },
      {
        path: "archive",
        component: archive
      },
      {
        path: "/about",
        component: about
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
