<template>
  <div class="write-container">
    <div class="input-container">
      <label for="">标题</label>
      <input type="text" placeholder="请输入文章标题" v-model="title">
      <div class="input-error-container" v-if="validateStatus === 'error'">
        请输入正确内容
      </div>
    </div>
    <div class="input-container">
      <label for="">分类</label>
      <input type="text" placeholder="请选择文章分类" v-model="category">
      <div class="input-error-container" v-if="validateStatus === 'error'">
        请输入正确内容
      </div>
    </div>
    <div class="input-container">
      <label for="">标签</label>
      <input type="text" placeholder="请选择文章标签" v-model="tag">
      <div class="input-error-container" v-if="validateStatus === 'error'">
        请输入正确内容
      </div>
    </div>
    <div class="input-container">
      <label for="">文章</label>
      <div id="editor">
      </div>
    </div>
    <div>
      <button @click="submit">发布文章</button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data:function(){
    return{
      validateStatus:"",
      title:"",
      tag:"",
      category:"",
      article:"",
    }
  },
  methods:{
    submit:function(){
    },
    editor:function(){
      const editor = new E("#editor");
      editor.create();
    },
    },
  mounted:function(){
    this.editor();
  }
}
</script>

<style src="@/style/web/admin/write.scss" scoped lang="scss"></style>