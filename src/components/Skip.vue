<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">正在登录</span>
        </div>
      </div>
      <div class="count">
        <span class="content">{{count}}</span>
      </div>
      <div class="text_title">
        <span>3S后自动登录</span><i class="el-icon-d-arrow-right"></i>
      </div>
      <div class="ifo">
        <span>恭喜你成功注册</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        count: 3
      }
    },
    methods: {
      minus (x) {
        x--
        this.count = x
      }
    },
    mounted () {
      var this_ = this
      var ab = setInterval(function () {
        this_.count--
        if (this_.count === 0) {
          clearInterval(ab)
          this_.$router.push({
            path: '/Radar'
          })
        }
      }, 1000)
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
    .count{
      .content{
        color: #EBF7F4;
        font-size: 500px;
      }
    }
    .text_title{
      margin-top: 100px;
      color: #ababab;
    }
    .ifo{
      height: 100px;
      width: 500px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      border: 1px solid #AED931;
      line-height: 100px;
      font-size: 30px;
      color: #AED931;
      margin: 100px auto 0 auto;
    }
  }


</style>
