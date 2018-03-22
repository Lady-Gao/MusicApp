<style scoped lang="stylus">
  header{
    position: relative;
   width:100%;
    height:50px;
    line-height :50px;
    text-align :center;
    box-sizing:border-box;
    background-color :#5c4a40;
    color:#fff;
    div{
      width:20%;
      margin:0;
      .el-icon-menu{
        font-size:25px;
        position:relative;
        top:5px;
         color:#fff;
      }
      .gopage{
        width:100%;
        height:100%;
        line-height :100%;
        font-size:20px;
        color:#529eff;
      }
    }

    ul{
      margin:0;
      display :flex ;
      width:60%;
      li{ 
        flex:1;
      }
      li.cur{
        background-color #000;
        color:#fff;
      }
      }
  }
</style>
<template>
  <div id="app">
     <header>
        <div class='fl'>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-menu"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>音乐</el-dropdown-item>
              <el-dropdown-item>视频</el-dropdown-item>
              <el-dropdown-item>娱乐</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>  
        </div> 
        <ul class='fl'>
          <li v-for="item in tabNav" :class="{cur:$route.name==item.title}" @click="chick(item.url)">{{item.title}}</li>
        </ul>
        <div class='fl' @click="showPlay">
            <p class="el-icon-d-arrow-right gopage" ></p>
        </div> 
      </header>
   
      <router-view></router-view>
  </div>
</template>

<script>
import VuiPlay from './components/playalbum'
export default {
  name: "app",
  data() {
    return {
      tabNav: [
        {
          addClass: "",
          title: "音乐",
          url: "/music"
        },
        {
          addClass: "",
          title: "视频",
          url: "/diantai"
        },
        {
          addClass: "",
          title: "娱乐",
          url: "/mymusic"
        }
      ]
    };
  },
  methods: {
    chick(url) {
      this.$store.commit("BACKALBUM",{isShowPlay:false})
      this.$router.push({ path: url });
    },
  showPlay(){
    console.log(2)
    this.$store.commit("BACKALBUM",{isShowPlay:true})
  }
  },
  components:{
    VuiPlay
  }
}
</script>
