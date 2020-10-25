<template>
  <div class="input-container">
      <div class="input-name">
        <span>{{ inputData.name }}</span>
      </div>
      <div>
        <input
          type="text"
          class="input-primary"
          :placeholder="inputData.placeholder"
          v-model="inputData.data"
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
  props: {
    inputData:Object,
    width:{
      default:400
    },
    height:{
      default:30
    }
  },
};
</script>

<style>
.input-container {
  overflow: hidden;
  margin: 10px;
}
.input-name {
  margin: 5px 0;
}

@media screen and (max-width: 375px){
  .input-container input{
    width:55px !important;
    height:20px !important;
  }
}
</style>