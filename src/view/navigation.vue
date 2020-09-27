<template>
  <div class="navigation container">
    <nav>
      <router-link
        :to="item.path"
        v-for="(item, index) in navList"
        :key="index"
      >
        <i :class="item.icon"></i>
        <span class="text-blue">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "主页", path: "/", icon: "iconfont iconicon_huabanfuben" },
        { name: "分类", path: "/", icon: "iconfont iconfenlei" },
        { name: "关于", path: "/about", icon: "iconfont iconguidang" },
        // { name: "markdown测试", path: "/test", icon: "iconfont iconmarkdown" },
      ],
    };
  },
};
</script>

<style>
.navigation {
  line-height: 60px;
  padding: 0 20px;
}

.navigation span {
  font-size: 17px;
  padding: 0 10px;
}

.navigation a {
  text-decoration: none;
  color: #565a5f;
  padding: 0 12px;
  color: #6c549c;
}
</style>
