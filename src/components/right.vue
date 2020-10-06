<template>
  <div class="right">
    <div class="right-all announcement container">
      <span>公告</span>
      <p>{{ announcement }}</p>
    </div>
    <div class="right-all newArticle container">
      <span>最新文章</span>
      <list :list="newArticle" listKeyName="title" :path="/page/" />
    </div>
    <div class="right-all container">
      <div>标签</div>
      <list :list="articleTag" listKeyName="tagName" :path="/tagArticle/" />
    </div>
  </div>
</template>

<script>
import { api } from "@/api/http";
import list from "@/components/list";
export default {
  components: {
    list,
  },
  props: {
    announcement: String,
  },
  data() {
    return {
      newArticle: [],
      articleTag: [],
    };
  },
  methods: {
    //获取最新文章
    getNewArticle() {
      api
        .get("article")
        .then((res) => {
          this.newArticle = res.data.reverse().slice(0, 6);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取标签
    getTag() {
      api
        .get("tag")
        .then((res) => {
          this.articleTag = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getNewArticle();
    this.getTag();
  },
};
</script>

<style>
.right {
  overflow: hidden;
}
.right-all {
  padding: 10px;
  overflow: hidden;
  margin: 10px 0;
}
</style>
