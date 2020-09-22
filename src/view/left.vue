<template>
  <div class="left">
    <div class="about">
      <div class="me"></div>
    </div>
    <div class="category">分类</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  overflow: hidden;
}

.about {
  height: 350px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}

.category {
  margin-top: 20px;
  min-height: 250px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}

.me {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  margin: 20px auto;
  background: url(../assets/me.jpg);
  /**background-size必须放在background后面 */
  background-size: cover;
}
</style>
