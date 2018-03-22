<style scoped lang="stylus">
.bigB{
  overflow-y: scroll;
}
.music1 {
  width: 100%;
  text-align: center;
  padding:0 10px;
  p {
    width: 10%;
  }
  ul {
    display: flex;
    width: 80%;
  background-color:#594c3f4d;
    li {
      flex: 1;
    }

    li.cur {
      background-color: #000;
      color: #fff;
    }
  }
}
.album{
  li{
    float :left;
    width:100px;
   margin-left:10px;
   text-align :center;
    p{
      color:#000;
    }
   img{
    padding:5px;
   border:2px solid #ddd;
     width:100%;
   }
  }
}
.re{
   background-color :rgb(92, 75, 64);
   color:#ccc;
   padding-right:10%;
   background-origin :content-box;
   background-clip:content-box;
  font-size:15px;
}
.list{
  clear :both;
 height:300px;
  background-color :#aaa39d;

   li{
    font-size:14px;
    margin-left:10px;
    overflow :hidden;
    clear :both;
   line-height :20px;
    div:nth-child(1), div:nth-child(3){
    line-height :40px;
    margin-right:5px;
      width:20px;
    }
    
     h4{
      font-size:16px;
      margin-bottom:5px;
    }
}
}
</style>
<template>
  <div class="bigB" v-height="50"> 
    <vui-swiper id="vui-swiper" :imgArr="imgArr"></vui-swiper>
    <h4>专辑</h4>
   <div class="album ovh">
      <ul class="ovh">
        <li v-for="(item,index) in album" @click="goAlbum(item,index)">
          <img :src="item.albumImage" alt="">
          <p>{{item.albumTitle}}</p>
        </li>
      </ul>
    </div>
       <p class="re">| 热门歌曲</p> 
     <div class="list ovh">
      <ul>
        <li v-for="(hothot,index) in rege" :key="hothot.musicName" @click="hotPlay(hothot)">
          <div class="fl">{{index+1}}</div>
          <div class="fl">              
          <h4>{{hothot.musicName}}</h4>   
          <p>{{hothot.musicSinger}}</p>
          </div>
          <div class="iconfont icon-bofang fr">
           </div>
	
        </li>
      </ul>
    </div>
     <transition name="slide">
       <vui-album v-if="$store.state.isShowAlbum" :play="play"></vui-album>
    </transition>
    <transition name="slide">
       <vui-play v-show="$store.state.isShowPlay" :play="play"></vui-play>
    </transition>
    <!-- //路由 -->
    <!-- <div class="music1" >
      <ul>
        <v-touch tag="li" v-for="item in tabNav" 
        @tap="go(item.url)" :key="item.title" :class="{cur:$route.path==item.url}">{{item.title}}</v-touch>
      </ul>
    </div> -->
    <!-- <router-view></router-view> -->
   
  </div>
</template>
<script>
import VuiSwiper from "../../components/swiper.vue";
import VuiAlbum from '../../components/showalbum.vue'
import VuiPlay from '../../components/playalbum'
export default {
  data() {
    return {
       play:{
        playAlbum:null,
        playIndex:null,
        playalbumIndex:null,
        
      },
      imgArr: [
        {
          url: "../../../resource/images/01.jpg"
        },
        {
          url: "../../../resource/images/02.jpg"
        },
        {
          url: "../../../resource/images/03.jpg"
        },
        {
          url: "../../../resource/images/04.jpg"
        }
      ],
      tabNav: [
        {
          title: "国产",
          url: "/music/guochan"
        },
        {
          title: "欧美",
          url: "/music/oumei"
        }
      ]
    };
  },computed:{
    rege(){
       return this.$store.state.mapList.recommend
    },
    album(){
      return this.$store.state.mapList.album
    }
  },
  methods: {
    go(url) {
      this.$router.push({ path: url });
    },
    goAlbum(item,index){
    this.$store.commit("TOGO",{album:item,isShowAlbum:true,albumindex:index})
    },
    hotPlay(hot){
    this.$store.commit("PLAYHOT",{album:hot,isShowPlay:true,albumindex:null})
    }
  },
   created(){
    this.$store.dispatch("QXBK")
  },
  components: {
    VuiSwiper,
    VuiAlbum,
    VuiPlay
  }
};
</script>
