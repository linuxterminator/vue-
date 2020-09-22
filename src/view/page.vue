<template>
  <div class="page">
    <article>
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
  created() {
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
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}

article {
  overflow: hidden;
}
</style>
