<template>
  <div class="middle">
    <div v-for="(item, index) in list" :key="index" class="article-item">
      <!--封面-->
      <div class="articleCover"></div>
      <article>
        <!--标题-->
        <header>
          <h3>{{ item.title }}</h3>
        </header>
        <!--主体-->
        <p v-html="item.introduction" @click="toPage(item.id)"></p>
        <!--页脚-->
        <footer>
          <span>
            <i class="iconfont iconriqi" style="font-size: 1px"></i>
            <span>{{ item.createdate }}</span>
          </span>
          <span v-for="(item, index) in item.tagList" :key="index">
            <i class="iconfont iconicon-test" style="font-size: 1px"></i>
            {{ item.tagName }}
          </span>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
import { api } from "@/http.js";
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

        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
header h3 {
  margin: 10px 0;
}

.middle span {
  font-size: 9px;
  margin-right: 10px;
  cursor: pointer;
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
  width: 300px;
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
  height: 80px;
  text-align: left;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0 15px;
}

article p {
  height: 100%;
  text-align: left;
  flex-grow: 1;
  margin: 0;
  cursor: pointer;
  padding: 0 15px;
  font-size: 17px;
}

article footer {
  height: 35px;
  line-height: 35px;
  margin-bottom: 10px;
  padding: 0 15px;
}
</style>
