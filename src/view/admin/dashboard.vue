<template>
  <div class="admin">
    <header>
      <div class="admin-subject-1">
        <div>
          已创建文章
        </div>
        <div class="admin-subject-show">
          <button>添加新文章</button>
        </div>
      </div>
      <div class="admin-subject-1">
        <i class="el-icon-message"></i>
        <div>
          <span>留言</span>
          <span class="admin-subject-show">{{message}}</span>
        </div>
      </div>
      <div class="admin-subject-1">
        <i class="el-icon-chat-dot-square"></i>
        <div>
          <span>文章评论</span>
          <span class="admin-subject-show">{{comment}}</span>
        </div>
      </div>
      <div class="admin-subject-1">
        <i class="el-icon-s-data"></i>
        <div>
          <span>访问量</span>
          <span class="admin-subject-show">{{view}}</span>
        </div>
      </div>
    </header>
    <div class="chart-all">
      <div class="admin-chart-pie">
        <pieChart/>
      </div>
      <div class="admin-chart-bar">
        <barChart/>
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from "@/echarts/pieChart";
import barChart from "@/echarts/barChart"

export default {
  data() {
    return {
      comment:200,
      message:100,
      view:1000
    };
  },
  components:{
    pieChart,
    barChart
  },
};
</script>

<style src="@/style/web/admin/index.scss" lang="scss" scoped></style>