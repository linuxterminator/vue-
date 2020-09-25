<template>
  <div class="page">
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
  mounted() {
    api
      .get("article/" + this.$route.params.id)
      .then((res) => {
        this.article = markdownit.render(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.page {
  flex-grow: 1;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
  padding: 10px;
  overflow: hidden;
}

.page article {
  overflow: hidden;
}
</style>
