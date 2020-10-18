<template>
  <div class="bloginfo">
    <div>
      <inputPrimary :inputData="blogTitle" />
    </div>
    <div>
      <inputPrimary :inputData="blogFavicon" />
    </div>
    <div>
      <inputPrimary :inputData="blogLogo" />
    </div>
    <div>
      <textareaPrimary :inputData="blogAnnouncement" />
    </div>
    <div>
      <textareaPrimary :inputData="blogMessage" />
    </div>
    <div>
      <button class="main-button" @click="submitBlogInfo">提交</button>
    </div>
  </div>
</template>

<script>
import inputPrimary from "@/components/inputPrimary";
import textareaPrimary from "@/components/textareaPrimary.vue";
import { api } from "@/api/http";
export default {
  components: {
    inputPrimary,
    textareaPrimary,
  },
  methods:{
    submitBlogInfo(){
      if(this.bloginfo.favicon==""){
        alert("请输入favicon");
      }else if(this.bloginfo.logo==""){
        alert("请输入logo");
      }
      else if(this.bloginfo.announcement==""){
        alert("请输入announcement");
      }
      else if(this.bloginfo.about==""){
        alert("请输入about");
      }
      else{
        api.post("bloginfo",this.bloginfo).then((res)=>{
        console.log(res.data)
      })
      }
    }
  },
  data() {
    return {
      bloginfo: {
        blogFavicon: "",
        blogLogo: "",
        blogAnnouncement: "",
        blogTitle: "",
        blogMessage:""
      },
      blogTitle:{ placeholder: "博客title", name: "博客title地址:", data: "" },
      blogFavicon:{ placeholder: "博客favicon", name: "博客favicon地址:", data: "" },
      blogLogo:{placeholder: "博客logo", name: "博客logo地址:", data: "" },
      blogAnnouncement:{ placeholder: "博客公告", name: "博客公告:", data: "" },
      blogMessage:{ placeholder: "博客介绍", name: "博客介绍:", data: "" },
    };
  },
  computed: {
    returnBlogTitle(){
      return this.blogTitle.data;
    },
    returnBlogFavicon(){
      return this.blogFavicon.data
    },
    returnBlogLogo(){
      return this.blogLogo.data
    },
    returnAnnouncement() {
      return this.blogAnnouncement.data;
    },
    returnAbout() {
      return this.blogMessage.data;
    },
  },
  watch: {
    returnBlogTitle(value){
      this.bloginfo.blogTitle = value;
    },
    returnBlogFavicon(value){
      this.bloginfo.blogFavicon = value;
    },
    returnBlogLogo(value){
      this.bloginfo.blogLogo = value;
    },
    returnAnnouncement(value) {
      this.bloginfo.blogAnnouncement = value;
    },
    returnAbout(value) {
      this.bloginfo.blogMessage = value;
    },
  },
};
</script>

<style>
</style>