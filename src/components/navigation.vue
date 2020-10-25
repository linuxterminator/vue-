<template>
  <div class="navigation">
    <nav>
      <router-link
        :to="item.path"
        v-for="(item, index) in navList"
        :key="index"
      >
        <i :class="item.icon"></i>
        <span class="text-blue">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {};
  },
};
</script>

<style>
.navigation {
  line-height: 60px;
  padding: 0 70px;
}

.navigation span {
  font-size: 1rem;
  padding: 0 10px;
}

.navigation a {
  text-decoration: none;
  padding: 0 12px;
  color:#3273dc;
}

.navigation a:hover{
  color:#26344d
}

.navigation span:hover{
  color:#26344d
}

@media screen and (max-width: 375px){
  .navigation{
    padding:5px
  }
  .navigation a{
    padding:5px
  }
}
</style>
