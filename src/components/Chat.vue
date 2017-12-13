<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">聊天室</span>
        </div>
      </div>
      <div class="chat">
        <div class="images"></div>
        <span class="title">
          <span>活力四射</span>
        </span>
      </div>
      <div class="foot">
        <div><i class="mf mf-chat"></i></div>
        <div><i class="mf mf-humanlist"></i></div>
        <div><i class="mf mf-radar"></i></div>
        <div><i class="mf mf-oneman"></i></div>
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
    },
    mounted () {
    }
  }
</script>
<style lang="less" scoped="scoped">
  #paper{
    width: 1080px;
    height: 1920px;
    background-color: #fff;
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
      }
    }
    .chat{
      position: absolute;
      width: 1080px;
      height: 200px;
      line-height: 200px;
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      .images{
        position: relative;
        left: 50px;
        top: 25px;
        width: 150px;
        height: 150px;
        background-color: #c0c0c0;
      }
      .title{
        position: relative;
        top: 25px;
      }
    }
    .foot{
      margin-top: 1740px;
      height: 180px;
      width: 100%;
      box-sizing: border-box;
      background-color: #e7e7e7;
      display: flex;
      div{
        font-size: 100px;
        height: 180px;
        line-height: 180px;
        color: #fff;
        flex: 1;
      }
      .mf-chat{
        color: #AED931;
      }
    }
  }


</style>
