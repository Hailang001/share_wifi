<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">附近WIFI</span>
        </div>
      </div>
      <div class="radar">
        <div class="bor_1">
          <div class="bor_2">
            <div class="bor_3">
              <div class="bor_4">
                <i class="mf mf-person"></i>
              </div>
            </div>
          </div>
        </div>
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
    background-color: #f1f1f1;
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
    .radar{
      position: absolute;
      margin: 300px auto 0 40px;
      width: 1000px;
      height: 1000px;
      border-radius: 50%;
      border: 1px solid #fff;
      box-sizing: border-box;
      .bor_1{
        margin: 100px auto 0 auto;
        width: 800px;
        height: 800px;
        border-radius: 50%;
        border: 1px solid #fff;
        box-sizing: border-box;
        .bor_2{
          margin: 100px auto 0 auto;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          border: 1px solid #fff;
          box-sizing: border-box;
          .bor_3{
            margin: 100px auto 0 auto;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            border: 1px solid #fff;
            box-sizing: border-box;
            .bor_4{
              margin: 100px auto 0 auto;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              border: 1px solid #AED931;
              box-sizing: border-box;
              background-color: #fafafa;
              i{
                margin-top: 25px;
                font-size: 150px;
                color: #AED931;
              }
            }
          }
        }
      }
    }
    .radar:before {
      content: ' ';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: blips 5s infinite;
      animation-timing-function: linear;
      animation-delay: 1.4s;
    }
    .radar:after {
      content: ' ';
      display: block;
      background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #AED931 100%);
      width: 50%;
      height: 50%;
      position: absolute;
      top: 0;
      left: 0;
      animation: radar-beam 5s infinite;
      animation-timing-function: linear;
      transform-origin: bottom right;
      border-radius: 100% 0 0 0;
    }

    @keyframes radar-beam {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes blips {
      14% {
        background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%);
      }
      14.0002% {
        background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%);
      }
      25% {
        background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%);
      }
      26% {
        background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%);
        opacity: 1;
      }
      100% {
        background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #AED931 30%, rgba(255, 255, 255, 0) 100%);
        opacity: 0;
      }
    }
    .foot{
      position: relative;
      bottom: 0;
      left: 0;
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
      .mf-radar{
        color: #AED931;
      }
    }
  }


</style>
