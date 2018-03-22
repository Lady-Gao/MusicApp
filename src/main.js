import Vue from 'vue'
import Vuex from 'vuex'
//路由
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import directives from './plugins/directive.js'
import VueTouch  from "vue-touch";
import App from './App.vue'


Vue.use(VueTouch, {name:'v-touch'})
Vue.use(directives)
Vue.use(ElementUI)
 //安装插件
Vue.use(Vuex)
Vue.use(VueRouter)
//实例化
const routes=[{
    path:"/music",
  name:"首页",
    component(){
      return System.import("./views/music/index.vue")
    },
    children:[{
      path:"/music/oumei",
      name:"音乐欧美",
      component(){
        return System.import("./views/music/oumei/index.vue")
      }
    }, {
        path: "/music/guochan",
        name: "音乐国产",
        component() {
          return System.import("./views/music/guochan/guochan.vue")
        }
      }]
  }, {
      path: "/diantai",
      name: "电台",
      component() {
        return System.import("./views/diantai/index.vue")
      }
    }, {
      path: "/mymusic",
    name: "朋友",
      component() {
        return System.import("./views/mymusic/index.vue")
      }
    },{
      path:"*",
      redirect: '/music'
}]
const router=new VueRouter({
  routes
})
const store=new Vuex.Store({
  state:{
    //娱乐
    List:[],
    //音乐
    mapList:[],
    isShowAlbum: false,
    isShowPlay: false,
    //点击的那张专辑
    clickalbum: null,
    //点击专辑的下标
    albumIndex: null,
     play: {
      //播放专辑下标
      playalbumIndex: null,
      //播放 歌曲下标
      playIndex: null,
      //播放一首 歌曲相关内容
      playAlbum: null
     }
 },
  mutations:{
    //段子信息
    QXBK(state,payload){
      state.mapList = payload.mapList
      state.List = payload.List
   },
    TOGO(state, payload) {
    state.clickalbum = payload.album
    if (payload) {
      state.isShowAlbum = payload.isShowAlbum
      state.albumIndex = payload.albumindex
    }
   },
    PLAY(state, payload) {
      state.play.playAlbum = payload.playAlbum
      state.play.playIndex = payload.playIndex
      state.play.playalbumIndex = state.albumIndex
      state.isShowPlay = payload.isShowPlay
    },
    BACKALBUM(state, payload) {
      state.isShowPlay = payload.isShowPlay
    }, 
    PLAYHOT(state,payload){
      state.play.playAlbum = payload.playAlbum
      state.play.playIndex = payload.playIndex
      state.play.playalbumIndex = state.albumIndex
      state.isShowPlay = payload.isShowPlay
    }
 
  },
  actions:{
    async QXBK({commit}){
      var data = await fetch("../data/data.json").then(data=>data.json())
      commit("QXBK",data)
    },
    async GETFRIENDS({commit}){
      var data = await fetch("../data/data.json").then(data=>data.json())
      commit("GETFRIENDS",data)
    },
    async INIT({commit}){
      var data = await fetch("/init").then(data=>data.json())
      console.log(data)
      commit("GETFRIENDS",data)
    }

  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
