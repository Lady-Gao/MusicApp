<style scoped lang="stylus">
.shequ {
    position: fixed;
    z-index:1005;
    top: 0;
    left: 0;
    height:100%;
    background-color: #bbb;
  width: 100%;
    overflow-y :scroll;
    .guanbi {
        position: absolute;
        top: 0;
        right:0;
        z-index: 2;
    }
    .head{
      padding:20px 0;
     background-color :#bbb;
     .btn .el-button{
       }
    }
   .box {
        padding: 20px;
        overflow-y: scroll;

        ul {
            li {
                margin-bottom: 30px;
                padding: 12px;
                border-radius: 10px;
                background-color: #fff;

                p {
                    height: 30px;
                    color: #796c20f2;
                    line-height: 30px;
                    font-size: 16px;
                    font-family: 'KaiTi';

                    img {
                        margin-right: 15px;
                        height: 100%;
                        border-radius: 50%;
                    }
                }

                .content {
                    margin-bottom: 10px;
                    padding: 0 20px;

                    h5 {
                        font-size: 15px;
                        color: #051729;
                        font-family: 'FangSong';
                    }

                    div {
                        position: relative;

                        img {
                            width: 100%;
                        }

                        .stop {
                            position: absolute;
                            top: 40%;
                            left: 40%;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            border: 2px solid #fff;
                            text-align: center;
                            line-height: 45px;
                            font-weight: bold;
                            color: #fff;
                        }
                    }
                }

                .el-col {
                    box-sizing: border-box;
                    line-height: 15px;
                    font-size: 12px;

                    i {
                        float: left;
                        padding: 5px;
                        width: 15px;
                        height: 15px;
                        background: url('../../../resource/images/26_03.png') 0 / 100%;
                    }

                    i.dislike {
                        background: url('../../../resource/images/26_05.png') 0 / 100%;
                    }

                    i.talk {
                        background: url('../../../resource/images/26_07.png') 0 / 100%;
                    }

                    span {
                        padding-left: 5px;
                    }
                }
            }
        }
    }

    .dialon {
        padding: 20px;
        box-size: border-box;
      width:100%;
      hegiht:100%;
    .text{
      border-radius:10px;
          width:100%;
          box-shadow: 2px 2px 5px #888888 inset;
      }
      .nei{
          clear: both;
          padding:10px 30px 0 0 ;
          margin-top:10px;
        
      }
      span{
          display :block;
          width:1%;
    }
    span.cur{
          color:red;
      }
    }
}
</style>

<template>
   <div class="shequ" >
    <div class="guanbi" @click="go3">
      <el-switch v-model="show.value3">
</el-switch>
    </div>
    <el-row class="head">
      <el-col class="btn" :span="6">
        <el-button size="mini" round @click="changeType('ALL')" :disabled="moren">精选</el-button>
      </el-col>
      <el-col class="btn" :span="6">
        <el-button size="mini" round @click="changeType('DUANZI')" :disabled="type=='DUANZI'">段子</el-button>
      </el-col>
      <el-col class="btn" :span="6">
        <el-button size="mini" round @click="changeType('SHIPIN')" :disabled="type=='SHIPIN'">视频</el-button>
      </el-col>
      <el-col class="btn" :span="6">
        <el-button size="mini" round @click="changeType('Add')" :disabled="type=='Add'">上传</el-button>
      </el-col>
    </el-row>
    
        <div class="dialon" v-show="type=='Add'">
            <textarea class="text fl"  cols="20" rows="10" autofocus v-model="txt"></textarea>
            <div class="nei">
                <input type="file" accept="image/png,image/gif" ref="fileId" class="fl">
            <!-- <el-button type="primary" round size="mini">pic<i class="el-icon-upload el-icon--right" @click="dalefile"></i></el-button> -->
            <span :class="{cur:red}" class="fr">{{txtLenght}}/50</span>
            </div>
              <el-button type="warning fr" round size="small" :disabled="red">发布</el-button>
        </div>

                
                    <!-- <input type="file" v-if="innerVisible">    -->
      <div class="box"  v-height="80" v-show="type!='Add'">
        <ul>
          <li v-for="item in kindof">
            <p>
              <img class="fl" :src="item.avatar" alt="">
              {{item.user_name}}
            </p>
            <div class="content">
              <h5>{{item.hot_comment.message}}</h5>
              <div>
                  <img :src="item.media_data.format!='GIF'?item.media_data[0].origin_img_url.origin_pic_url:item.media_data[0].wifi_img_url" >
            </div>
            </div>
            <el-row>
              <el-col :span="5">
                <i class="like"></i>
                <span>{{item._incrs.like}}</span>
              </el-col>
              <el-col :span="15">
                <i class="dislike"></i>
                <span>{{item._incrs.dislike}}</span>
              </el-col>
              <el-col :span="4" class="tr">
                <i class="talk"></i>
                  <span>{{item._incrs.share}}</span>
              </el-col>
            </el-row>
           </li>
        </ul>
      </div>
       
     </div>
</template>
<script>
export default {
  props: ["show"],
  data() {
    return {
      moren:true,
      type: "All",
      url: true,
      dialon: false,
      txt:"",
      red:false
    };
  },
  computed: {
    kindof() {
      switch (this.type) {
         case "SHIPIN":
          var arr = this.$store.state.List.filter(item => {
            return item.media_data[0].format == "GIF";
          });
          this.dialon=false
          this.moren=false
          return arr;
          break;
        case "DUANZI":
          var arr = this.$store.state.List.filter(item => {
            return item.media_data[0].format == "JPEG";
          });
          this.moren=false
          this.dialon=false
          return arr;
          break;
        case "Add":
          //设置变量ture 弹出发布框
          this.moren=false
          this.dialon = true;
          break;

        default:
       
          this.moren=true
        return this.$store.state.List
          break;
      }
    },
    txtLenght(){
        if(this.txt.length<=50){
            this.red=false
            return this.txt.length
        }else if(this.txt.length>50){
            this.red=true
            return 50
        }
    }
  },
  methods: {
    go3() {
      this.show.value3=false
      this.show.is = false;
    },
    biger() {
      console.log(3);
      this.url = false;
    },
    donghua(item) {
      if (this.url) {
        return item.media_data[0].wifi_img_url;
      } else {
        return item.media_data[0].origin_img_url.origin_pic_url;
      }
    },
    changeType(type) {
      this.type = type;
    },
    dalefile(){

    }
  },
  created() {
    this.$store.dispatch("QXBK");
  }
};
</script>