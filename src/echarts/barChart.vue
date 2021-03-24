<template>
      <div id="barChart"></div>
</template>

<script> 
import * as echarts from "echarts"
import api from "@/api/http"
//echarts的主题并不支持es6的导入方式，里面有amd，umd等等，
//同时，官方文档说可以在html中通过script引入，但在vue中不建议，也不可以
// require("./dak") 名字"wonderland"
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
        setBarCharts(){
            var myChart = echarts.init(document.getElementById('barChart'));
            let option = {
                //鼠标悬浮显示信息
                tooltip:{
                    //悬浮添加阴影
                    trigger: 'axis',
                    axisPointer: {            
                        type: 'shadow'       
                    }
                },
                title:{
                    subtext:"文章信息",
                },
                //x轴
                xAxis: [
                    //类型，分类轴
                    {
                        type: 'category',
                        data: this.tagNameList,
                    }
                        ],
                //y轴
                yAxis: [
                    //类型，数值轴
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        //name好像没什么作用
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '40%',
                        data: this.tagNumber
                    }
                ]
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
                this.setBarCharts()
                })
            }
        }
    },
    mounted:function(){
        this.getTag();
    },
}
</script>

<style>

#barChart{
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
    width:100%;
    height:100%;
}

</style>