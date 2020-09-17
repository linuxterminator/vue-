<template>
  <div id="app">
    <div class="app-head">
      <navigation />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from "@/view/navigation";

export default {
  name: "App",
  components: {
    navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #565a5f;
  background: #f5f8f9;
  height: 100%;
  overflow: auto;
}

.app-head {
  height: 60px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}
</style>
