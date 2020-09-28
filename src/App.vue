<template>
  <div id="app">
    <div class="app-head container">
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
  height: 100%;
  display: flex;
  flex-direction: column;
}

#app > .app-head {
  height: 60px;
}

#app > .appBody {
  background: #e9f2f8;
  flex-grow: 1;
}
</style>
