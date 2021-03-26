<template>
  <div class="home">

      <nav class="home-head">
          <div class="home-logo">
            LEN MORE
          </div>
          <router-link
            :to="{name:item.name}"
            v-for="(item, index) in router_nav"
            :key="index">
            <span>{{ item.meta.page_name }}</span>
          </router-link>
          <div class="home-search">
            <input type="text" placeholder="探索">
            <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconsousuo"></use>
            </svg>
          </div>
      </nav>

      <div class="home-body">
        
          <div class="home-body-left">
              <div class="aside">
                  <div class="logo">
                    <img :src="logo">
                  </div>
                  <span class="profile">美好的事情即将发生</span>
                  <div class="blog-info-container">
                    <div class="blog-info-item">
                      <span>文章</span>
                      <span class="info-item-count">100</span>
                    </div>
                    <div class="blog-info-item">
                      <span>评论</span>
                      <span class="info-item-count">100</span>
                    </div>
                    <div class="blog-info-item">
                      <span>点赞</span>
                      <span class="info-item-count">100</span>
                    </div>
                    <div class="blog-info-item">
                      <span>浏览</span>
                      <span class="info-item-count">100</span>
                    </div>
                  </div>
              </div>

              <div class="aside">
                <div class="aside-head">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconbiaoqian"></use>
                    </svg>
                    <span style="margin-left:4px">标签</span>
                </div>
                <div v-for="(item,index) in tags" :key="index" class="tag">
                    {{item.tagName}}
                </div>
              </div>

              <div class="aside">
                <div class="aside-head">
                    <svg class="icon" aria-hidden="true">
                          <use xlink:href="#iconfenlei1"></use>
                    </svg>
                    <span style="margin-left:4px">分类</span>
                </div>
                  <div>
                      <ul>
                          <li v-for="(item,index) in kind" :key="index">
                            {{item}}
                          </li>
                      </ul>
                  </div>
              </div>

              <div class="aside">
                <div class="aside-head">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconlianjie"></use>
                    </svg>
                    <span style="margin-left:4px">链接</span>
                </div>
              </div>
        </div>

      <div class="home-body-right">
          <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>

    <div class="footer">
        power by huqingshan
        <br>
        我打江南走过，那等在季节里的容颜如莲花的开落
    </div>
  </div>
</template>

<script>
import api from "@/api/http.js";
import { markdownit } from "@/markdownit";

export default {
  data() {
    return {
      kind:[
        "教程","资源","笔记"
      ],
      logo:"",
      tags:[],
      //博客对象
      Blog: {
        title: "",
        logo: "",
        favicon: "",
        announcement: "",
        message: "",
      },
    };
  },
  filters:{
    dateFormat(value){
      return value.slice(0,30)
    }
  },
  watch:{
    logo:function(value){
      this.logo = value
    }
  },
  computed:{
    router_nav:function(){
      return this.$router.options.routes[0].children;
    }
  },
  methods: {
    //获取博客信息
    getBlogInfo() {
      api
        .get("/bloginfo")
        .then((res) => {
          this.Blog.title = res.data.blogTitle;
          this.logo = res.data.blogLogo;
          this.Blog.favicon = res.data.blogFavicon;
          this.Blog.message = markdownit.render(res.data.blogMessage);
          this.Blog.announcement = res.data.blogAnnouncement;
        })
    },
    getTag(){
      api.get("/tag").then((res)=>{
        this.tags = res.data
      })
    }
  },
  mounted() {
    this.getBlogInfo();  
    this.getTag()
  },
};
</script>

<style src="@/style/web/home.scss" lang="scss"></style>
