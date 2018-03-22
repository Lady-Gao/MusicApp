<style scoped lang="stylus">

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: transl25eX(10px);
  opacity: 0;
}
.search{
  position:absolute;
  top:50px;
  left:0;
  width:100%;
  overflow :hidden;
  background-color :#eee;
}
.gohide{
  position:relative;
  border-radius:30px;
  line-height:30px;
  padding:5px;
  background-color :rgba(0,0,0,0.3);
  color:#fff;
  border:1px solid yellow;
}
#box{
  position: relative;

li{
  background-color :rgba(0,0,0,0.3);
  position:absolute;
  top:40%;
  left:40%;
  width:20px;
  height:20px;
  font-size:12px;
  border-radius:50%;
}


}

</style>
<template>
  <div class="search" v-height="50">
   <ul id="box">
     <li class="li" v-dx="20" v-for="item in 25"></li>
    
	</ul>

 <button class="gohide"  @click="gohide" v-dx="60">社区入口...</button > 
   <transition name="slide-fade">
    <hide v-show="show.is" :show="show"></hide>
    </transition> 
    <p class="a">
      {{jia}}
    </p>
 </div> 

</template>

<script>

import hide from "./hide.vue"
export default {
  data(){
    return {
      top:60,
      left:60,
      dy:10,
      dx:10,
      show:{
        value3:true,
        is:false,
     },
     musicList:[]
    }
  },methods:{
    gohide(){
      this.show.is=true
      this.show.value3=true
   },
    closeTag(item){
    }
  },
  created(){
    this.$store.dispatch('QXBK')
   this.musicList=this.$store.state.mapList
  },
  computed:{
    jia(){
      var vm=this ;
        
    }
   },
 components:{
   hide
 }
}
</script>