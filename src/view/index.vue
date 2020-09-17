<template>
  <div class="app-body">
    <div class="left-div"><left /></div>
    <div class="middle-div"><middle /></div>
    <div class="right-div"><right /></div>
  </div>
</template>

<script>
import left from "@/view/left";
import right from "@/view/right";
import middle from "@/view/middle";

export default {
  components: {
    left,
    right,
    middle,
  },
};
</script>

<style>
.app-body {
  /**flex布局不要设置高度 */
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
}

.right-div,
.left-div {
  width: 400px;
  margin: 10px;
}

.middle-div {
  width: 100%;
  margin: 10px;
}
</style>
