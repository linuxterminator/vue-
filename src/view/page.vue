<template>
  <div class="page container">
    <article>
      <!--添加mavon-editor的样式话要加上类markdown-body-->
      <p v-html="article"></p>
    </article>
  </div>
</template>

<script>
import { markdownit } from "@/markdownit";
import { api } from "@/http";
export default {
  data() {
    return {
      article: [],
    };
  },
  methods: {
    getArticle() {
      api
        .get("article/" + this.$route.params.articleId)
        .then((res) => {
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
  padding: 10px;
  overflow: hidden;
}

.page article {
  overflow: hidden;
}

p img {
  max-width: 400px;
}
</style>
