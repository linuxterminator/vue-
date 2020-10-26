<template>

  <div class="articleList">
    <div
      v-for="(item, index) in articleList"
      :key="index"
      class="article-item container"
    >

      <div class="articleCover">
        <img :src="item.img" alt="文章封面" />
      </div>

      <div class="article-body">
          <article>
            <header>
                <span>{{ item.title }}</span>
            </header>
            <div class="article-date-tag">
                <span class="article-date">
                  <i class="iconfont iconshijian"></i>
                  <span>{{ item.createdate | dateFormat}} | </span>
                </span>
                <span v-for="(item, index) in item.tagList" :key="index" class="article-tag">
                  {{ item.tagName }}
                </span>
            </div>

            <div @click="toPage(item.title)" class="article-content">
              <span>{{ item.introduction }}</span>
            </div>

      </article>
      </div>

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
  filters:{
    dateFormat(value){
      return value.slice(0,12)
    }
  }
};
</script>

<style>

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

.article-body{
  flex-grow: 1;
  flex-shrink: 0;
  padding:45px 0 20px 35px;
  display:flex;
}

.article-body header {
  height: 30px;
  text-align: left;
  font-size: 1.4rem;
  line-height: 30px;
}

.article-body .article-date-tag{
  font-size:0.9rem;
  height:30px;
  margin:3px 0;
}

.article-body article{
  flex-grow: 1;
  flex-shrink: 0;
  display:flex;
  flex-direction: column;
}

.article-body .article-content {
  text-align: left;
  /* width:400px; */
  margin: 0;
  cursor: pointer;
  font-size: 0.9rem;
  width:460px;
  color:rgba(0,0,0,0.6);
}

.article-date i{
  color:rgba(0,0,0,0.5);
}

.article-date span{
  color:rgba(0,0,0,0.5);
}

.article-body .article-tag{
  margin:0 4px;
  color:rgba(0,0,0,0.5);
}

@media screen and (max-width: 400px) {
  .article-item {
    height: 80px;
  }
}
</style>
