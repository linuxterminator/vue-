<template>
  <div class="navigation">
    <nav>
      <router-link
        :to="item.path"
        v-for="(item, index) in navList"
        :key="index"
      >
        <i :class="item.icon"></i>
        <span class="text-blue">{{ item.name }}</span>
      </router-link>
      <span class="blogName">Narcissus'Blog</span>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {};
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

.blogName {
  position: absolute;
  right: 70px;
  font-size: 23px !important;
  color: rgba(92, 143, 25, 0.795);
}
</style>
