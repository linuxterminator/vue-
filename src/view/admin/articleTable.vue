<template>
  <div class="articleList">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="address"
      label="ID">
    </el-table-column>
    <el-table-column
      prop="name"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="address"
      label="更新时间">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      tableData:[]
    }
  }
}
</script>

<style src="@/style/web/admin/articleList.scss" scoped lang="scss"></style>