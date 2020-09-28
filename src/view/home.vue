<template>
  <div class="home">
    <ArticleList :articleList="ArticleList" />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";
import { api } from "@/api/http";
export default {
  data() {
    return {
      ArticleList: [],
    };
  },
  components: {
    ArticleList,
  },
  methods: {
    getArticleList() {
      api
        .get("/article")
        .then((res) => {
          this.ArticleList = res.data.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style>
</style>