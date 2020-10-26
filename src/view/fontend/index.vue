<template>
  <div class="app-container">

    <div class="app-head" :class="{isIndex:this.$route.path == '/'}">
      <navigation :navList="navList" />
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
  },
  methods:{
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

.welcome-img{
  width:100%;
  height: 100%;
  object-fit: cover;
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

@keyframes up_and_down {
  from{
    transform: translate(0,0);
  }
  to{
    transform: translate(0,15px);
  }
}
</style>