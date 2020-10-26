<template>
  <div class="app-body">
    <div class="left-div">
      <div class="container left-show" style="margin-bottom:10px">
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
    </div>

    <div class="middle-div">
      <!--如果子组件在router-view中，可以直接通过router-view向子组件传props数据-->
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <div class="right-div">

      <div class="container blog-announcement">
        <div class="announcement-title">
          <i class="iconfont icongonggao"></i>
          <span class="name">公告</span>
        </div>
        <p class="announcement-body">{{ Blog.announcement }}</p>
      </div>

      <div class="container new-article">
          <div class="new-article-title">
            <i class="iconfont icon16"></i>
            <span class="name">最新文章</span> 
          </div>
          <ul>
            <li v-for="(item,index) in newArticle" :key="index">
              <router-link :to="/page/+item.title" tag="div">
                <div class="art-img">
                  <img :src="item.img" alt="博客封面">
                </div>
              </router-link>
              <div class="art-body">
                <div>{{item.createdate | dateFormat}}</div>
                <router-link :to="/page/+item.title" tag="div">
                  <span>{{item.title}}</span>
                </router-link>
              </div>
            </li>
          </ul>
      </div>

      <div class="container tag-container" style="margin-bottom:10px">
        <div class="tag-title">
          <i class="iconfont icontag"></i>
          <span class="name">标签</span>
        </div>
            <span v-for="(item,index) in articleTag" :key="index" class="tag-item">
              <router-link tag="div" :to="/tagArticle/+item.tagName">
                <span>{{item.tagName}}</span>
              </router-link>
            </span>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import { api } from "@/api/http.js";
import { markdownit } from "@/markdownit";

export default {
  components: {
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
    };
  },
  filters:{
    dateFormat(value){
      return value.slice(0,12)
    }
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
  padding-top: 10px;
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

.left-show{
  height:300px;
}

.blog-announcement p{
  font-weight: 600;
}

.blog-announcement .announcement-title,.new-article-title,.tag-title{
  font-size:1.1rem;
  font-weight: 600;
}

.blog-announcement,.new-article,.tag-container{
  padding:10px;
  margin-bottom:10px
}

.new-article ul{
  padding-left:10px;
}

.new-article .art-body{
  flex-grow: 1;
}

.new-article .art-img{
  width:60px;
  height:60px;
}

.art-img img{
  object-fit: cover;  
  width:100%;
  height: 100%;
}

.new-article .art-body{
  padding-left: 10px;
}

.new-article{
  font-size: 0.7rem;
}

.new-article li{
  margin:10px 0;
  cursor: pointer;
  height:60px;
  display:flex;
}

.container .name{
  margin-left:10px
}

.tag-item{
  margin:7px;
  cursor: pointer;
}
</style>
