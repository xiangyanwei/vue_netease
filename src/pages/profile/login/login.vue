<template>
  <div class="person">
    <div class="person_enter">
      <div class="person_enter_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
      </div>
      <div class="person_enter_d1">
        <input type="tel" autocomplete="off" spellcheck="false"
               placeholder="请输入手机号" v-model="phoneNum">
      </div>
      <div class="person_enter_d2">
        <input type="text" placeholder="请输入短信验证码" v-model="codeMSG">
        <span>获取验证码</span>
      </div>
      <div class="person_enter_d3">
        <span>遇到问题？</span>
        <span class="d3_s1">使用密码验证登录</span>
      </div>
      <div class="person_enter_login">
        <div class="login_d1" @click="login">
          <span >登录</span>
        </div>
        <div class="login_d2">
          <span>其他方式登录</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {Toast} from 'mint-ui' ;
  export default {
    data(){
      return {
        phoneNum: '',
        codeMSG: ''
      }
    },
    components: {},
    watch:{

    },
    methods:{
      login(){
        if(!/^1\d{10}$/.test(this.phoneNum)){
           Toast({
            message: '请输入正确的手机号',
            position: 'middle',
            duration: 2000
          })
        }else if(!(/d{4}$/.test(this.codeMSG))){
           Toast({
            message: '请输入正确的验证码',
            position: 'middle',
            duration: 2000,
            className: 'alertMsg'
          })
        }

      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../static/css/mixin.styl"

  .person
    margin-top (88/$rem)
    width 100%
    .person_enter
      width 100%
      height 800px
      padding-top 50px
      padding-left 20px
      padding-right 20px
      box-sizing border-box
      .person_enter_img
        width 100%
        height 120px
        line-height 100px
        text-align center
        img
          width 30%
      .person_enter_d1
        width 100%
        height 60px
        line-height 60px
        padding 0 10px
        border-bottom 1px solid #eee
        margin (40/$rem) 0
        input
          outline none
          width 100%
          padding  (20/$rem) 0 (20/$rem) (20/$rem)
          box-sizing border-box
          border-bottom 1px solid #eee
          &::-webkit-input-placeholder
           font-size (32/$rem)
      .person_enter_d2
        width 100%
        padding 0 10px
        line-height 60px
        display inline-block
        font-size (32/$rem)
        border-bottom 1px solid #eee
        margin (30/$rem) 0
        input
          padding  (20/$rem) 0 (20/$rem) (20/$rem)
          outline none
          width 70%
          box-sizing border-box
        span
          display inline-block
          font-size (28/$rem)
          width (170/$rem)
          line-height (60/$rem)
          text-align center
          border 1px solid #7f7f7f
          border-radius (10/$rem)
      .person_enter_d3
        width 100%
        height 60px
        line-height 60px
        padding-left 10px
        box-sizing border-box
        margin (20/$rem) 0
        span
          margin 0 (20/$rem)
          font-size (28/$rem)
          color #7f7f7f
        .d3_s1
          float right
      .person_enter_login
        width 100%
        height (400/$rem)
        box-sizing border-box
        text-align center
        div
          height (92/$rem)
          width 100%
          line-height (92/$rem)
          border-radius (6/$rem)
          margin-bottom (40/$rem)
        .login_d1
          background-color #b4282d
          color white
          span
            font-size (28/$rem)
        .login_d2
          color  #b4282d
          border 1px solid #b4282d
          span
            font-size (28/$rem)
        span
          font-size (28/$rem)






</style>
