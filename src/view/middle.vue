<template>
  <div>
    <div v-for="(item, index) in list" :key="index" class="article-item">
      <div class="articleCover"></div>
      <article>
        <header>
          <h1>{{ item.title }}</h1>
        </header>
        <p v-html="item.content" @click="toPage(item.id)"></p>
        <footer>
          {{ item.createdate }}
          <span v-for="(item, index) in item.tagList" :key="index">
            {{ item.tagName }}
          </span>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
import { api } from "@/http.js";
import { markdownit } from "@/markdownit";
import "highlight.js/styles/gruvbox-dark.css";
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    toPage(id) {
      this.$router.push("page/" + id);
    },
  },
  created() {
    api
      .get("article")
      .then((res) => {
        console.log(res.data.data);
        //解析markdown
        let contentList = res.data.data;
        for (let item of contentList) {
          item.content = markdownit.render(item.content);
        }
        this.list = contentList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
header h1 {
  margin: 10px 0;
}

.article-item {
  width: 100%;
  height: 250px;
  box-shadow: 0 0 1px #9c9d9e;
  background: white;
  margin-bottom: 17px;
  display: flex;
}

.articleCover {
  width: 280px;
  height: 230px;
  margin: auto 10px;
  /**使用背景图片的方式，直接插入图片有问题，图片容易失真 */
  background: url("../assets/imgTest.png");
  background-size: cover;
}

article {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.article-item article {
  height: 100%;
}

.article-item header {
  height: 20%;
  text-align: left;
  padding: 0 13px;
  overflow: hidden;
}

article p {
  height: 50%;
  text-align: left;
  flex-grow: 1;
  margin: 0;
  cursor: pointer;
}

article footer {
  padding: 0 13px;
  height: 35px;
  line-height: 35px;
}
</style>
