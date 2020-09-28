<template>
  <div class="app-body">
    <div class="left-div">
      <left :logo="Blog.logo" />
    </div>
    <div class="middle-div">
      <!--如果子组件在router-view中，可以直接通过router-view向子组件传props数据-->
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <div class="right-div">
      <right :announcement="Blog.announcement" />
    </div>
  </div>
</template>

<script>
import left from "@/view/left";
import right from "@/view/right";
import { api } from "@/http.js";
import { markdownit } from "@/markdownit";

export default {
  data() {
    return {
      Blog: {
        title: "",
        logo: "",
        favicon: "",
        announcement: "",
        message: "",
      },
    };
  },
  methods: {
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
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getBlogInfo();
  },
  components: {
    left,
    right,
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
  width: 20%;
  margin: 10px 20px;
  /**防止子元素因为设置了宽度依然会被收缩 */
  flex-shrink: 0;
}

.app-body > .middle-div {
  flex-grow: 1;
  margin: 10px;
}
</style>
