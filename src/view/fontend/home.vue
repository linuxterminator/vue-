<template>
  <div class="home">

      <nav class="home-head">
          <div class="home-logo">
            LEN MORE
          </div>
          <router-link
            :to="item.path"
            v-for="(item, index) in navList"
            :key="index">
            <span>{{ item.name }}</span>
          </router-link>
          <div class="home-search">
            <input type="text" placeholder="探索">
            <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconsousuo"></use>
            </svg>
          </div>
      </nav>

      <div class="home-body">
          <div class="home-body-left">

              <div class="aside">
                  <div class="logo">
                    <img :src="logo">
                  </div>
                  <span class="profile">Hello world</span>
              </div>

              <div class="aside">
                <div class="aside-head">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconbiaoqian"></use>
                    </svg>
                    <span style="margin-left:4px">标签</span>
                </div>
                <div v-for="(item,index) in tags" :key="index" class="tag">
                    {{item.tagName}}
                </div>
              </div>

              <div class="aside">
                <div class="aside-head">
                    <svg class="icon" aria-hidden="true">
                          <use xlink:href="#iconfenlei1"></use>
                    </svg>
                    <span style="margin-left:4px">分类</span>
                </div>
                  <div>
                      <ul>
                          <li v-for="(item,index) in kind" :key="index">
                            {{item}}
                          </li>
                      </ul>
                  </div>
              </div>

              <div class="aside">
                <div class="aside-head">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconlianjie"></use>
                    </svg>
                    <span style="margin-left:4px">链接</span>
                </div>
              </div>
        </div>

      <div class="home-body-right">
          <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>

    <div class="footer">
        power by huqingshan
        <br>
        我打江南走过，那等在季节里的容颜如莲花的开落
    </div>
  </div>
</template>

<script>
import api from "@/api/http.js";
import { markdownit } from "@/markdownit";

export default {
  data() {
    return {
      navList: [
        { name: "首页", path: "/"},
        { name: "归档",path: "/archive"},
        { name: "标签", path: "/about"},
        { name: "留言板", path: "/about"},
        { name: "关于", path: "/about"},

      ],
      kind:[
        "教程","资源","笔记"
      ],
      logo:"",
      tags:[],
      //博客对象
      Blog: {
        title: "",
        logo: "",
        favicon: "",
        announcement: "",
        message: "",
      },
    };
  },
  filters:{
    dateFormat(value){
      return value.slice(0,30)
    }
  },
  watch:{
    logo:function(value){
      this.logo = value
    }
  },
  methods: {
    //获取博客信息
    getBlogInfo() {
      api
        .get("/bloginfo")
        .then((res) => {
          this.Blog.title = res.data.blogTitle;
          this.logo = res.data.blogLogo;
          this.Blog.favicon = res.data.blogFavicon;
          this.Blog.message = markdownit.render(res.data.blogMessage);
          this.Blog.announcement = res.data.blogAnnouncement;
        })
    },
    getTag(){
      api.get("/tag").then((res)=>{
        this.tags = res.data
      })
    }
  },
  mounted() {
    this.getBlogInfo();  
    this.getTag()
  },
};
</script>

<style lang="scss">
@import "../../css/style.scss";
.home {
  display: flex;
  flex-direction: column;

  nav{
      height:60px;
      line-height: 60px;
      padding:0 150px;
      border-bottom:1px solid #F0F2F7;
      background-color: #ffffff;
      font-size: 15px;
      box-sizing: border-box;
      position:sticky;
      z-index:4;
      top:0px;
      a{
          line-height: 60px;
          margin:0 20px;
          color:#4A4A4A;
          span:hover{
            color:#409EFF;
          }}
      }
      .home-logo{
        width:160px;
        height:60px;
        float: left;
        font-size: 20px;
        margin-right: 30px;
        background-color: #409EFF;
        color:#fff;
        text-align: center;
        letter-spacing: 3px;
      }
      .home-search{
        float:right;
        line-height: 60px;
        position: relative;
        .icon{
          position:absolute;
          right:10px;
          bottom:22px;
        }
        input{
          border-radius: 3px;
          height:100%;
          padding-left:12px;
          height:30px;
          border:1px solid #4A4A4A;
          width:180px;
        }
        input:focus{
          border:1px solid #409EFF;
        }
      }

  .home-body{
      display: flex;
      padding:40px 130px 20px 130px;
      .home-body-left{
          width:290px;
          flex-shrink: 0;
          .aside{
              @include container;
              padding:20px;
              margin-bottom:20px;
              text-align: left;
              font-size:14px;
              .aside-head{
                margin-bottom:12px;
                padding-bottom:6px;
                border-bottom: 1px solid #ecedee;
                font-size:15px;
                letter-spacing: 2px;
              }
              .profile{
                  text-align:center;
                  display:block;
                  width:100%;
                  margin:20px 0px 10px 0px;
                  font-size: 15px;}
              }
          }
      .home-body-right{
          flex-grow: 1;
          padding:0 30px;}
  }

  .footer{
      width:100%;
      height:150px;
      background-color:#23282D;
      padding:40px 100px;
      box-sizing: border-box;
      color:rgba(255,255,255,.5)}
}

.home-body-left li{
  padding:5px 10px;
  font-size:15px;
  cursor: pointer;
}

.home-body-left li:hover{
  background-color: #EEEEEE;
}

.home-body-left .tag{
  font-size:12px;
  margin:6px;
  display:inline-block;
  @include tag;
}

.home-body-left .platform{
  padding:10px;
  text-align: center;
  color:black;
}

.home-body-left .logo{
  width:120px;
  height:120px;
  border-radius: 50%;
  overflow: hidden;
  margin:0 auto;
}

.home-body-left .logo > img{
  width:100%;
  height:100%;
}
</style>
