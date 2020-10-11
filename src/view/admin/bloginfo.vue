<template>
  <div class="bloginfo">
    <!--输入框-->
    <div>
      <inputPrimary :inputList="inputList" />
    </div>
    <!--文本域-->
    <div>
      <textareaPrimary :textareaList="textareaList" />
    </div>
    {{ bloginfo }}
  </div>
</template>

<script>
import inputPrimary from "@/components/inputPrimary";
import textareaPrimary from "@/components/textareaPrimary.vue";
export default {
  components: {
    inputPrimary,
    textareaPrimary,
  },
  data() {
    return {
      bloginfo: {
        favicon: "",
        logo: "",
        announcement: "",
        about: "",
      },
      inputList: [
        { placeholder: "博客favicon", name: "博客favicon地址:", data: "" },
        { placeholder: "博客logo", name: "博客logo地址:", data: "" },
      ],
      textareaList: [
        { placeholder: "博客公告", name: "博客公告:", data: "" },
        { placeholder: "博客介绍", name: "博客介绍:", data: "" },
      ],
    };
  },
  computed: {
    returnFavicon() {
      return this.inputList[0].data;
    },
    returnLogo() {
      return this.inputList[1].data;
    },
    returnAnnouncement() {
      return this.textareaList[0].data;
    },
    returnAbout() {
      return this.textareaList[1].data;
    },
  },
  watch: {
    returnFavicon(value) {
      this.bloginfo.favicon = value;
    },
    returnLogo(value) {
      this.bloginfo.logo = value;
    },
    returnAnnouncement(value) {
      this.bloginfo.announcement = value;
    },
    returnAbout(value) {
      this.bloginfo.about = value;
    },
  },
};
</script>

<style>
</style>