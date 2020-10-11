<template>
  <div id="main">
    <!--markdown-->
    <div>
      <mavon-editor v-model="Article.content" />
    </div>
    <!--文章信息-->
    <div>
      <inputPrimary :inputList="inputList" />
    </div>
    <!--标签选择-->
    <div>
      <checkboxPrimary :tagList="tagList" @checkData="getCheckData" />
    </div>
    <!--按钮-->
    <div>
      <button class="main-button" @click="submitArticle">提交</button>
    </div>
    {{ Article }}
  </div>
</template>

<script>
import { api } from "@/api/http";
import inputPrimary from "@/components/inputPrimary";
import checkboxPrimary from "@/components/checkboxPrimary";
export default {
  components: {
    inputPrimary,
    checkboxPrimary,
  },
  data() {
    return {
      //data里面数据之间好像不能互相访问
      //输入框循环的内容,分别是input里面的占位符，input上方的名字，还有数据，这里数据是一样的
      inputList: [
        { placeholder: "文章标题", name: "文章标题:", data: "" },
        { placeholder: "文章描述", name: "文章描述:", data: "" },
        { placeholder: "文章作者", name: "文章作者:", data: "" },
        { placeholder: "文章封面", name: "文章封面:", data: "" },
      ],
      //选择标签的内容
      tagList: [],
      //文章对象
      Article: {
        title: this.returnTitle,
        introduction: "",
        author: "",
        img: "",
        content: "",
        tagList: [],
      },
    };
  },
  //计算属性获取数组的data，watch监听并添加给article对象
  computed: {
    //计算属性是这样写的，而不是returnTitle:()=>{},reuturnTitle(){}是es6简写
    returnTitle() {
      return this.inputList[0].data;
    },
    returnIntroduction() {
      return this.inputList[1].data;
    },
    returnAuthor() {
      return this.inputList[2].data;
    },
    returnImg() {
      return this.inputList[3].data;
    },
  },
  watch: {
    returnTitle(value) {
      this.Article.title = value;
    },
    returnIntroduction(value) {
      this.Article.introduction = value;
    },
    returnAuthor(value) {
      this.Article.author = value;
    },
    returnImg(value) {
      this.Article.img = value;
    },
  },
  methods: {
    getCheckData(value) {
      this.Article.tagList = value;
    },
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
</style>