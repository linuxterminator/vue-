<template>
  <div class="app-container">
    <div class="app-head container">
      <navigation />
    </div>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
export default {
  data() {
    return {};
  },
  components: {
    navigation,
  },
};
</script>

<style>
.app-container {
  font-family: "hanyi";
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #edf2f4;
}

.app-container .app-head {
  height: 60px;
}

.app-container .app-body {
  flex-grow: 1;
  background: #edf2f4;
}
</style>