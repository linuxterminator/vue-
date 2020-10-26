<template>
    <div class="leave-message-container">

        <div class="leave-message-title">
            <vue-typed-js :strings="['留言板']" :typeSpeed="150">
                <span class="typing"></span>
            </vue-typed-js>
        </div>

        <div class="leave-message-body container">
            <div class="message-input-head">
                <input-primary :inputData="name" :width="220" :height="40"/>
                <input-primary :inputData="email" :width="220" :height="40"/>
                <input-primary :inputData="test" :width="220" :height="40"/>
            </div>
            <div class="message-input-body">
                <textarea-primary :inputData="message" :width="710" :height="270"/>
            </div>
            <div class="message-button-position">
                <button class="leave-message-button" @click="sendMessage()">提交留言</button>
            </div>
        </div>

        <div class="leave-message container">
            <div v-for="(item,index) in leaveMessageList" :key="index" class="root-message">
                <div class="root-message-head">
                    <span class="message-user-name">{{item.name}}</span>
                    <span class="message-date">{{item.leaveDate | dateFormat}}</span>
                </div>
                <div class="root-message-body">
                    <p class="content">{{item.message}}<span class="add-reply" @click="addReply()">回复</span></p>
                </div>
                <div v-for="(sub,index) in item.subMessage" :key="index" class="sub-message">
                    <div class="sub-message-head">
                        <span class="message-user-name">{{sub.name}}</span>
                        <span class="message-date">{{sub.leaveDate | dateFormat}}  </span>
                    </div>
                    <div class="sub-message-body">
                        <p class="content"><span class="sub-reply">@{{sub.leaveToName}}</span>:{{sub.message}}<span class="add-reply" @click="addReply()">回复</span></p>
                    </div>
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
            name:{
                name:"名称",
                placeholder:"名称",
                data:""
            },
            email:{
                name:"邮箱",
                placeholder:"邮箱",
                data:""
            },
            test:{
                name:"头像网址",
                placeholder:"头像网址",
                data:""
            },
            message:{
                name:"留言",
                placeholder:"留言",
                data:""
            },
            message_to_mysql:{
                message:"",
                name:"",
                email:"",
                rootId:0,
                messageToId:0,
                leaveToName:""
            }   
        }
    },
    filters:{
        dateFormat(value){
            return value.slice(0,12)
        }
    },
    methods:{
        getAllLeaveMessage(){
            api.get("leaveMessage").then((res)=>{
                this.leaveMessageList = res.data
            })
        },
        addReply(id){
            console.log(id)
        },
        sendMessage(){
            this.message_to_mysql.email = this.email.data
            this.message_to_mysql.name = this.name.data
            this.message_to_mysql.message = this.message.data
            api.post("leaveMessage",this.message_to_mysql).then((res)=>{
                if(res.status == 200){
                    alert("留言成功")
                }
                else{
                    alert("留言失败")
                }
            })
        }
    },
    mounted(){
        this.getAllLeaveMessage();
    }
}
</script>

<style>
.leave-message-container{
    padding:20px;
    min-height: 540px;
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.leave-message-title{
  display:flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width:100%;
}

.leave-message-body{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:50px;
    padding-bottom:30px;
    padding-top:10px;
    width:1000px;
    padding:20px;
}

.leave-message{
    width:1000px;
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


.leave-message-title span{
  font-size: 2.1rem;
  font-weight: 900;
}

.leave-message-body .message-input-head{
    display:flex;
}

.leave-message-button{
    border:1px solid #3273dc;
    height:40px;
    background-color: white;
    border-radius: 3px;
    outline:none;
    color:#3273dc;
    cursor: pointer;
}

.leave-message-button:hover{
    color:white;
    background-color: #3273dc;
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.1);
}

.message-button-position{
    display:flex;
    width:100%;
    justify-content:flex-end;
}

@media screen and (max-width:375px ){
    .leave-message-body{
        width:250px
    }
    .leave-message{
        width:250px
    }
    html{
        font-size:1px;
    }
}
</style>