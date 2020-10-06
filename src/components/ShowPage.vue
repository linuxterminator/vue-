<template>
  <!--展示内容组件-->
  <div class="showArticle">
    <article>
      <div v-html="Article"></div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["Article"],
};
</script>

<style>
.showArticle {
  padding: 15px;
  height: 100%;
}
</style>