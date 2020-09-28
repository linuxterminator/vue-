<template>
  <div class="aboutme">
    <ShowArticle :Article="blogMessage" />
  </div>
</template>

<script>
//关于我
import ShowArticle from "@/components/ShowArticle";
import { markdownit } from "@/markdownit";
import { api } from "@/http";
export default {
  data() {
    return {
      blogMessage: "",
    };
  },
  components: {
    ShowArticle,
  },
  methods: {
    getBlogInfo() {
      api
        .get("/bloginfo")
        .then((res) => {
          this.blogMessage = markdownit.render(res.data.blogMessage);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  props: ["showSelf"],
  created() {
    this.getBlogInfo();
  },
};
</script>

<style>
.aboutme {
  height: 600px;
  margin: 20px;
}
</style>