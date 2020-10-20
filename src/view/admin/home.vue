<template>
  <div class="admin-home">
    <div class="admin-hello">
      <div class="welcome-div">
        <span style="font-size:1.5rem">下午好</span>
      </div>
      <div class="logo-info">
        <div class="logo-div">
            <Logo logourl="https://qingshanblog.oss-cn-hangzhou.aliyuncs.com/45588935.jpeg"/>
        </div>
        <div class="info-div">
          <span style="font-size:1.5rem;margin:10px;">文章数</span>
          <span style="font-size:1.5rem;margin:10px;">友链数</span>
          <span style="font-size:1.5rem;margin:10px;">标签数</span>
          <span style="font-size:1.5rem;margin:10px;">留言数</span>
        </div>
      </div>
    </div>
    <div>
      <pieChart/>
    </div>
  </div>
</template>

<script>
import pieChart from "@/components/echarts/pieChart"
import Logo from "@/components/Logo";
export default {
  data() {
    return {
      data: 100,
    };
  },
  components:{
    pieChart,
    Logo
  },
  methods:{
  },
  //使用echarts必须先mounted，而不是created
  mounted(){
  }
};
</script>

<style>
.admin-home{
  margin:10px;
}

.admin-hello{
  height:200px;
  background-color: rgba(255, 255, 255, 0.85);
  margin-bottom:20px;
  padding:10px;
  display:flex;
  flex-direction: column;
}

.logo-info{
  display:flex
}

.logo-div{
  width:300px;
}

.info-div{
  flex-grow: 1;
  text-align: right;
  padding-top:75px;
  padding-right:30px;
}
</style>