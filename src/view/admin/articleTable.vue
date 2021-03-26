<template>
  <div class="articleList">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createdate"
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="address"
      label="更新时间">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import api from "@/api/http"
export default {
  data:function(){
    return{
      tableData:[]
    }
  },
  methods:{
    getArticle:function(){
      api.get("/article").then((res)=>{
        this.tableData = res.data
        console.log(res.data)
      })
    }
  },
  created:function(){
    this.getArticle()
  }
}
</script>

<style src="@/style/web/admin/articleList.scss" scoped lang="scss"></style>