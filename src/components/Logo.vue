<template>
  <!--logo组件-->
  <div>
    <div class="logo">
      <img :src="logourl" alt="博客logo" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["logourl"],
};
</script>

<style>
.logo {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  margin: 20px auto;
  overflow: hidden;
}

@media screen and (max-width: 400px) {
  .logo {
    width: 50px;
    height: 50px;
  }
}
</style>