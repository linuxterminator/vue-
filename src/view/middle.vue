<template>
  <div class="middle">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="article-item container"
    >
      <!--封面-->
      <div class="articleCover">
        <img :src="item.img" alt="文章封面" />
      </div>
      <article>
        <!--标题-->
        <header>
          <h3>{{ item.title }}</h3>
        </header>
        <!--主体-->
        <p @click="toPage(item.id)" class="text-blue">
          {{ item.introduction }}
        </p>
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
    //跳转到page
    toPage(id) {
      this.$router.push("/page/" + id);
    },
    //获取标签下的所有文章
    getArticleFromTag() {
      api
        .get("/tag/" + this.$route.params.tagId)
        .then((res) => {
          this.list = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取文章
    getArticle() {
      api
        .get("article")
        .then((res) => {
          this.list = res.data.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  /**根据路由来判断该获取什么数据，是标签下的文章还是全部文章 */
  created() {
    if (this.$route.path == "/") {
      this.getArticle();
    } else {
      this.getArticleFromTag();
    }
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
  margin-bottom: 17px;
  display: flex;
}

.articleCover {
  width: 320px;
  height: 100%;
  flex-shrink: 0;
  background-size: cover;
}

.articleCover > img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
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
