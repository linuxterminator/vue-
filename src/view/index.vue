<template>
  <div class="app-body">
    <div class="left-div"><left /></div>
    <div class="middle-div"><router-view></router-view></div>
    <div class="right-div"><right /></div>
  </div>
</template>

<script>
import left from "@/view/left";
import right from "@/view/right";

export default {
  components: {
    left,
    right,
  },
};
</script>

<style>
.app-body {
  /**flex布局不要设置高度 */
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  width: 100%;
}

.app-body > .right-div,
.left-div {
  width: 270px;
  margin: 10px;
  /**防止子元素因为设置了宽度依然会被收缩 */
  flex-shrink: 0;
}

.app-body > .middle-div {
  flex-grow: 1;
  margin: 10px;
}
</style>
