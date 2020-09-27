<template>
  <div class="container aboutme" v-html="showSelf"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["showSelf"],
};
</script>

<style>
.aboutme {
  min-height: 600px;
  padding: 20px;
}
</style>