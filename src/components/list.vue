<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <span @click="whatUseMe(item[itemName])">{{ item[itemName] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //三个props，一个是要传进来的列表，一个是键的名字，还有是要去哪个页面的方法
  props: ["list", "itemName", "toWhat"],
  methods: {
    //跳转最新文章
    toPage(articleName) {
      this.$router.push("/page/" + articleName);
    },
    //跳转标签下的文章
    toArticleUnderTag(tagName) {
      this.$router.push("/tagArticle/" + tagName);
    },
    //判断当前组件被谁使用，好进行不同的跳转
    whatUseMe(name) {
      if (this.toWhat == "tagArticle") {
        this.toPage(name);
      } else if (this.toWhat == "article") {
        this.toArticleUnderTag(name);
      } else {
        return;
      }
    },
  },
  filters: {
    addEllipsis(value) {
      if (value.length > 20) {
        return value.slice(0, 19) + "...";
      } else {
        return value;
      }
    },
  },
};
</script>

<style>
</style>