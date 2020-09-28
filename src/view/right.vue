<template>
  <div class="right">
    <div class="right-all announcement container">
      <span>公告</span>
      <p>{{ announcement }}</p>
    </div>
    <div class="right-all newArticle container">
      <span>最新文章</span>
      <list :list="newArticle" itemName="title" toWhat="tagArticle" />
    </div>
    <div class="right-all articleTag container">
      <div>标签</div>
      <list :list="articleTag" itemName="tagName" toWhat="article" />
    </div>
  </div>
</template>

<script>
import { api } from "@/http";
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
.right-all {
  padding: 10px;
  overflow: hidden;
}

.right > .announcement {
  height: 120px;
}
.right > .newArticle {
  margin: 10px 0;
}

.textActive {
  color: #3273dc;
}
</style>
