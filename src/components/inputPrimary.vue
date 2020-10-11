<template>
  <div class="input-container">
    <div v-for="(item, index) in inputList" :key="index" class="input-div">
      <div class="input-name">
        <span>{{ item.name }}</span>
      </div>
      <div>
        <input
          type="text"
          class="input-primary"
          :placeholder="item.placeholder"
          v-model="inputList[index].data"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["inputList"],
};
</script>

<style>
.input-container {
  overflow: hidden;
}
.input-div {
  margin: 10px;
}

.input-name {
  margin: 5px 0;
}
</style>