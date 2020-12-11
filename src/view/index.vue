<template>
  <div class="app-container">
    <div class="app-body">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style>
.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-container .app-body {
  width:100%;
}

@keyframes up_and_down {
  from{
    transform: translate(0,0);
  }
  to{
    transform: translate(0,15px);
  }
}
</style>