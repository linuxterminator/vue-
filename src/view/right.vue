<template>
  <div class="right">
    <div class="right-all announcement container">
      <span>公告</span>
      <p>{{ announcement }}</p>
    </div>
    <div class="right-all newArticle container">
      <span>最新文章</span>
      <ul>
        <li
          v-for="(item, index) in newArticle"
          :key="index"
          @click="toPage(item.id)"
        >
          <p
            class="text-blue"
            :class="{ textActive: $route.params.articleId == item.id }"
          >
            {{ item.introduction | articleLength }}
          </p>
        </li>
      </ul>
    </div>
    <div class="right-all articleTag container">
      <div>标签</div>
      <ul>
        <li
          v-for="(item, index) in articleTag"
          :key="index"
          class="tag-item text-blue"
        >
          <!--标签激活样式,根据路由参数是否和标签id相同-->
          <span
            @click="from_tag_to_pagelist(item.tagId)"
            :class="{
              textActive: $route.params.tagId == item.tagId,
            }"
          >
            {{ item.tagName }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { api } from "@/http";
export default {
  props: {
    announcement: String,
  },
  data() {
    return {
      newArticle: [],
      articleTag: [],
    };
  },
  methods: {
    //通过最新文章跳转
    toPage(id) {
      this.$router.push("/page/" + id);
    },
    //从标签寻找标签下的文章
    from_tag_to_pagelist(id) {
      this.$router.push("/tagArticle/" + id);
    },
    //获取最新文章
    getNewArticle() {
      api
        .get("article")
        .then((res) => {
          this.newArticle = res.data.reverse().slice(0, 6);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取标签
    getTag() {
      api
        .get("tag")
        .then((res) => {
          this.articleTag = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  filters: {
    articleLength: (value) => {
      if (value.length > 15) {
        return value.slice(0, 24) + "...";
      } else {
        return value;
      }
    },
  },
  created() {
    this.getNewArticle();
    this.getTag();
  },
};
</script>

<style>
.right-all {
  padding: 10px;
  overflow: hidden;
}

.right > .announcement {
  height: 120px;
}
.right > .newArticle {
  height: 400px;
  margin: 10px 0;
}

.right > .articleTag {
  min-height: 210px;
}

.right > .newArticle li {
  cursor: pointer;
  margin: 25px 0;
}

.right > .articleTag span {
  padding: 3px;
}

.textActive {
  color: #3273dc;
}

.tag-item {
  padding: 2px;
  cursor: pointer;
}
</style>
