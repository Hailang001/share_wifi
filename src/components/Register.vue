<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">注册</span>
          <i class="el-icon-minus" style="font-size: 30px;color: white;transform:rotate(90deg)"></i>
          <span style="color: white">登录</span>
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
          <input type="text" placeholder="请输入账户名" id="name" @keydown.enter.prevent="skip">
        </div>
        <div class="password">
          <i class="mf mf-mima"></i>
          <span>密码</span>
          <i class="el-icon-minus" style="font-size: 16px;transform:rotate(90deg)"></i>
          <input type="password" placeholder="请输入密码" id="password" @keydown.enter.prevent="skip">
        </div>
        <div class="affirm">
          <i class="mf mf-mima"></i>
          <span>确认</span>
          <i class="el-icon-minus" style="font-size: 16px;transform:rotate(90deg)"></i>
          <input type="password" placeholder="请再次输入密码确认" id="passwords" @keydown.enter.prevent="skip">
        </div>
      </div>
      <div class="register">
        <span @click="skip">注 册</span>
      </div>
      <div class="login">
        <span class="name">已有账号</span>
        <el-button @click="login">登 录</el-button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
      }
    },
    methods: {
      login () {
        this.$router.push({
          path: '/Login'
        })
      },
      skip () {
        let name = document.getElementById('name').value
        let password = document.getElementById('password').value
        let passwords = document.getElementById('passwords').value
        if (name.length !== 0 && password.length !== 0 && password === passwords) {
          this.$router.push({
            path: '/Skip'
          })
        } else if (name.length === 0) {
          this.$notify({
            title: '警告',
            message: '用户名不能为空',
            type: 'warning'
          })
        } else if (password.length === 0) {
          this.$notify({
            title: '警告',
            message: '密码不能为空',
            type: 'warning'
          })
        } else if (password !== passwords) {
          this.$notify({
            title: '警告',
            message: '密码和上面的不一致,请重新填写',
            type: 'warning'
          })
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
     height: 60px;
     line-height: 60px;
     margin-top: 200px;
     background-color: #AED931;
     cursor: pointer;
     color: white;
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
