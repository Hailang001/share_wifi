<template>
  <div id="box">
    <div id="paper">
      <div id="header">
        <div id="go_back">
          <i class="el-icon-arrow-left" style="font-size: 30px;color: white" @click="goBack"></i>
        </div>
        <div class="title_text">
          <span style="color: #267F2F">黑色帝国之王者归来........</span>
        </div>
      </div>
      <div class="chat" v-for="item in content">
        <span>{{item}}</span>
        <div class="sanjiao"></div>
      </div>
      <div class="foot">
        <div class="yuyin"><i class="mf mf-yuyin" @click="chat"></i></div>
        <div class="content"><el-input type="textarea" v-model="text_1" @keydown.enter.prevent.native="send"></el-input></div>
        <div class="add"  v-if="show_"><i class="mf mf-add" @click="chat"></i></div>
        <div class="xiaolian"><i class="mf mf-xiaolian" @click="chat"></i></div>
        <div class="fasong" v-if="!show_"><i class="mf mf-fasong" @click="send"></i></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  export default{
    components: {ElInput},
    data () {
      return {
        text_1: '',
        show_: true,
        content: [
          '第一条',
          '第二条',
          'Hello World!dsahdlahsaskhfalhksljghfhg' +
          'dgdgdhdhdhgdhdhgdgdhgdhgdhgdhgdyreuggfjk jghdlahsaskhfalhksljgh' +
          'fhgdgdgdhdhdhgdhdhgdgdhgdhgdhg dhgdyreuggfjkjghdlahsaskhfalhksl' +
          'jghfhgdgdgdhdhdhgdhdhgdgdhgd hgdhgdhgdyreuggfjkjgkitiua'
        ]
      }
    },
    methods: {
      toShow () {
        if (this.text_1.length === 0) {
          this.show_ = true
        } else {
          this.show_ = false
        }
      },
      chat () {
        this.$notify({
          title: '警告',
          message: '你点击了语音功能',
          type: 'warning'
        })
      },
      send () {
        this.content.push(this.text_1)
        this.text_1 = ''
      },
      goBack () {
        this.$router.push({
          path: '/Chat'
        })
      }
    },
    mounted () {
    },
    watch: {
      text_1: ['toShow']
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
      text-align: left;
      right: 30px;
      margin-top: 20px;
      margin-left: 350px;
      width: 700px;
      height: auto;
      box-sizing: border-box;
      background-color: #f5f7fa;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
      padding: 20px 30px;
      .sanjiao{
        position: absolute;
        top: 20px;
        right: -12px;
        transform:rotate(-45deg);
        height: 20px;
        width: 20px;
        background-color: #f5f7fa;
        border: 1px;
        border-style:  solid;
        border-color: transparent #f1f1f1 #f1f1f1 transparent;
      }
    }
    .foot{
      position: absolute;
      bottom: 0px;
      height: 180px;
      width: 100%;
      box-sizing: border-box;
      background-color: #f5f7fa;
      display: flex;
      .yuyin{
        font-size: 70px;
        height: 140px;
        margin-top: 50px;
        box-sizing: border-box;
        color: #fff;
        flex: 1;
        :hover{
          cursor: pointer;
          color: #AED931;
        }
      }
      .content{
        font-size: 70px;
        height: 140px;
        margin-top: 40px;
        box-sizing: border-box;
        color: #fff;
        flex: 5;
      }
      .add{
        font-size: 80px;
        height: 140px;
        margin-top: 50px;
        box-sizing: border-box;
        color: #fff;
        flex: 1;
        :hover{
          cursor: pointer;
          color: #AED931;
        }
      }
      .xiaolian{
        font-size: 70px;
        height: 140px;
        margin-top: 55px;
        box-sizing: border-box;
        /*line-height: 180px;*/
        color: #fff;
        flex: 1;
        :hover{
          cursor: pointer;
          color: #AED931;
        }
      }
      .fasong{
        font-size: 70px;
        height: 140px;
        margin-top: 50px;
        box-sizing: border-box;
        color: #fff;
        flex: 1;
        :hover{
          cursor: pointer;
          color: #AED931;
        }
      }
    }
  }


</style>
