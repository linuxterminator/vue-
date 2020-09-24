<template>
  <div class="right">
    <div class="newArticle">
      <span>最新文章</span>
    </div>
    <div class="articleTag">
      <div>标签</div>
      <span v-for="(item, index) in articleTag" :key="index" class="tag-item">
        {{ item.tagName }}
      </span>
    </div>
  </div>
</template>

<script>
import { api } from "@/http";
export default {
  data() {
    return {
      newArticle: [],
      articleTag: [],
    };
  },
  created() {
    api
      .get("article")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get("tag")
      .then((res) => {
        console.log(res.data.data);
        this.articleTag = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.right > .newArticle {
  min-height: 500px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
  padding: 10px;
}
.right > .articleTag {
  height: 240px;
  min-height: 300px;
  background: white;
  margin-top: 13px;
  box-shadow: 0 0 1px #9c9d9e;
  padding: 10px;
}
</style>
