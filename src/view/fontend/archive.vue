<template>
<div class="archive-container">
  <div class="archive-title">
      <vue-typed-js :strings="['时间轴']" :typeSpeed="150">
        <span class="typing"></span>
      </vue-typed-js>
  </div>
  <div class="container archive">
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
.archive-container{
  width:100%
}

.archive {
  padding: 10px;
  margin: 10px 170px 10px 170px;
  padding:20px 30px;
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

.archive-title{
  display:flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}

.archive-title span{
  font-size: 2.1rem;
  font-weight: 900;
}
</style>