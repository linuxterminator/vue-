<template>
  <!--logo组件-->
    <div class="logo">
      <img :src="logourl" alt="博客logo" width="100%" height="100%" />
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
  overflow: hidden;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1)
}

@media screen and (max-width: 400px) {
  .logo {
    width: 50px;
    height: 50px;
  }
}
</style>