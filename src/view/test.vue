<template>
  <div id="main">
    <mavon-editor v-model="article.content" />
    <button @click="submitMarkDown">提交</button>
  </div>
</template>

<script>
import { api } from "@/http";
export default {
  data() {
    return {
      article: {
        title: "markdown测试",
        content: "",
        author: "markdown作者",
        tagList: [],
      },
    };
  },
  methods: {
    submitMarkDown() {
      api
        .post("article", this.article)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
