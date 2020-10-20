<template>
  <div class="table-container">
      <table>
          <thead>
              <tr>
                  <th v-for="(item,index) in tableTitle" :key="index">{{item}}</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="(itemtr,index) in tableData" :key="index">
                <td>{{itemtr.id | omit}}</td>
                <td><img :src="itemtr.img" alt="博客封面" width="40px" height="40px" style="object-fit: cover;"></td>
                <td>{{itemtr.title | omit}}</td>
                <td>{{itemtr.content | omit}}</td>
                <td>{{itemtr.introduction | omit}}</td>
                <td>{{itemtr.createdate | omit}}</td>
                <td>{{itemtr.author | omit}}</td>
                <td>
                    <div class="tagDiv" v-for="(item,index) in itemtr.tagList" :key="index">{{item.tagName}}</div>
                </td>
                <!--编辑修改等等-->
                <td><slot :data="itemtr"></slot></td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    props:["tableData","tableTitle"],
    filters:{
        omit(value){
            if(value.length>10){
                return value.slice(0,12)+"...";
            }else{
                return value;
                }
        }
    }
}
</script>

<style>
    .table-container{
        margin:10px;
    }

    table{
        font-size: 0.1rem;
        border-collapse: collapse;
        background-color: rgba(255, 255, 255, 0.85);
        width:100%;
    }

    td,th,tr{
        background-color: rgba(255, 255, 255, 0.85);
        border:1px solid #ebeef5 !important;
    }

</style>