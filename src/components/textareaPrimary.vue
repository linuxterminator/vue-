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
          :style="{width:width+'px',height:height+'px'}"
        />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    inputData:Object,
    width:{
      default:400
    },
    height:{
      default:100
    }
  },
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

@media screen and (max-width: 375px){
  .textarea-container textarea{
    width:220px !important;
    height:80px !important;
  }
}
</style>