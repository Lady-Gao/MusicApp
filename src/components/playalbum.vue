<style scoped lang="stylus">
*{
    color:#e4e7edd4;
}
.play{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height:100%;
    z-index :5;
   .header{
        text-align :center;
        hegiht:10%;
         p:nth-child(1){
             width:20%;
         }
       p:nth-child(2){
        float :left;
        height:100%;
        line-height:80px;
        font-size:22px;
        width:60%;
        white-space:nowrap;  
        overflow:hidden;           
        text-overflow:ellipsis;
        overflow: hidden;
       }
    }
    .cd{
        position:absolute;
        top:10%;
        left:0;
        height:60%;
        width:100%;
        padding:10px;
        text-align :center;
       .zhen{
               position:absolute;
               top:10px;
               left:50%;
               width:25%;
               transform-origin:top left;
               transform :rotate(-25deg);
               transition :all  1s ease 0s;
               z-index :5;
           }
           img.cur{
               transform :rotate(10deg);
           }
           
        .bing{
             position:absolute;
                width:250px;
                height:250px;
               top:30%;;
               left:50%;
              background-size:contain;
               background-image: url("../../resource/images/cd.png");
            transform:translate(-50%,0%);
        }
        .bing img{
               border-radius:50%;
               position:absolute;
               top:50%;
               left:50%;
               width:150px;
               height:150px;
             margin-top:-75px;
             margin-left:-75px;
               animation-name: donghua;
                animation-duration: 8s;
                animation-timing-function: linear;
                animation-play-state: paused;
                animation-iteration-count: infinite;
             }
            img.done {
                 animation-play-state: running;
             }
            @keyframes donghua {
                from{
                    transform:rotate(0deg)  ;
                }
                to{
                    transform:rotate(360deg) ;
                }
            }
    }
   .more{
       position:absolute;
       bottom:0;
       left:0;
       width:100%;
       .options li{
           font-size:35px;
       }
           li.icon-xin1{
               font-size:30px;
           }
      
       
       .el-row{
            text-align :center;
            .el-col-18{
                margin-bottom:40px;
            }
           .el-col{
                line-height :20px;
            p{
                position:relative;
                top:10px;
                width:100%;
                height:3px;
                background-color: #fff;
                border-radius:5px;;
            span{
                   position :absolute;
                   top:0;
                   left:0;
                   width:30px;
                   height:3px;
                   background-color:red;
                   border-radius:5px;;
                   z-index :4;
               }
            }
            }
        }
       ul{
           display :flex;
           li{
               flex:1
               text-align :center;
               font-size:40px;
           }
               li.icon-bofang,li.icon-pause-20{
                   font-size:50px;
               }
       }
   }
}
</style>
<template>
    <div class="play" :style="(this.$store.state.play.playAlbum==null)?{background:'#384a5d'}:{background:'url('+this.$store.state.mapList.album[this.$store.state.play.playalbumIndex].playerbg+') 0/100%'}"> 
        <div class="header ovh">
            <p class="iconfont icon-houtui1 fl" @click="goback"></p>
            <p>{{mName}}</p>
    </div>
    <div class="cd">
       <img  src="../../resource/images/swith.png" alt="" class="zhen" :class="{cur:isplay}">
       <p class="bing">
       <img v-if="this.$store.state.play.playAlbum!=null" :src="this.$store.state.mapList.album[this.$store.state.play.playalbumIndex].albumImage" alt="" class="bing" :class="{done:isplay}">
        </p>
    </div>
         <audio :src="this.url" id="audio" autoplay v-if="(this.url!=null)" ></audio>
       <div class="more ovh">
           <el-row >
               <div class="options ">
            <ul>
                <li class="iconfont" :class="xin?'icon-zhuanjiguangpan':'icon-xin1'" @click="changexin"></li>
                <li class="iconfont icon-icon--"></li>
                <li class="iconfont icon-BAI-pinglun"></li>
                <li class="iconfont icon-more-vert"></li>
            </ul>
        </div>
           </el-row>
          <el-row>
              <el-col :span="3">{{currentTime}}</el-col>
                 <el-col :span="18">
                    <p>
                        <span></span>
                    </p>
                 </el-col>
                <el-col :span="3">{{duration}}</el-col>
          </el-row>
            <ul>
                <li class="iconfont icon-singlecycle " > </li>
                <li class="iconfont icon-previous" @click="goprev"> </li>
                <li class="iconfont " @click="stopMusic" :class="[this.isplay&&this.$store.state.play.playAlbum!=null?'icon-pause-20':'icon-bofang']"> </li>
                <li class="iconfont icon-next"  @click="gonext"> </li>
                <li class="iconfont icon-icon8" > </li>
            </ul>
        </div>
    
  </div>
</template>

<script>
export default {
     props:["play"],
 data () {
    return {
        prev:"",
        next:"",
      isplay:true,
      //当前专辑
      allS:"",
      xin:false,
      url:null,
      duration:'00:00',
      currentTime:'00:00'
    }
  },
  computed:{
      mName(){
          var vm=this
      console.log("playd")
          if(this.$store.state.play.playAlbum!=null){
              setTimeout(() => {
                  vm.duration=vm.zhuanhuan($("#audio")[0].duration)
              }, 200);
         this.url=this.$store.state.play.playAlbum.musicUrl
              console.log(this.$store.state.play)
            }
           
          return (this.$store.state.play.playAlbum==null)?"目前暂无歌曲":this.$store.state.play.playAlbum.musicName
      }
  },methods:{
      //上一曲
      goprev(){
          this.allS=this.$store.state.mapList.album[this.$store.state.play.playalbumIndex]
         this.$store.state.play.playAlbum=this.allS.albumList[this.$store.state.play.playIndex-1]
      }
      ,gonext(){
           this.allS=this.$store.state.mapList.album[this.$store.state.play.playalbumIndex]
         this.$store.state.play.playAlbum=this.allS.albumList[this.$store.state.play.playIndex+1]
      },
       goback(){
        this.$store.commit("BACKALBUM",{isShowPlay:false})
    },
    stopMusic(){
        if(this.isplay){
            console.log(1)
            $("#audio")[0].pause()
            this.isplay=false
        }else{
            console.log(2)
            $("#audio")[0].play()
            this.isplay=true
        }
    },
    changexin(){
        if(this.xin){
            this.xin=false
        }else{
             this.xin=true
        }
    }
  ,zhuanhuan(s) {
            var t;
            if (s > -1) {
                var min = Math.floor(s / 60) % 60;
                var sec = s % 60;
                if (min < 10) { t = "0"; }
                t += min + ":";
                if (sec < 10) { t += "0"; }
                t += ~~sec;
            }
            return t;
        }
    }
}
</script>