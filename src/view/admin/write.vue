<template>
  <div id="main">
    <!--markdown-->
    <div>
      <mavon-editor v-model="Article.content" />
    </div>
    <!--文章信息-->
    <div
      v-for="(item, index) in inputList"
      :key="'inputList' + index"
      class="input-container"
    >
      <input
        type="text"
        class="input-primary"
        :placeholder="item.name"
        v-model="Article[item.pro]"
      />
    </div>
    <!--标签选择-->
    <span
      v-for="(item, index) in tagList"
      :key="'tag' + index"
      class="check-span"
    >
      <input type="checkbox" v-model="Article.tagList" :value="item" />
      <label>{{ item.tagName }}</label>
    </span>
    <!--按钮-->
    <div>
      <button class="main-button" @click="submitArticle">提交</button>
    </div>
    {{ Article }}
  </div>
</template>

<script>
import { api } from "@/api/http";
export default {
  data() {
    return {
      //data里面不能使用this，所以只能通过这种数据结构来实现
      //输入框循环的内容
      inputList: [
        { name: "文章标题", pro: "title" },
        { name: "文章描述", pro: "introduction" },
        { name: "文章作者", pro: "author" },
        { name: "文章封面", pro: "img" },
      ],
      tagList: [],
      //文章对象
      Article: {
        title: "",
        introduction: "",
        author: "",
        img: "",
        content: "",
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