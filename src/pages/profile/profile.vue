<template>
 <div class="profile">
   <div class="profile_wrapper">
     <Header/>
     <div class="profile_content" v-if="!($route.path === '/profile/login')">
       <div class="netease_select">
         <img src="./img/yanxuan.png">
       </div>
       <div class="login_wrapper" @click="$router.push('/profile/login')">
           <div class="phone_login">
             <span>
            <i class="iconfont icon-shouji"></i>
          </span>
             <span>
            手机号码登录
          </span>
           </div>
           <div class="mail_login">
        <span>
          <i class="iconfont icon-youxiang"></i>
        </span>
             <span>
          邮箱账号登录
        </span>
           </div>
           <span>手机号快速注册</span>
         </div>
       <div class="login_way">
         <div class="login_icon">
           <span>
             <i class="iconfont icon-changyonglogo28"></i>
           </span>
           <span>微信</span>
         </div>
         <div class="login_icon">
          <span>
            <i class="iconfont icon-QQ"></i>
          </span>
          <span>QQ</span>
         </div>
         <div class="login_icon">
           <span>
             <i class="iconfont icon-weibo"></i>
           </span>
           <span>微博</span>
         </div>
       </div>
     </div>

     <router-view/>

   </div>
 </div>
</template>
<script>
  import Header from '../../components/header/header.vue' ;
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },

    data() {
      return {}
    },
    components: {
      Header
    },

    methods: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"
  .profile
    .profile_content
      position relative
      height (1246/$rem)
      .netease_select
        width (375*2/$rem)
        height (45*2/$rem)
        padding (80*2/$rem) 0
        text-align center
        img
          width (134*2/$rem)
          height (45*2/$rem)
      .login_wrapper
        display flex
        flex-direction column
        align-items center
        font-size (32/$rem)
        .phone_login
          width (335*2/$rem)
          height (46*2/$rem)
          background-color  darkred
          color white
          display flex
          justify-content center
          align-items center
          border-radius (10/$rem)
          margin-bottom (32/$rem)
          span
            font-size (32/$rem)
            .icon-shouji
              font-size (50/$rem)
        .mail_login
          width (335*2/$rem)
          height (46*2/$rem)
          display flex
          justify-content center
          align-items center
          border-radius (10/$rem)
          margin-bottom (32/$rem)
          border 1px solid darkred
          span
            color darkred
            font-size (32/$rem)
            .icon-youxiang
              font-size (50/$rem)
              color darkred

      .login_way
        display flex
        justify-content center
        position absolute
        width 100%
        left 0
        bottom (150/$rem)
        font-size (32/$rem)
        color #666
        .login_icon
          display flex
          align-items center
          padding (4/$rem) (30/$rem)
          &:nth-child(2)
            border-right 1px solid #666
            border-left 1px solid #666
          span
            .iconfont
              color #666
              font-size (40/$rem)
</style>
