<template>
  <div class="app-body">
    <div class="left-div">
      <div class="container" style="margin-bottom:10px">
          <!--logo-->
          <div class="index-logo">
            <Logo :logourl="Blog.logo" />
          </div>
          <!--按钮-->
          <div class="attention-div">
            <button class="main-button attention-button" @click="dontClickMe">别点我</button>
          </div>
          <!--图标-->
          <div class="platform">
            <i :class="item" v-for="(item, index) in platform" :key="index"></i>
          </div>
      </div>
      <!--分类-->
      <div class="category container addpadding" style="margin-bottom:10px">
        <span>分类</span>
        <list :list="category" listKeyName="name" />
      </div>
    </div>

    <div class="middle-div">
      <!--如果子组件在router-view中，可以直接通过router-view向子组件传props数据-->
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <div class="right-div">
      <!--公告-->
      <div class="container addpadding" style="margin-bottom:10px">
        <div>公告</div>
        <p>{{ Blog.announcement }}</p>
      </div>
      <!--最新文章-->
      <div class="container addpadding" style="margin-bottom:10px">
          <span>最新文章</span>
          <list :list="newArticle" listKeyName="title" :path="/page/" />
      </div>
      <!--标签-->
      <div class="container addpadding" style="margin-bottom:10px">
        <div>标签</div>
        <list :list="articleTag" listKeyName="tagName" :path="/tagArticle/" />
      </div>
    </div>
  </div>
</template>

<script>
import list from "@/components/list";
import Logo from "@/components/Logo";
import { api } from "@/api/http.js";
import { markdownit } from "@/markdownit";

export default {
  components: {
    list,
    Logo
  },
  data() {
    return {
      //最新文章
      newArticle: [],
      //文章标签
      articleTag: [],
      //图标
      platform: [
        "iconfont iconpengyouquan",
        "iconfont iconweixin",
        "iconfont icongithub",
        "iconfont iconbilibili-line",
      ],
      //博客对象
      Blog: {
        title: "",
        logo: "",
        favicon: "",
        announcement: "",
        message: "",
      },
      //分类
      category: [
        { name: "日志", icon: "iconfont iconicon-test1" },
        { name: "教程", icon: "iconfont iconcaishichang-" },
        { name: "笔记", icon: "iconfont iconbiji" },
        { name: "分类", icon: "iconfont iconfenlei" },
        { name: "其他", icon: "iconfont iconqita" },
      ],
    };
  },
  methods: {
    dontClickMe(){
      alert("按钮没做好，别点我!")
    },
    //获取博客信息
    getBlogInfo() {
      api
        .get("/bloginfo")
        .then((res) => {
          this.Blog.title = res.data.blogTitle;
          this.Blog.logo = res.data.blogLogo;
          this.Blog.favicon = res.data.blogFavicon;
          this.Blog.message = markdownit.render(res.data.blogMessage);
          this.Blog.announcement = res.data.blogAnnouncement;
        })
    },
    //获取最新文章
    getNewArticle() {
      api
        .get("article")
        .then((res) => {
          this.newArticle = res.data.reverse().slice(0, 6);
        })
    },
    //获取标签
    getTag() {
      api
        .get("tag")
        .then((res) => {
          this.articleTag = res.data;
        })
    },
  },
  created() {
    this.getBlogInfo();  
    this.getNewArticle();
    this.getTag();
  },
};
</script>

<style>
.app-body {
  /**flex布局不要设置高度 */
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  width: 100%;
}

.app-body > .right-div,
.left-div {
  width: 18%;
  margin: 0 20px;
  /**防止子元素因为设置了宽度依然会被收缩 */
  flex-shrink: 0;
}

.app-body > .middle-div {
  flex-grow: 1;
}

.attention-div{
  text-align: center;
  padding:10px 0;
}

.attention-button{
  width:70%;
  padding:10px;
}

.platform > i {
  font-size: 25px;
  margin: 0 7px;
  cursor: pointer;
}

.platform {
  text-align: center;
}

.index-logo{
  display:flex;
  justify-content: center;
  align-items: center;
  padding:20px 0;
}

</style>
