<template>
  <div class="login">
      <div class="login-form">
          <div class="form-title">
              <div 
              @click="to_login" 
              :class="{
                  show_login_or_register:is_login
                  }">账号登录</div>
              <div 
              @click="to_register" 
              :class="{
                  show_login_or_register:is_register
                  }">账号注册</div>
          </div>
          <div class="input-div">
                <input type="text" class="username" placeholder="用户名">
          </div>
          <div class="input-div">
                <input type="text" class="password" placeholder="密码">
          </div>
          <div class="register-div">
              <button class="submit">登录/注册</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            is_login:true,
            is_register:false,
        }
    },
    methods:{
        to_login:function(){
            this.is_login=true;
            this.is_register=false;
        },
        to_register:function(){
            this.is_login=false;
            this.is_register=true;
        }
    }
}
</script>

<style src="@/style/web/login.scss" lang="scss"></style>