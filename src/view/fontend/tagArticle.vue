<template>
  <div class="tagArticle">
    <ArticleList :articleList="tagArticle" />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";
import { api } from "@/api/http";
export default {
  data() {
    return {
      tagArticle: [],
    };
  },
  methods: {
    getTagArticle() {
      api
        .get("/tag/" + this.$route.params.tagId)
        .then((res) => {
          this.tagArticle = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    ArticleList,
  },
  created() {
    this.getTagArticle();
  },
};
</script>

<style>
</style>