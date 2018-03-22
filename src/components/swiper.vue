<style scoped lang="stylus">
.swiper-container{
    width:100%;
   img{
        width:100%;
    }
    .swiper-pagination{
        position:relative;
        bottom:-20px;
    }
}
</style>
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgArr">
            <img :src="item.url" alt="">
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
  
</div>
</template>

<script>
export default {
    props:["imgArr"],
 data () {
    return {
      
    }
  },
  mounted(){
       var mySwiper = new Swiper ('.swiper-container', {
     loop: true,
     autoplay: 1000,
     speed:1000,
     loop:true,
   pagination: '.swiper-pagination',
   pageinationClickable:true,
    // 如果需要分页器
     nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect : 'cube'
  
     })
  }
}
</script>