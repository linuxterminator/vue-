<template>
  <div>
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

<style></style>
