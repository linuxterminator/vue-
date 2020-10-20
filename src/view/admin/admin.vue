<template>
  <div class="manage">
    <div class="manage-left">
      <ul>
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path"
            ><span>{{ item.name }}</span></router-link
          >
        </li>
      </ul>
    </div>

    <div class="manage-right">
      <div class="manage-right-head">manage</div>
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
        { path: "/huqingshan", name: "首页" },
        { path: "/articleTable", name: "文章列表" },
        { path: "/write", name: "markdown" },
        { path: "/bloginfo", name: "设置" },
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

.manage-left {
  width: 15%;
  padding: 10px;
  flex-shrink: 0;
  color: white;
  background: #001529;
  text-align: left;
}

.manage-left span {
  color: white;
}

.manage-right-head {
  height: 55px;
  line-height: 55px;
  padding: 0 15px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
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
</style>