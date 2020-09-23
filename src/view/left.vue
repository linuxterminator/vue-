<template>
  <div class="left">
    <div class="about">
      <div class="me">
        <img :src="imgList.me" alt="me" width="100%" height="100%" />
      </div>
      <div class="showMySelf">
        <span>Hello World !<br /></span>
      </div>
      <div class="attention">
        <button class="attention-button">关注我</button>
      </div>
      <div class="me-platform">
        <img :src="imgList.github" alt="github" width="26px" />
        <img :src="imgList.wechat" alt="wechat" width="26px" />
        <img :src="imgList.qq" alt="qq" width="26px" />
        <img :src="imgList.bilibili" alt="bili" width="26px" />
      </div>
    </div>

    <div class="category">分类</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //应该这样引入图片
      imgList: {
        me: require("../assets/me.jpg"),
        bilibili: require("../svg/bilibili.svg"),
        github: require("../svg/github.svg"),
        wechat: require("../svg/wechat.svg"),
        qq: require("../svg/qq.svg"),
      },
    };
  },
};
</script>

<style>
.about {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 350px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}

.me {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  margin: 20px auto;
  overflow: hidden;
}

.showMySelf {
  height: 54px;
  text-align: center;
}

.attention-button {
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid white;
  letter-spacing: 3px;
  background: #409eff;
  color: white;
}

button {
  cursor: pointer;
  outline: none;
}

.attention {
  flex-grow: 1;
  text-align: center;
}

.me-platform {
  text-align: center;
  margin: 10px 0;
}

.me-platform img {
  margin: 9px;
  cursor: pointer;
}

.category {
  margin-top: 20px;
  min-height: 250px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}
</style>
