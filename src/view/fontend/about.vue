<template>
  <div class="aboutme">
    <div class="about-title">
      <vue-typed-js :strings="['关于我']" :typeSpeed="150">
        <span class="typing"></span>
      </vue-typed-js>
    </div>
    <div class="container showBlogMessage">
      <div class="blog-logo">
        <Logo :logourl="blogLogo" />
      </div>
      <div class="logo-info">
        <ShowPage :Article="blogMessage" />
      </div>
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
  overflow: hidden;
}

.showBlogMessage {
  margin: 10px 170px 10px 170px;
  padding:20px 30px;
  min-height: 540px;
}

.blog-logo{
  display:flex;
  align-items: center;
  justify-content: center;
}

.about-title{
  display:flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}

.about-title span{
  font-size: 2.1rem;
  font-weight: 900;
}
</style>