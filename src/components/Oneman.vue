<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white" @click="goBack"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">个人中心</span>
        </div>
      </div>
      <div class="chat">
        <span class="images" style="background-image: url('../../static/images/150_3.jpg')"></span>
        <span class="title">
          昵称：黑色帝国
        </span>
        <span class="id">
          ID：000100A
        </span>
      </div>
      <div class="text_bnt">
        <i class="el-icon-picture-outline"></i><span class="text">相册</span>
      </div>
      <div class="text_bnt">
        <i class="el-icon-service"></i><span class="text">客服</span>
      </div>
      <div class="text_bnt">
        <i class="el-icon-location-outline"></i><span class="text">地图</span>
      </div>
      <div class="text_bnt">
        <i class="el-icon-setting"></i><span class="text">设置</span>
      </div>
      <div class="text_bnt get_out" @click="getOut">
        <i class="el-icon-d-arrow-right"></i><span class="text">退出</span>
      </div>
      <div class="foot">
        <div @click="chat"><i class="mf mf-chat"></i><div>聊天室</div></div>
        <div @click="humanlist"><i class="mf mf-humanlist"></i><div>通讯录</div></div>
        <div @click="radar"><i class="mf mf-radar"></i><div>雷达</div></div>
        <div @click="oneman"><i class="mf mf-oneman"></i><div>我</div></div>
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
      chat () {
        this.$router.push({
          path: '/Chat'
        })
      },
      humanlist () {
        this.$router.push({
          path: '/Humanlist'
        })
      },
      radar () {
        this.$router.push({
          path: '/Radar'
        })
      },
      oneman () {
        this.$router.push({
          path: '/Oneman'
        })
      },
      goBack () {
        this.$router.go(-1)
      },
      getOut () {
        this.$router.push({
          path: '/Login'
        })
      }
    },
    mounted () {
    }
  }
</script>
<style lang="less" scoped="scoped">
  #paper{
    position: relative;
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
      position: relative;
      width: 1080px;
      height: 200px;
      /*line-height: 200px;*/
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      .images{
        display: inline-block;
        position: absolute;
        left: 20px;
        top: 25px;
        width: 150px;
        height: 150px;
        background-color: #c0c0c0;
      }
      .title{
        position: absolute;
        font-size: 36px;
        left: 200px;
        top: 55px;
        color: #c0c0c0;
      }
      .id{
        position: absolute;
        font-size: 24px;
        left: 200px;
        top: 125px;
        color: #c0c0c0;
      }
    }
    .text_bnt{
      width: 1080px;
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      font-size: 36px;
      :hover{
        cursor: pointer;
        color: #AED931;
      }
      .text{
        margin-left: 100px;
        color: #c0c0c0;
      }
    }
    .foot{
      position: absolute;
      bottom: 0px;
      height: 180px;
      width: 100%;
      box-sizing: border-box;
      background-color: #e7e7e7;
      display: flex;
      >div{
        font-size: 80px;
        height: 140px;
        margin-top: 30px;
        box-sizing: border-box;
        /*line-height: 180px;*/
        color: #fff;
        flex: 1;
        :hover{
          cursor: pointer;
          color: #AED931;
        }
        >div{
          margin-top: 10px;
          font-size: 24px;
          color: #c0c0c0;
        }
      }
      .mf-oneman{
        color: #AED931;
      }
    }
  }


</style>
