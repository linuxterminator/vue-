<template>
  <div class="articleTable">
      <articleTable :tableData="articleData" :tableTitle="tableTitle">
          <template v-slot="slotData">
                <button @click="test(slotData)" class="editorButton">编辑</button>
                <button class="deleteButton" @click="deleteArticle(slotData)">删除</button>
          </template>
      </articleTable>
  </div>
</template>

<script>
import articleTable from "@/components/articleTable"
import { api } from "@/api/http";
export default {
    data(){
        return{
            articleData:"",
            tableTitle:["ID","封面","标题","内容","描述","时间","作者","标签","操作"]
        }
    },
    components:{
        articleTable
    },
    methods:{
        getArticle(){
            api.get("article").then((res)=>{
                this.articleData = res.data.reverse()
            })
        },
        test(value){
            console.log(value.data)
        },
        deleteArticle(value){
            api.delete("article/"+value.data.id).then((res)=>{
                console.log(res)
                this.getArticle()
            })
        }
    },
    created(){
        this.getArticle()
    }
}
</script>

<style>

</style>