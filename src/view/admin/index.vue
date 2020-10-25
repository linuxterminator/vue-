<template>
  <div class="manage">
    <div class="manage-left">
      <div class="manage-left-logo">
        <span>hello</span>
      </div>
      <ul>
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path" tag="div" class="not-active">
            <i :class="item.icon"></i>
            <span class="nav-item">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="manage-right">
      <div class="manage-right-head">
        <div class="login-info-name">
          <span>胡青山</span>
        </div>
      </div>
      <div class="manage-right-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { path: "/huqingshan", name: "首页",icon:"iconfont iconpanel"},
        { path: "/articleTable", name: "文章列表",icon:"iconfont iconliebiao"},
        { path: "/write", name: "markdown",icon:"iconfont iconfinancial_markdown"},
        { path: "/messageManage", name: "留言",icon:"iconfont iconicon-test2"},
        { path: "/bloginfo", name: "设置",icon:"iconfont iconshezhi"},
      ],
    };
  },
};
</script>

<style>
.manage {
  display: flex;
  height: 100%;
}

.manage-left-logo{
  height:70px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.manage-left-logo span{
  font-size:2rem
}

.manage-left {
  width: 15%;
  flex-shrink: 0;
  color: white;
  background: #001529;
  text-align: left;
}

.manage-left li span {
  color: white;
  font-size: 1rem;
}

.manage-left ul,li{
  padding:0
}

.manage-left li{
  height:50px;
  line-height: 50px;
  cursor: pointer;
}

.manage-right-head {
  height: 55px;
  line-height: 55px;
  padding: 0 15px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  flex-shrink: 0;
}

.manage-right {
  background: #f1f2f5;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.manage-right-body {
  margin: 10px;
  height: 100%;
  flex-grow: 1;
  overflow: auto;
}

/**由于如果激活添加左边框的话，会导致元素进行偏移，所有解决方案是一直添加一个透明边框 */
.not-active{
  border-left:1px solid transparent;
  border-width: 3px;
  padding-left: 15px;
}

.manage-left .router-link-exact-active{
  border-left: 1px solid #409EFF;
  border-width: 3px;
  background-color: #010c16;
}

.nav-item{
  position: relative;
  left:10px;
}

.login-info-name{
  position:absolute;
  right:60px;
}

.login-info-name span{
  cursor: pointer;
}

</style>