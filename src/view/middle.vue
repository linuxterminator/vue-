<template>
  <div>
    <div v-for="(item, index) in list" :key="index" class="item-div">
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
//highlight.js样式
import "highlight.js/styles/gruvbox-dark.css";
import { markdownit } from "@/markdownit";
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
  margin: 0;
}

.item-div article {
  height: 100%;
}

.item-div header {
  height: 20%;
  text-align: left;
  padding: 0 13px;
}

article p {
  height: 50%;
  text-align: left;
  padding: 0 13px;
}

.item-div {
  width: 100%;
  height: 250px;
  box-shadow: 0 0 1px #9c9d9e;
  background: white;
  margin-bottom: 17px;
}
article footer {
  padding: 0 13px;
}
</style>
