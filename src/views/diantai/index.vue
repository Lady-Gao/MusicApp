<style scoped lang="stylus">
.swiper-container{
  width:100%;
  color:#fff;
    .swiper-wrapper{
        z-index:3000;
    .swiper-slide{
      div{
        height:100%;
        padding:20px;
        font-family :"Helvetica Neue, Helvetica, Arial, sans-serif";
          h2{
            padding :50px 0 20px 10px;
          }
          p{
            line-height:30px;
            width:70%;
          }
        }
      }
    }
  .gif{
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:300%;
    z-index:3;
    background-size:cover;
    }
  #myvideo{
    position:fixed;
    top:20%;
    height:60%;
    opacity :0.5;
  }
}

</style>
<template>
  <div>
     <div class="swiper-container">
      <div class="gif" data-swiper-parallax="-25%" data-swiper-parallax-duration="1000">
           <video id="myvideo"  :src="vid" autoplay>
             <source :src="vid" type="video/mp4">
           </video>
      </div>
      <div class="swiper-wrapper " >
        <div class="swiper-slide" v-height="50">
            <div class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.3s" swiper-animate-delay="0s">fadeInDown
              <h2>Last week</h2>
              <h4>Last week</h4>
              <p>They were talking loudly. I got very angry. I could not hear the actors. I turned round.They did not pay any attention. In the end, I could not bear it. I turned round again. ' the young man said rudely. 'This is a private conversation!'</p>
           </div>
          </div>
          <div class="swiper-slide" v-height="50">
            <div >
              <h4>all  we must</h4>
              <p>Life  is  not  easy  for  any  of  us. We  must  work,and  above  all  we must  believe  in  ourselves .We  must  believe  that  each  one  of  us  is  able to  do  something well, and  that, when  we  discover  what  this  something  is</p>
              <h2>Life</h2>
             
            </div>
          </div>
          <div class="swiper-slide" v-height="50" >
            <div>
              <h2>Beauty</h2>
              <p>No choir could really sing
                All the beautiful music
                Your eyes could possibly bring.
                So here I am, an artist,
                With inspiration beyond belief
                But to capture such rare beauty</p>
              <h4>nspiration beyond</h4>
            </div>
          </div>
      </div>
      <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
   </div>
   
   
  </div>
</template>

<script>
import VuiSwiper from "../../components/swiper.vue";
export default {
 data () {
    return {
     vid:"../../../resource/video/Tyr-Pink.mp4"
    }
  },
  mounted(){
       var mySwiper = new Swiper ('.swiper-container', {
    // loop: true,
    //  autoplay: 1000,
    //  speed:1000,
     //loop:true,
    // effect:"flip",
    // 如果需要分页器
    pagination: '.swiper-pagination',
     scrollbar: '.swiper-scrollbar',
     parallax : true,
     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素 
      swiperAnimate(swiper); //初始化完成开始动画
    }, 
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
    })
  }
}
</script>