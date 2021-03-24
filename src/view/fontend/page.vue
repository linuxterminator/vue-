<template>
  <div class="page">
    <div class="page-title">
        <h1>新的文章开始啦</h1>
      <div class="page-info">
        <span class="page-tag">java</span>
        <time>2021-3-22</time>
      </div>
    </div>
    <div v-html="article"></div>
  </div>
</template>

<script>
//展示文章
import { markdownit } from "@/markdownit";
import api from "@/api/http";
export default {
  data() {
    return {
      article: "",
    };
  },
  methods: {
    //展示文章
    getArticle() {
      api
        .get("article/" + this.$route.params.articleId)
        .then((res) => {
          this.article = res.data;
          this.article = markdownit.render(res.data.content);
        })
    },
  },
  created() {
    this.getArticle();
  },
};
</script>

<style lang="scss">
.page {
  border-radius: 3px;
  width:100%;
  background:#ffffff;
  flex-grow: 1;
  overflow: hidden;
  box-shadow: 0 0 45px -5px rgba(158,158,158,.22);
  padding:30px;
  // 背景方格实现
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%);
  background-position: center center;
  background-size: 20px 20px;
  .page-title{
    border-bottom:1px dashed #448ef6;
    margin-bottom: 20px;
    padding-bottom: 25px;
    h1{
      font-size: 26px;
      color:#37474f;
      margin-bottom: 20px;
    }
  }
  
  .page-tag{
    border: 1px solid transparent;
    background-color: #448ef6;
    border-radius: 2px;
    font-size: 12px;
    padding: 2px 9px;
    color: #ffffff;
    margin-right: 18px;
  }
}

.page article {
  overflow: hidden;
}

p img {
  max-width: 400px;
}
</style>
