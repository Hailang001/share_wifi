<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">登录</span>
          <i class="el-icon-minus" style="font-size: 30px;color: white;transform:rotate(90deg)"></i>
          <span style="color: white">注册</span>
        </div>
      </div>
      <div id="headicon">
        <i class="mf mf-person"></i>
      </div>
      <div class="content">
        <div class="name">
          <i class="mf mf-oneman"></i>
          <span>账户</span>
          <i class="el-icon-minus" style="font-size: 16px;transform:rotate(90deg)"></i>
          <input type="text" placeholder="请输入账户名" id="name">
        </div>
        <div class="password">
          <i class="mf mf-mima"></i>
          <span>密码</span>
          <i class="el-icon-minus" style="font-size: 16px;transform:rotate(90deg)"></i>
          <input type="text" placeholder="请输入密码" id="password">
        </div>
        <!--<div class="affirm">
          <i class="mf mf-mima"></i>
          <span>确认</span>
          <i class="el-icon-minus" style="font-size: 16px;transform:rotate(90deg)"></i>
          <input type="text" placeholder="请再次输入密码确认">
        </div>-->
      </div>
      <div class="register">
        <div class="login_" @click="login">
          <span>登 录</span>
        </div>
        <div class="text_btn">
          <span class="left"><i class="mf mf-mima"></i>记住密码</span>
          <span class="right">忘记密码</span>
        </div>
      </div>
      <div class="login">
        <span class="name">还未拥有账号请</span>
        <el-button @click="register">注 册</el-button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        name:'',
        password:''
      }
    },
    methods: {
      register () {
        this.$router.push({
          path: '/Register'
        })
      },
      login () {
        let name = document.getElementById('name').value
        let password = document.getElementById('password').value
        if (name === 'admin' &&  password === 'admin123') {
          this.$router.push({
            path: '/Radar'
          })
        }else {
          this.$notify({
            title: '警告',
            message: '用户名或者密码错误',
            type: 'warning'
          });
        }
      }
    }
  }
</script>
<style lang="less" scoped="scoped">
  #paper{
    width: 1080px;
    height: 1920px;
    box-sizing: border-box;
    margin: 0 auto;
    #header{
      width: 1080px;
      height: 100px;
      text-align: center;
      padding-top: 30px;
      box-sizing: border-box;
      background-color: #AED931;
      #go_back{
        float: left;
        margin-left: 20px;
        margin-top: 5px;
      }
      .title_text{
        margin-right: 47px;
        font-size: 30px;
        /*padding-top: 30px;*/
      }
    }
    #headicon{
      width: 100%;
      height: 900px;
      line-height: 900px;
      font-size: 600px;
      color: #EBF7F4;
    }
    .content{
      .name{
        margin: 0 auto;
        width: 400px;
        height: 50px;
        line-height: 50px;
        color: #ababab;
        border-bottom:1px solid #f6f6f6;
        input{
          width: 300px;
          border-color: transparent;
        }
      }
      .password{
        margin: 0 auto;
        width: 400px;
        height: 50px;
        line-height: 50px;
        color: #ababab;
        border-bottom:1px solid #f6f6f6;
        input{
          width: 300px;
          border-color: transparent;
        }
      }
      .affirm{
        margin: 0 auto;
        width: 400px;
        height: 50px;
        line-height: 50px;
        color: #ababab;
        border-bottom:1px solid #f6f6f6;
        input{
          width: 300px;
          border-color: transparent;
        }
      }
    }
    .register{
      .login_{
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin-top: 200px;
        background-color: #AED931;
        color: white;
      }
      .text_btn{
        margin-top: 50px;
        color: #ababab;
        .left{
          margin-right: 100px;
          i{
            margin-right: 10px;
          }
        }
      }

    }
    .login{
      color: #ababab;
      margin-top: 150px;
      margin-left: 800px;
      .name{
        margin-right: 30px;
      }
      .el-button{
        background-color: #267F2F;
        color: white;
      }
    }
  }


</style>
