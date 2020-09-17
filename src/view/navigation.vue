<template>
  <div class="nav_head">
    <nav>
      <router-link
        :to="item.path"
        v-for="(item, index) in navList"
        :key="index"
        class="nav_span"
        ><span>{{ item.name }}</span></router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "主页", path: "/" },
        { name: "分类", path: "/" },
        { name: "归档", path: "/" },
        { name: "markdown测试", path: "/test" },
      ],
    };
  },
};
</script>

<style>
.nav_span {
  font-size: 20px;
  padding: 0 20px;
}

.nav_head {
  line-height: 60px;
  padding: 0 20px;
}

a {
  text-decoration: none;
}
</style>
