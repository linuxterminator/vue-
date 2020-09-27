<template>
  <div class="left">
    <div class="left-all about container">
      <div class="me">
        <img :src="logo" alt="me" width="100%" height="100%" />
      </div>
      <div class="showMySelf">
        <span>Hello World !<br /></span>
      </div>
      <div class="attention">
        <button class="main-button attention-button">别点我</button>
      </div>
      <div class="platform">
        <i class="iconfont iconpengyouquan"></i>
        <i class="iconfont iconweixin"></i>
        <i class="iconfont icongithub"></i>
        <i class="iconfont iconbilibili-line"></i>
      </div>
    </div>

    <div class="left-all category container">
      <span>分类</span>
      <ul>
        <li v-for="(item, index) in category" :key="index">
          <i :class="item.icon"></i>
          <span class="text-blue">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: String,
  },
  data() {
    return {
      category: [
        { name: "日志", icon: "iconfont iconicon-test1" },
        { name: "教程", icon: "iconfont iconcaishichang-" },
        { name: "笔记", icon: "iconfont iconbiji" },
        { name: "友链", icon: "iconfont iconyouqinglianjie" },
        { name: "其他", icon: "iconfont iconqita" },
      ],
    };
  },
};
</script>

<style>
.left-all {
  overflow: hidden;
}

.left > .about {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 330px;
}

.left > .about > .me {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  margin: 20px auto;
  overflow: hidden;
}

.left > .about > .showMySelf {
  height: 60px;
  text-align: center;
}

.left > .about > .attention {
  flex-grow: 1;
  text-align: center;
}

.left > .about > .attention > .attention-button {
  width: 200px;
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

/**分类区域css */
.left > .category {
  margin-top: 20px;
  min-height: 180px;
  padding: 10px;
}

.left > .category ul {
  padding: 15px;
  margin: 0;
}

.left > .category > ul > li {
  padding: 5px;
}

li span {
  margin-left: 10px;
  cursor: pointer;
}
</style>
