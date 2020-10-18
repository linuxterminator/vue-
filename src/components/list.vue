<template>
  <!--列表组件-->
  <div class="list">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <span @click="toNext(item[listKeyName])" class="textActive">{{
          item[listKeyName]
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //三个props，一个是要传进来的列表，一个是键的名字(不同对象数组的键是不同的,listKeyName是键的值，根据名字来获取数据)，还有要去的页面的url
  //itemName是因为传入对象的键可能会不同而需要调用的父组件传入
  props: ["list", "listKeyName", "path"],
  methods: {
    //页面跳转,要跳转的路由加上名字，没有传入path则代表不需要跳转
    toNext(name) {
      if (this.path == undefined) {
        return;
      } else {
        this.$router.push(this.path + name);
      }
    },
  },
  filters: {
    addEllipsis(value) {
      if (value.length > 20) {
        return value.slice(0, 19) + "...";
      } else {
        return value;
      }
    },
  },
};
</script>

<style>
.textActive:hover {
  color: #3273dc;
}

.list ul {
  padding-left: 7%;
}
</style>