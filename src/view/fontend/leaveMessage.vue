<template>
  <div class="leaveMessage container">
      <div v-for="(item,index) in leaveMessageList" :key="index" class="root-message">
          <div class="root-message-head">
              <span class="message-user-name">{{item.name}}</span>
              <span class="message-date">{{item.leaveDate}}</span>
          </div>
          <div class="root-message-body">
              <p class="content">{{item.message}}<span class="add-reply" @click="addReply()">回复</span></p>
          </div>
          <!--这里dom也不渲染，似乎是在等待数据，但是又无法获得返回值？-->
            <div v-for="(sub,index) in item.subMessage" :key="index" class="sub-message">
                <div class="sub-message-head">
                    <span class="message-user-name">{{sub.name}}</span>
                    <span class="message-date">{{sub.leaveDate}}  </span>
                </div>
                <div class="sub-message-body">
                    <p class="content"><span class="sub-reply">@{{sub.leaveToName}}</span>:{{sub.message}}<span class="add-reply" @click="addReply()">回复</span></p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { api } from "@/api/http.js";
export default {
    data(){
        return{
            leaveMessageList:[],
        }
    },
    methods:{
        getAllLeaveMessage(){
            api.get("leaveMessage").then((res)=>{
                this.leaveMessageList = res.data
                console.log(res.data)
            })
        },
        addReply(id){
            console.log(id)
        }
        //vue中把一个方法标记为异步会导致返回promise？，不管返回值类型吗

        // async getAllSubMessage(id){
        //     let term;
        //     await api.get("leaveMessage/"+id).then((res)=>{
        //         if(res.data.length>0){
        //             console.log(res)
        //             this.allSubMessage = res.data
        //             term = true
        //         }
        //         else{
        //             term = false
        //         }
        //     })
        //     return term;
        // }
    },
    mounted(){
        this.getAllLeaveMessage();
    }
}
</script>

<style>
.leaveMessage{
    padding:20px;
}

.root-message,.sub-message{
    margin:13px 0;
    padding:10px;
    border-top:1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    display:flex;
    flex-direction: column;
}

.root-message-head,.sub-message-head{
    position: relative;
    height:50px;
    flex-shrink: 0;
    line-height: 50px;
}

.root-message-body,.sub-message-body{
    /* flex-grow: 1;
    flex-shrink: 0; */
    padding-left:10px;
}

.root-message-body p{
    margin:0
}

.sub-message-body p{
    margin:0
}

.message-date{
    position:absolute;
    right:20px;
}

.sub-message{
    margin-left:40px;
}

.sub-reply{
    color:#3273dc
}

.content{
    position: relative;
}

.add-reply{
    position:absolute;
    right:10px;
    color:#F56C6C;
    cursor: pointer;
}
</style>