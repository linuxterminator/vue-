<template>
  <div>
    <div class="newArticle">最新文章</div>
    <div class="articleTag"></div>
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
      .get("tag")
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.newArticle {
  min-height: 500px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}
.articleTag {
  height: 240px;
  min-height: 300px;
  background: white;
  margin-top: 13px;
  box-shadow: 0 0 1px #9c9d9e;
}
</style>
