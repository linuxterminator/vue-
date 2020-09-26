<template>
  <div class="right">
    <div class="right-all announcement">
      <span>公告</span>
      <p>博客施工中</p>
    </div>
    <div class="right-all newArticle">
      <span>最新文章</span>
      <ul>
        <li
          v-for="(item, index) in newArticle"
          :key="index"
          @click="toPage(item.id)"
        >
          <p>{{ item.introduction | articleLength }}</p>
        </li>
      </ul>
    </div>
    <div class="right-all articleTag">
      <div>标签</div>
      <div v-for="(item, index) in articleTag" :key="index" class="tag-item">
        {{ item.tagName }}
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/http";
export default {
  data() {
    return {
      newArticle: [],
      articleTag: [],
    };
  },
  methods: {
    //通过最新文章跳转
    toPage(id) {
      this.$router.push("/page/" + id);
    },
    //获取最新文章
    getNewArticle() {
      api
        .get("article")
        .then((res) => {
          this.newArticle = res.data.data.reverse().slice(0, 8);
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
          this.articleTag = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  filters: {
    articleLength: (value) => {
      if (value.length > 15) {
        return value.slice(0, 24) + "...";
      } else {
        return value;
      }
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
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
  padding: 10px;
}

.right > .announcement {
  height: 120px;
}
.right > .newArticle {
  height: 400px;
  margin: 10px 0;
}

.right > .articleTag {
  height: 240px;
  min-height: 300px;
}

.right > .newArticle li {
  cursor: pointer;
  margin: 10px 0;
}

.right > .articleTag span {
  padding: 3px;
}
</style>
