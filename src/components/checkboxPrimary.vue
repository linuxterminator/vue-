<template>
  <div class="checkbox-container">
    <span v-for="(item, index) in tagList" :key="index" class="check-span">
      <input type="checkbox" :value="item" v-model="resultList" />
      <label>{{ item.tagName }}</label>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resultList: [],
    };
  },
  props: ["tagList"],
  watch: {
    resultList() {
      this.$emit("checkData", this.resultList);
    },
  },
};
</script>

<style>
</style>