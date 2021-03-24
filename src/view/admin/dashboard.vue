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
        <div>留言</div>
        <div class="admin-subject-show">{{message}}</div>
      </div>
      <div class="admin-subject-1">
        <div>文章评论</div>
        <div class="admin-subject-show">{{comment}}</div>
      </div>
      <div class="admin-subject-1">
        <div>访问量</div>
        <div class="admin-subject-show">{{view}}</div>
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

<style src="@/style/web/admin/home.scss" lang="scss" scoped></style>