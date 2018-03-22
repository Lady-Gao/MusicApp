<style scoped lang="stylus">
.box{
    position :fixed;
    z-index :2;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow :hidden;
   background-color #ddd;
   .icon-houtui1{
       position:absolute;
       top:10px;
       left:10px;
       dont-size:28px;
   }
   .header{
        height:230px;
        width:100%;
        padding:50px 30px;
         .img{
           width:100px;
           margin-right:30px;
           img{
               width:100%;
           }
        }
        .mess{
               margin-bottom :20px;
            h4{
                line-height :40px;
            }
            img{
                width:40px;
                border-radius:50%;
            }
            p{
                line-height :40px;
                margin-right:15px;
            }
        }
        .icont{
            clear: both;
         
            ul{
                display :flex;
                li{
                    flex:1;
                    font-size:30px;
                    color:#ddd;
                    text-align :center;
                }
            }
        }
    }
    .list{
       clear :both;
    ul{
        overflow-y:scroll;
         li{
            font-size:14px;
            margin:10px;
            overflow :hidden;
            clear :both;
             line-height :20px;
            div:nth-child(1), div:nth-child(3){
                line-height :40px;
                margin-right:5px;
                width:20px;
            }
            p{
                color:#727171;
                font-size:12px;
            }
        }       
     }
    }
}
</style>
<template>
  <div class="box"> 
      <p class="iconfont icon-houtui1" @click="goback"></p>
      <div class="header" :style="{background:`url(${album.albumBG}) 0 0 /100% 100% no-repeat`}">
             <div class="img fl">
              <img :src="album.albumImage" alt="">
             </div>
            <div class="mess fl">
                  <h4>{{album.albumTitle}}</h4>
                  <p class="fl"><img :src="album.albumImage" alt=""></p>
                  <p class="fl">{{album.albumSinger}}</p>
            </div>
           <div class="icont">
				<ul class="ovh">
					<li class="fl iconfont icon-addfile"></li>
					<li class="fl iconfont icon-BAI-pinglun"></li>
					<li class="fl iconfont icon-fenxiang1"></li>
					<li class="fl iconfont icon-icon--"></li>
				</ul>
			</div>
      </div>
      <div class="list"  >
         <ul v-height="230">
             <li v-for="(item,index) in album.albumList" @click="player(item,index)">
               <div class="fl">{{index+1}}</div>
                <div class="fl">
                <h4>{{item.musicName}}</h4>
                <p>{{item.musicSinger}}</p>
                </div>
                <div class="iconfont icon-bofang fr">
                </div>  
             </li>
         </ul>
      </div>
      
  </div>
</template>

<script>
export default {
    props:["play"],
 data () {
    return {
      
    } 
 },
    computed:{
         album(){//点击的专辑
          return this.$store.state.clickalbum
        }
    
    
},methods:{
    goback(){
        this.$store.commit("TOGO",{isShowAlbum:false})
    },
    player(item,index){
        var vm=this;
        this.$store.commit("PLAY",{
            isShowPlay:true,
           playAlbum: item,
           playIndex:index,
            playalbumIndex:vm.$store.state.albumIndex
            })
             //传给父亲
        this.play.playAlbum=item;
        this.play.playIndex=index;
        this.play.playalbumIndex=this.$store.state.albumIndex
    
     }
}
}
</script>