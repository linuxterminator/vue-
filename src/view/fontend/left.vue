<template>
  <div class="left">
    <div class="left-all about container">
      <div>
        <Logo :logourl="logo" />
      </div>
      <div class="attention">
        <button class="main-button attention-button">别点我</button>
      </div>
      <div class="platform">
        <i :class="item" v-for="(item, index) in platform" :key="index"></i>
      </div>
    </div>
    <div class="left-all category container">
      <span>分类</span>
      <list :list="category" listKeyName="name" />
    </div>
  </div>
</template>

<script>
import list from "@/components/list";
import Logo from "@/components/Logo";
export default {
  props: {
    logo: String,
  },
  components: {
    list,
    Logo,
  },
  data() {
    return {
      platform: [
        "iconfont iconpengyouquan",
        "iconfont iconweixin",
        "iconfont icongithub",
        "iconfont iconbilibili-line",
      ],
      category: [
        { name: "日志", icon: "iconfont iconicon-test1" },
        { name: "教程", icon: "iconfont iconcaishichang-" },
        { name: "笔记", icon: "iconfont iconbiji" },
        { name: "分类", icon: "iconfont iconfenlei" },
        { name: "其他", icon: "iconfont iconqita" },
      ],
    };
  },
};
</script>

<style>
.left-all {
  overflow: hidden;
  padding: 10px;
  margin: 10px 0;
}

.left > .about {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.left > .about > .attention {
  flex-grow: 1;
  text-align: center;
}

.left > .about > .attention > .attention-button {
  width: 90%;
  height: 40px;
}

.left > .about > .platform {
  text-align: center;
  margin: 10px 0;
}

.left > .about > .platform > i {
  font-size: 25px;
  margin: 0 7px;
  cursor: pointer;
}
</style>
