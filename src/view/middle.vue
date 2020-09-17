<template>
  <div>
    <div v-for="(item, index) in list" :key="index" class="item-div">
      <article>
        <header>
          <h1>{{ item.title }}</h1>
        </header>
        <p v-html="item.content"></p>
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
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    api
      .get("article")
      .then((res) => {
        //使用marked-it解析后使用highlight.js，不能单独使用highlight.js,因为<pre><code>已经被markdown-it解析了
        //除非不使用marked-it使用hightlight.js？
        let MarkdownIt = require("markdown-it");
        //创建markdownit对象
        let markdownit = new MarkdownIt();
        //markdown-it的语法拓展
        markdownit.use(require("markdown-it-mark"));
        markdownit.use(require("markdown-it-ins"));
        markdownit.use(require("markdown-it-emoji"));
        //高亮插件
        markdownit.use(require("markdown-it-highlightjs"));

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
