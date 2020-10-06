<template>
  <div class="container archive">
    <span>归档</span>
    <div class="timeLine">
      <div
        v-for="(item, index) in ArticleList"
        :key="index"
        class="timeLineItem"
      >
        <div>{{ item.title }}</div>
        <div>{{ item.createdate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/api/http";
export default {
  data() {
    return {
      ArticleList: "",
    };
  },
  methods: {
    getArticle() {
      api
        .get("/article")
        .then((res) => {
          this.ArticleList = res.data.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getArticle();
  },
};
</script>

<style>
.archive {
  padding: 10px;
}

.timeLine {
  border-left: 1px solid #e7e9ed;
  margin: 20px;
  position: relative;
}

.timeLineItem {
  margin: 30px 40px;
  position: relative;
  padding: 7px;
  width: fit-content;
}

.timeLineItem::after {
  content: "";
  background: #3273dc;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  position: absolute;
  left: -47px;
  top: 10px;
}
</style>