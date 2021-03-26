<template>
  <div class="manage">
      <div class="manage-left">
          <span class="manage-title">hello</span>
          <aside>
              <ul>
                  <li v-for="(item, index) in router_nav" :key="index" class="nav-item-container">
                    <router-link :to={name:item.name} class="not-active">
                      <i :class="item.meta.icon"></i>
                      <span class="nav-item">{{ item.meta.page_name }}</span>
                    </router-link>
                  </li>
              </ul>
          </aside>
    </div>

    <div class="manage-right">
        <header>
          <div>
            <img src="" alt="头像">
          </div>
        </header>

        <div class="manage-right-body">
          <div class="bread-nav">
            <div 
            class="bread-item"
            v-for="(item,index) in route_matched" 
            :key="index"
            @click="to_page(item.path)">
                <span>{{item.meta.page_name}}</span>
                <span>></span>
            </div>
          </div>
          <router-view></router-view>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  data:function() {
    return {};
  },
  methods:{
    to_page:function(meta){
      this.$router.push(meta)
    }
  },
  computed:{
    // $route是当前路由对象
    route_matched:function(){
      return this.$route.matched
    },
    // $router是vuerouter对象，options是我们设置vuerouter提供的参数，在router.js文件中
    // 对于最后一个>,通过css样式的最后一个元素来选择，然后display:none
    router_nav:function(){
      return this.$router.options.routes[2].children;
    }
  },
};
</script>

<style src="@/style/web/admin/home.scss" lang="scss" scoped></style>