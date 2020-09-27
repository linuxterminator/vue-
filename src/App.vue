<template>
  <div id="app">
    <div class="app-head">
      <navigation />
    </div>
    <div class="appBody">
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
  font-family: "hanyi";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background: #f5f8f9;
  height: 100%;
}

#app > .app-head {
  height: 60px;
}

#app > .appBody {
  background: #f5f8f9;
  margin-top: 20px;
}
</style>
