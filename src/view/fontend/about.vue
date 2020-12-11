<template>
  <div class="aboutme">
    <div class="container showBlogMessage">
        <div class="about-title">
        <vue-typed-js :strings="['关于我']" :typeSpeed="150">
          <span class="typing"></span>
        </vue-typed-js>
        </div>
        </div>
  </div>
</template>
<script>
//关于我
import { markdownit } from "@/markdownit";
import api from "@/api/http";
export default {
  data() {
    return {
      blogMessage: "",
      blogLogo: "",
    };
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

<style lang="scss">
@import "../../css/style.scss";
.aboutme {
  width:100%;
  align-items: center;
  overflow:auto;
  @include container;
}

.showBlogMessage {
  padding:20px;
  /* min-height: 540px; */
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