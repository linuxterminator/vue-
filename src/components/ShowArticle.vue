<template>
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