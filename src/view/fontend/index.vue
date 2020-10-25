<template>
  <div class="app-container">

    <div class="app-head" :class="{index:showWelcome,other:!showWelcome}">
      <navigation :navList="navList" />
    </div>

    <div class="blog-welcome" v-if="showWelcome">
      <div class="blog-name">
          <vue-typed-js :strings="['我打江南走过，那等在季节里的容颜如莲花的开落','欢迎光临我的博客']" :typeSpeed="150">
            <span class="typing"></span>
          </vue-typed-js>
      </div>
      <div class="img-cover"></div>
      <div class="to-bottom"><i class="iconfont iconxiangxia" @click="toShow()"></i></div>
      <img width="100%" height="100%" src="https://qingshanblog.oss-cn-hangzhou.aliyuncs.com/backimg.PNG"/>
    </div>

    <div class="app-body">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import navigation from "@/components/navigation";
export default {
  data() {
    return {
      navList: [
        { name: "主页", path: "/", icon: "iconfont iconicon_huabanfuben" },
        { name: "归档",path: "/archive",icon: "iconfont iconyouqinglianjie "},
        { name:"留言板",path:"/leaveMessage",icon:"iconfont iconliuyanban-05"},
        { name: "关于", path: "/about", icon: "iconfont iconguidang" },
      ],
    };
  },
  components: {
    navigation,
  },
  computed:{
    showWelcome(){
      if(this.$route.path == "/"){
        return true;
      }
      else{
        return false;
      }
    }
  },
  methods:{
    toShow(){
      window.scrollTo({
        top:687,
        behavior:"smooth"
      })
    }
  }
};
</script>

<style>
.app-container {
  font-family: "hanyi";
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-container .app-head {
  max-height: 60px;
  z-index:1
}

.app-container .app-body {
  flex-grow: 1;
  background-color: rgb(246,246,246)
}

.blog-welcome{
  height:100vh;
  flex-shrink: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  /* z-index:-1 */
}

.blog-welcome img{
  object-fit: cover;
}

.blog-welcome .blog-name{
  font-size:2rem;
  position:absolute;
  color:white;
  font-weight: 900;
  z-index:1
}

.index{
  position:absolute;
  background:transparent
}

.index a{
  color:white
}

.other{
  background-color:white;
  position:sticky;
  top:0;
}

.img-cover{
  background-color: rgba(0,0,0,.2);
  height: 100%;
  width:100%;
  position:absolute;
}

.to-bottom{
  z-index: 1;
  position:absolute;
  bottom:20px;
  color:white;
  animation:up_and_down 2s;
  /**动画播放次数无限 */
  animation-iteration-count: infinite;
  /* 播放完再反向播放 */
  animation-direction: alternate;
}

.to-bottom i {
  font-size: 2.6rem;
  cursor: pointer;
}

@keyframes up_and_down {
  from{
    transform: translate(0,0);
  }
  to{
    transform: translate(0,15px);
  }
}
</style>