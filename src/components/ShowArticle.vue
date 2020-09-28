<template>
  <div class="showArticle container">
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
}
</style>