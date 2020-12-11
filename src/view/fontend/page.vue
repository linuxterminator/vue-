<template>
  <div class="page" v-html="article">
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
@import "../../css/style.scss";
.page {
  flex-grow: 1;
  overflow: hidden;
  padding:30px;
  @include container;
}

.page article {
  overflow: hidden;
}

p img {
  max-width: 400px;
}
</style>
