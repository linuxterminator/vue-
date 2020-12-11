<template>
  <div class="admin">
    <header></header>
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
    return {};
  },
  components:{
    pieChart,
    barChart
  },
};
</script>

<style lang="scss">
@import "../../css/style.scss";
.admin{
  padding:10px;
  header{
    min-height: 150px;
    margin-bottom: 17px;
    @include container}
}

.admin-info-head{
  height:40px;
  flex-shrink: 0;
}

.admin-info-body{
  display:flex;
  flex-grow: 1;
  flex-shrink: 0;
}

.admin-info-body-logo{
  display:flex;
  justify-content: center;
  align-items: center;
  width:200px;
}

.admin-info-body-hello{
  width:230px;
  padding-top:40px;
  font-size:1.5rem;
} 

.admin-info-body-list{
  flex-grow: 1;
  padding:60px 10px 10px 10px;
  display:flex;
  justify-content: flex-end;
  text-align: center;
}

.admin-info-body-item{
  font-size:1.5rem;
  margin:10px;
  display:flex;
  flex-direction: column;
}

.item{
  margin:5px 0;
}

.chart-all{
  display:flex;
}

.admin-chart-pie{
  width:350px;
  height:310px;
  margin-right:20px;
}

.admin-chart-bar{
  flex-grow: 1;
}
</style>