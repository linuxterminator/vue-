<template>
  <div class="main">
    <mavon-editor v-model="article.content" />
    <input placeholder="文章标题" v-model="article.title" />
    <input placeholder="文章摘要" type="text" v-model="article.introduction" />
    文章图片有默认链接
    <button @click="submitMarkDown" class="main-button submit">提交</button>
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
      if (this.article.title == "") {
        alert("标题不能为空");
      } else if (this.article.introduction == "") {
        alert("简介不能为空");
      } else if (this.article.content == "") {
        alert("内容不能为空");
      } else {
        api
          .post("article", this.article)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
.submit {
  width: 70px;
  height: 30px;
}

.main > input {
  width: 200px;
  height: 20px;
  outline: none;
  margin: 10px;
}
</style>
