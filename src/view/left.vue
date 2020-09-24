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
      <div class="platform">
        <i class="iconfont iconpengyouquan"></i>
        <i class="iconfont iconweixin"></i>
        <i class="iconfont icongithub"></i>
        <i class="iconfont iconbilibili-line"></i>
      </div>
    </div>

    <div class="category">
      <span>分类</span>
      <ul>
        <li v-for="(item, index) in category" :key="index">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //应该这样引入图片
      imgList: {
        me: require("../assets/me.jpg"),
      },
      category: ["日志", "教程", "笔记", "其他"],
    };
  },
};
</script>

<style>
/**关于博客区域css */
.left > .about {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 330px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
}

.left > .about > .me {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  margin: 20px auto;
  overflow: hidden;
}

.left > .about > .showMySelf {
  height: 60px;
  text-align: center;
}

.left > .about > .attention {
  flex-grow: 1;
  text-align: center;
}

.left > .about > .attention > .attention-button {
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid white;
  letter-spacing: 3px;
  background: #409eff;
  color: white;
  cursor: pointer;
  outline: none;
}

.left > .about > .platform {
  text-align: center;
  margin: 10px 0;
}

.left > .about > .platform > i {
  font-size: 25px;
  margin: 0 7px;
  cursor: pointer;
}

/**分类区域css */
.left > .category {
  margin-top: 20px;
  min-height: 180px;
  background: white;
  box-shadow: 0 0 1px #9c9d9e;
  padding: 10px;
}

.left > .category ul {
  list-style: none;
}

.left > .category > ul > li {
  padding: 5px;
}

li span {
  cursor: pointer;
}
</style>
