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
                          <span>{{ item.title }}</span>
                      </header>
                      <p>{{ item.content | filter_content }}</p>
                      <footer>            
                          <time :datetime="item.createdate">
                              <svg class="icon" aria-hidden="true">
                                  <use xlink:href="#iconshijian-riqi"></use>
                              </svg>
                              <span style="margin-left:5px">{{item.createdate}}</span>
                          </time>

                          <div class="tag">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconbiaoqian"></use>
                            </svg>
                              <span
                              v-for="(item,index) in item.tagList" :key="index"
                              style="margin-left:5px"
                              >{{item.tagName}}</span>
                          </div>

                          <button @click="to_page(item)">阅读全文</button>
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
      return value.slice(0,145)+"..."
    }
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style lang="scss">
@import "../../css/style.scss";
@import "../../css/animition.scss";
.article-list{
    width:100%;
        article{
            padding:10px;
            width:100%;
            @include container;
            margin-bottom: 15px;
            box-sizing: border-box;
            transform-origin: top;
        header{
            span{
                margin:0;
                font-size: 20px;
                letter-spacing: 1.6px;
                color:#000000D6;}
            }

            .article-body{
                display:flex;
                flex-direction: row;
                margin:6px 0px;
                font-size: 16px;
                .img-container{
                    width:258px;
                    height:160px;
                    flex-shrink: 0;
                    overflow: hidden;
                    border-radius: 2px;
                }
                img{
                    width:100%;
                    height:100%;
                    transition:all 1s}
                img:hover{
                  transform: scale(1.2);
                }
                p{
                    margin:0;         
                    flex-grow: 1;
                    padding-left: 20px;
                    margin:0px;
                    color:#666666;
                    font-size:14px;
                    letter-spacing: 0.5px;}
                }
                .article-body-container{
                  display:flex;
                  flex-direction: column;
                  width:100%;
                  header{
                    padding-left:20px;
                    width:100%;
                    flex-shrink: 0;
                    margin-bottom:3px}
                  }

            footer{
                text-align: right;
                position: relative;
                padding-left: 20px;
                flex-shrink: 0;
                width:100%;
                time{
                    font-size:12px;
                    margin-right: 40px;
                    float:left;
                    line-height: 33px;
                    span{
                        color:#00000099;}
                    }
                .tag{
                    font-size:11px;
                    margin-right: 10px;
                    display:inline;
                    float:left;
                    line-height: 33px;
                    span{@include tag}
                    }
                button{
                    outline:none;
                    color:#fff;
                    border:1px solid #409EFF;
                    background-color: #409EFF;
                    padding:6px 15px;
                    font-size:12px;
                    position:relative;
                    right:-4px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);}
                button::after{
                    content: "";
                    display:block;
                    position: absolute;
                    border: 6px solid ;
                    bottom:-13px;
                    right:0px;
                    border-color:  #1b64ad transparent transparent #1b64ad;}
            }
  }
}
</style>