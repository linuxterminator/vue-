<template>
  <div class="manage">
      <div class="manage-left">
          <span class="manage-title">hello</span>
          <aside>
              <ul>
                  <li v-for="(item, index) in navList" :key="index">
                    <router-link :to="item.path" class="not-active">
                      <span class="nav-item">{{ item.title }}</span>
                    </router-link>
                  </li>
              </ul>
          </aside>
    </div>

    <div class="manage-right">
        <header></header>

        <div class="manage-right-body">
          <div class="bread-nav">
            <span 
            v-for="(item,index) in router_matched" 
            :key="index"
            @click="to_page(item.path)">{{item.meta.page_name}}/
            </span>
          </div>
          <router-view></router-view>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  data:function() {
    return {
      navList: [
        { path: "/huqingshan", title: "首页"},
        { path: "/huqingshan/articleTable", title: "文章列表"},
        { path: "/huqingshan/write", title: "markdown"},
        { path: "/huqingshan/messageManage", title: "留言"},
        { path: "/huqingshan/bloginfo", title: "设置"},
      ],
    };
  },
  methods:{
    to_page:function(meta){
      this.$router.push(meta)
    }
  },
  computed:{
    // $route是当前路由对象
    router_matched:function(){
      return this.$route.matched
    },
    // $router是vuerouter对象，options是我们设置vuerouter提供的参数，在router.js文件中
    route_nav:function(){
      return this.$router.options.routes[2].children;
    }
  },
};
</script>

<style src="@/style/web/admin/index.scss" lang="scss" scoped></style>