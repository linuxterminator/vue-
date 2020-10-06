<template>
  <div id="main">
    <div>
      <mavon-editor v-model="Article.content" />
    </div>
    <div class="input-container">
      <input
        type="text"
        placeholder="文章标题"
        class="input-primary"
        v-model="Article.title"
      />
    </div>
    <div class="input-container">
      <input
        type="text"
        placeholder="文章描述"
        class="input-primary"
        v-model="Article.introduction"
      />
    </div>
    <div class="input-container">
      <input
        type="text"
        placeholder="文章作者"
        class="input-primary"
        v-model="Article.author"
      />
    </div>
    <div class="input-container">
      <input
        type="text"
        placeholder="文章封面图"
        class="input-primary"
        v-model="Article.img"
      />
    </div>
    <span v-for="(item, index) in tagList" :key="index" class="check-span">
      <input type="checkbox" v-model="Article.tagList" :value="item" />
      <label>{{ item.tagName }}</label>
    </span>
    <div>
      <button class="main-button" @click="submitArticle">提交</button>
    </div>
  </div>
</template>

<script>
import { api } from "@/api/http";
export default {
  data() {
    return {
      tagList: [],
      //文章
      Article: {
        content: "",
        title: "",
        author: "",
        introduction: "",
        img: "",
        tagList: [],
      },
    };
  },
  methods: {
    //获取标签
    getTag() {
      api
        .get("/tag")
        .then((res) => {
          this.tagList = res.data;
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //提交文章
    submitArticle() {
      if (this.Article.article == "") {
        alert("请输入文章");
      } else if (this.Article.title == "") {
        alert("请输入标题");
      } else if (this.Article.author == "") {
        alert("请输入作者");
      } else if (this.Article.introduction == "") {
        alert("请输入简介");
      } else {
        api
          .post("/article", this.Article)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  created() {
    this.getTag();
  },
};
</script>

<style>
.check-span {
  margin: 0 10px;
}

.input-container {
  margin: 10px;
}
</style>