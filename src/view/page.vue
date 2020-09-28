<template>
  <div class="page container">
    <ShowArticle :Article="article" />
  </div>
</template>

<script>
//展示文章
import { markdownit } from "@/markdownit";
import { api } from "@/api/http";
import ShowArticle from "@/components/ShowArticle";
export default {
  data() {
    return {
      article: "",
    };
  },
  components: {
    ShowArticle,
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
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getArticle();
  },
};
</script>

<style>
.page {
  flex-grow: 1;
  overflow: hidden;
}

.page article {
  overflow: hidden;
}

p img {
  max-width: 400px;
}
</style>
