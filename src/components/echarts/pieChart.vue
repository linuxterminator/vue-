<template>
  <div class="pie-container">
      <div id="pieChart" style="width:350px;height:310px"></div>
  </div>
</template>

<script>
import "../../../node_modules/echarts/theme/azul"
import echarts from "echarts";
import {api} from "@/api/http"
export default {
    data(){
        return{
            //所有的标签
            tagNameList:[],
            //标签下文章数量的统计
            tagNumber:[]
        }
    },
    methods:{
        setPieCharts(){
            var myChart = echarts.init(document.getElementById('pieChart'),"azul");
            let option = {
                legend: {
                    data:this.tagNameList
                },
                title:{
                    subtext:"标签信息",
                    //title距离左边和底部的距离
                    left:"center",
                    bottom:"10px"
                },
                series: [{
                    name: '销量',
                    type: 'pie',
                    data: this.tagNumber,
                    //图表大小
                    radius:'47%',
                }]
            };
            myChart.setOption(option);
        },
        //获取所有的标签
        getTag(){
            api.get("tag").then((res)=>{
                let tagName = [];
                for(let item in res.data){
                    tagName.push(res.data[item].tagName);
                    this.tagNameList = tagName
                }
                //再根据所有的标签统计标签下文章的数量
                this.getTagNumber()
            })
        },
        //统计标签下文章
        getTagNumber(){
            for(let item in this.tagNameList){
                let tagName = this.tagNameList[item]
                api.get("tag/"+tagName).then((res)=>{
                    let temObject = {name:tagName,value:res.data.length}
                    this.tagNumber.push(temObject)
                    //最后根据获取数据之后在显示图表
                this.setPieCharts()
                })
            }
        }
    },
    mounted(){
        this.getTag();
    },
}
</script>

<style>

#pieChart{
    background-color: rgba(255, 255, 255, 0.85);
}
</style>