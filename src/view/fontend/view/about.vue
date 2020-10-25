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
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:20px;
  overflow:auto
}

.showBlogMessage {
  width:1000px;
  padding:20px;
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
  width:100%;
}

.about-title span{
  font-size: 2.1rem;
  font-weight: 900;
}

@media screen and (max-width: 375px){
  .showBlogMessage{
    width:250px;
  }
}
</style>