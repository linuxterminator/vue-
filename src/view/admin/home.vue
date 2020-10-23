<template>
  <div class="admin">
    <div class="admin-info">
      <div class="admin-info-head">
        <span style="font-size:1.5rem">下午好</span>
      </div>
      <div class="admin-info-body">
        <div class="admin-info-body-logo">
            <Logo logourl="https://qingshanblog.oss-cn-hangzhou.aliyuncs.com/45588935.jpeg"/>
        </div>
        <div class="admin-info-body-hello">
          <span>祝你开心每一天</span>
        </div>
        <div class="admin-info-body-list">
          <span v-for="(item,index) in list" :key="index" class="admin-info-body-item">
            <span class="item">{{item.name}}</span>
            <span class="item">{{item.data}}</span>
          </span>
        </div>
      </div>
    </div>
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
import pieChart from "@/components/echarts/pieChart";
import barChart from "@/components/echarts/barChart"
import { api } from "@/api/http";
import Logo from "@/components/Logo";
export default {
  data() {
    return {
      list:[
        {name:"文章数",data:""},
        {name:"友链数",data:0},
        {name:"标签数",data:""},
        {name:"留言数",data:0},
      ]
    };
  },
  components:{
    pieChart,
    Logo,
    barChart
  },
  methods:{
    getArticleNumber(){
        api.get("article").then((res)=>{this.list[0].data=res.data.length})
    },
    getTagNumber(){
        api.get("tag").then((res)=>{this.list[2].data=res.data.length})
    },
  },
  created(){
    this.getArticleNumber();
    this.getTagNumber();
  }
};
</script>

<style>
.admin{
  margin:10px;
}

.admin-info{
  height:200px;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
  margin-bottom:20px;
  padding:10px;
  display:flex;
  flex-direction: column;
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