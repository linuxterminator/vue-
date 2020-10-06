<template>
  <!--文章列表组件-->
  <div class="articleList">
    <div
      v-for="(item, index) in articleList"
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
        <p @click="toPage(item.title)" class="text-blue">
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
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    toPage(title) {
      this.$router.push("/page/" + title);
    },
  },
  props: ["articleList"],
};
</script>

<style>
header h3 {
  margin: 10px 0;
}

.articleList span {
  font-size: 9px;
  margin-right: 10px;
  cursor: pointer;
}

.article-item {
  width: 100%;
  height: 250px;
  margin-bottom: 17px;
  display: flex;
  overflow: hidden;
}

.articleCover {
  width: 41%;
  height: 100%;
  flex-shrink: 0;
  background-size: cover;
}

.articleCover > img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.articleList article {
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
