<template>
  <div class="aboutme">
    <div class="container showSelf">
      <Logo :logourl="blogLogo" />
      <div>安徽合肥市</div>
      <div>标签</div>
      <div></div>
    </div>
    <div class="container showBlogMessage">
      <ShowPage :Article="blogMessage" />
    </div>
  </div>
</template>
<script>
//关于我
import ShowPage from "@/components/ShowPage";
import Logo from "@/components/Logo";
import { markdownit } from "@/markdownit";
import { api } from "@/api/http";
export default {
  data() {
    return {
      blogMessage: "",
      blogLogo: "",
    };
  },
  components: {
    ShowPage,
    Logo,
  },
  methods: {
    getBlogInfo() {
      api
        .get("/bloginfo")
        .then((res) => {
          console.log(res.data);
          this.blogLogo = res.data.blogLogo;
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
  height: 100%;
  display: flex;
  overflow: hidden;
}

.showSelf {
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 25px 10px 25px 25px;
  padding: 10px;
}

.showBlogMessage {
  margin: 25px 25px 25px 10px;
}
</style>