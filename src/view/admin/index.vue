<template>
  <div class="manage">
      <div class="manage-left">
          <span class="manage-title">hello</span>
          <aside>
              <ul>
                  <li v-for="(item, index) in navList" :key="index">
                    <router-link :to="item.path" class="not-active">
                      <span class="nav-item">{{ item.name }}</span>
                    </router-link>
                  </li>
              </ul>
          </aside>
    </div>

    <div class="manage-right">
        <header></header>

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
        { path: "/huqingshan", name: "首页"},
        { path: "/articleTable", name: "文章列表"},
        { path: "/write", name: "markdown"},
        { path: "/messageManage", name: "留言"},
        { path: "/bloginfo", name: "设置"},
      ],
    };
  },
};
</script>

<style lang="scss">
.manage {
  display: flex;
  height: 100%;
  .manage-left {
      width: 15%;
      flex-shrink: 0;
      color: white;
      background: #001529;
      text-align: left;
      display:flex;
      flex-direction: column;
      .manage-title{
          height:60px;
          color:white;
          display:block;
          text-align: center;
          line-height: 60px;
          font-size: 30px;}
      aside{
        flex-grow: 1;
        li{
          font-size: 14px;
          height:50px;
          cursor: pointer;
          a{
            height:50px;
            width:100%;
            display:block;
            box-sizing: border-box;
            span{
                color:#fff;}
            }
          }
        .router-link-exact-active{
            border-left: 1px solid #409EFF;
            border-width: 3px;
            background-color: #010c16;}
      }
      }
    .manage-right{
        header{
            height: 55px;
            line-height: 55px;
            padding: 0 15px;
            background: #ffffff;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            position: relative;
            flex-shrink: 0;}
    }
}


.manage-left ul,li{
  padding:0
}

.manage-left li{
  line-height: 50px;
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

.nav-item{
  position: relative;
  left:10px;
}

.login-info-name span{
  cursor: pointer;
}

</style>