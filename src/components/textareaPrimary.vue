<template>
  <div class="textarea-container">
      <div class="textarea-name">
        <span>{{ inputData.name }}</span>
      </div>
      <div>
        <textarea
          type="text"
          class="input-primary"
          v-model="inputData.data"
          :placeholder="inputData.placeholder"
        />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["inputData"],
};
</script>

<style>
.textarea-container {
  overflow: hidden;
  margin: 10px;
}

.textarea-name {
  margin: 5px 0;
}

.textarea-container textarea {
  width: 400px;
  height: 100px;
}
</style>