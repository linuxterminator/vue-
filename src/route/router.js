export let routes = [{
    path: "/",
    name:"home",
    component: ()=>import("@/view/fontend/home"),
        children: [
          {path: "",
          name:"articlelist",
          component: ()=>import("@/view/fontend/articleList"),
          meta:{
            page_name:"文章列表"
          }},
          {path: "page/:articleId",
          name:"page",
          component: ()=>import("@/view/fontend/page"),
          meta:{
            page_name:"文章"
          }},
          {path: "archive",
          name:"archive",
          component: ()=>import("@/view/fontend/archive"),
          meta:{
            page_name:"分类"
          }},
          {path: "about",
          name:"about",
          component: ()=>import("@/view/fontend/about"),
          meta:{
            page_name:"关于"
          }},
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
    name:"manage",
    component: ()=>import("@/view/admin/home"),
    meta:{page_name:"首页"},
    // meta信息里面放了title和icon
    // 这是import函数，不是import
    // 箭头函数的返回值仅仅只有一个表达式的话还可以省略大括号和return
    children: [
      {path : "",
      name:"dashboard",
      component : ()=>import("@/view/admin/dashboard"),
      meta:{page_name : "仪表盘",icon:"el-icon-menu"}},

      {path : "articleTable",
      name:"articletable",
      component :()=>import("@/view/admin/articleTable"),
      meta:{page_name : "文章列表",icon:"el-icon-s-data"}},

      {path : "write",
      name:"markdownWrite",
      component : ()=>import("@/view/admin/write"),
      meta:{page_name : "文章编辑",icon:"el-icon-edit"}},

      {path : "messageManage",
      name:"messagemanage",
      component :()=>import("@/view/admin/messageManage"),
      meta:{page_name : "留言管理",icon:"el-icon-s-comment"}},

      {path : "bloginfo",
      name:"bloginfo",
      component : ()=>import("@/view/admin/bloginfo"),
      meta:{page_name : "博客信息",icon:"el-icon-setting"}},
    ]
  }
];
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
