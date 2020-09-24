<template>
  <div id="main">
    <mavon-editor v-model="article.content" />
    <input placeholder="文章标题" v-model="article.title" />
    <input placeholder="文章摘要" type="text" v-model="article.introduction" />
    <input type="file" />
    <button @click="submitMarkDown">提交</button>
  </div>
</template>

<script>
import { api } from "@/http";
export default {
  data() {
    return {
      article: {
        title: "",
        content: "",
        introduction: "",
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
