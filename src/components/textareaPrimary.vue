<template>
  <div class="textarea-container">
    <div
      v-for="(item, index) in textareaList"
      :key="index"
      class="textarea-div"
    >
      <div class="textarea-name">
        <span>{{ item.name }}</span>
      </div>
      <div>
        <textarea
          type="text"
          class="input-primary"
          v-model="textareaList[index].data"
          :placeholder="item.placeholder"
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
  props: ["textareaList"],
};
</script>

<style>
.textarea-container {
  overflow: hidden;
}

.textarea-name {
  margin: 5px 0;
}

.textarea-container textarea {
  width: 400px;
  height: 100px;
}

.textarea-div {
  margin: 10px;
}
</style>