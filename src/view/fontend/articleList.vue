<template>
    <section class="article-list">
            <article
                v-for="(item, index) in ArticleList"
                :key="index"
                class="article-item">
              <div class="article-body">
                  <div class="img-container">
                    <img :src="item.img" alt="文章封面"/>
                  </div>
                  <div class="article-body-container">
                      <header>
                          <span @click="to_page(item)">{{ item.title }}</span>
                      </header>
                      <p>{{ item.content | filter_content }}</p>
                      <footer>    
                          <div class="tag">
                              <span
                              v-for="(item,index) in item.tagList" :key="index"
                              style="margin-left:5px"
                              >{{item.tagName}}</span>
                          </div>
                          <time :datetime="item.createdate">
                              <span style="margin-left:5px">{{item.createdate}}</span>
                          </time>
                    </footer>
                  </div>
              </div>
        </article>
    </section>
</template>

<script>
import api from "@/api/http";
export default {
  data() {
    return {
      ArticleList: [],
    };
  },
  methods: {
    getArticleList() {
      api
        .get("/article")
        .then((res) => {
          this.ArticleList = res.data;
        })
    },
    to_page:function(value){
      this.$router.push("/page/"+value.title)
    }
  },
  filters:{
    filter_content:function(value){
      // 从第一个#字符后开始截取
      return value.slice(1,58)+"..."
    }
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style src="@/style/web/articleList.scss" lang="scss"></style>