let routes = [{
    path: "/",
    component: ()=>import("@/view/fontend/home"),
        children: [
          {path: "",component: ()=>import("@/view/fontend/articleList"),},
          {path: "page/:articleId",component: ()=>import("@/view/fontend/page"),},
          {path: "archive",component: ()=>import("@/view/fontend/archive")},
          {path: "about",component: ()=>import("@/view/fontend/about")},
        ]
      },
  {
    path:"/login",
    component:()=>{
      return import("@/view/fontend/login")
    }
  },
  {
    path: "/huqingshan",
    component: ()=>import("@/view/admin/home"),
    meta:{page_name:"首页"},
    // meta信息里面放了title和icon
    // 这是import函数，不是import
    // 箭头函数的返回值仅仅只有一个表达式的话还可以省略大括号和return
    children: [
      {path : "",
      component : ()=> import("@/view/admin/dashboard"),
      meta:{page_name : "首页",icon:""}},

      {path : "write",
      component : ()=>import("@/view/admin/write"),
      meta:{page_name : "文章编辑",icon:""}},

      {path : "bloginfo",
      component : ()=>import("@/view/admin/bloginfo"),
      meta:{page_name : "博客信息",icon:""}},

      {path : "articleTable",
      component :()=>import("@/view/admin/articleTable"),
      meta:{page_name : "文章列表",icon:""}},

      {path : "messageManage",
      component :()=>import("@/view/admin/messageManage"),
      meta:{page_name : "信息管理",icon:""}}]
  }
];

export { routes };

//前台
// import home from "@/view/fontend/home";
// import page from "@/view/fontend/page";
// import articleList from "@/view/fontend/articleList";
// import about from "@/view/fontend/about"
// import archive from "@/view/fontend/archive"

//管理
// import manage_home from "@/view/admin/home"
// import write from "@/view/admin/write"
// import dashboard from "@/view/admin/dashboard"
// import bloginfo from "@/view/admin/bloginfo"
// import articleTable from "@/view/admin/articleTable"
// import messageManage from "@/view/admin/messageManage"

//登录
// import login from "@/view/fontend/login"
