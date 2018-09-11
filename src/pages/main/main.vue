<template>
  <div class="main_wrapper">
    <div class="header">
      <header class="main_header">
        <img src="./img/logo.png" alt="logo">
        <div class="search">
          <input type="text" placeholder="搜索商品，共10719款好货">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </header>
      <nav class="nav_tab" v-if="getNavBar">
        <ul class="tab_wrapper" ref="navUl" >
          <li class="tab_item" v-for="(headCate, index) in getNavBar"
              :key="index" @click="selectNavBar">{{headCate.name}}</li>
        </ul>
      </nav>
    </div>
    <div class="main_scroll_wrapper">
      <div class="detail_wrapper" >
        <MainCarousel/>
        <div class="credit_wrapper">
        <span class="credit_item" v-for="(policyDesc, index) in getPolicyDescList"
        :key="index">
          <i class="iconfont icon-duigou1"></i>
          <span>{{policyDesc.desc}}</span>
        </span>
        </div>
        <Split/>
        <div class="producer_wrapper">
          <div class="producer">
            品牌制造直供商
            <i class="iconfont icon-rightarrow"></i>
          </div>
          <ul class="producer_list">
            <li class="producer_item" v-for="(producer, index) in getTagList" :key="index">
              <img :src="producer.picUrl">
              <div class="tips">
                <span>{{producer.name}}</span>
                <span>{{producer.floorPrice}}起</span>
              </div>
            </li>
          </ul>
        </div>
        <Split/>
        <div class="direct_wrapper">
          <div class="direct_header">
            <span>人气推荐</span>
            <span class="link_other">查看全部&gt;</span>
          </div>
        </div>
        <section class="slide_wrapper">
          <div class="direct_slide_wrapper" ref="slide_item">
            <div class="direct_slide_item" v-for="(popularItem, index) in getPopularItemNewUserList"
            :key="index">
              <img :src="popularItem.primaryPicUrl">
              <span>{{popularItem.name}}</span>
              <span class="good_detail">{{popularItem.simpleDesc}}</span>
              <span class="good_price">￥{{popularItem.couponPrice}}</span>
            </div>
          </div>
        </section>
        <Split/>
        <header class="direct_wrapper">
          <div class="direct_header">
            <span>人气推荐·好物精选</span>
            <span class="link_other">查看全部&gt;</span>
          </div>
        </header>
        <section class="slide_wrapper" id="slide_once">
          <div class="direct_slide_wrapper" ref="slide_item_once">
            <div class="direct_slide_item" v-for="(popularItem, index) in getPopularItemList"
            :key="index">
              <img :src="popularItem.primaryPicUrl">
              <span>{{popularItem.name}}</span>
              <span class="good_detail">{{popularItem.simpleDesc}}</span>
              <span class="good_price">￥{{popularItem.retailPrice}}</span>
            </div>
          </div>
        </section>
        <Split/>
        <div class="limit_time_shop">
          <div class="limit_time">
            <span>严选限时购</span>
            <div class="time_wrapper">
              <span>812</span>&nbsp;:
              <span>10</span>&nbsp;:
              <span>49</span>
            </div>
            <span>100086</span>
          </div>
          <img src="./img/bag.png"/>
        </div>
        <Split/>
        <div class="welfare"></div>
        <Split/>
        <div>
        </div>
        <div class="special_subject">
          <div class="special_wrapper">
            <span>专题精选</span>
            <i class="iconfont icon-rightarrow"></i>
          </div>
          <div class="subject_list_wrapper">
            <ul class="subject_list" ref="subjectUl">
              <li class="subject_item" v-for="(topic, index) in getTopicList"
              :key="index">
                <img :src="topic.itemPicUrl" >
                <div class="subject_introduce">
                  <span class="left">{{topic.title}}</span>
                  <span class="right">{{topic.priceInfo}}起</span>
                </div>
                <span class="subject_name">{{topic.subtitle}}</span>
              </li>
            </ul>
          </div>
        </div>
        <Split/>
        <div v-for="(getCate, index) in getCateList" :key="index">
          <div class="live_home_wrapper" >
            <header class="live_home_header">
              {{getCate.name}}
            </header>
            <ul class="live_home_list" >
              <li class="live_home_item" v-for="(item, index) in getCate.itemList">
                <div class="img_wrapper"><img :src="item.primaryPicUrl"></div>
                <div class="suggest_price">仅售供应商建议价的1/6</div>
                <span class="discount orange">今日特价</span>
                <div class="live_home_info">{{item.simpleDesc}}</div>
                <div class="live_home_name">{{item.name}}</div>
                <div class="price">￥{{item.retailPrice}}</div>
              </li>
            </ul>
          </div>
          <Split/>
        </div>

        <div class="main_footer">
          <div class="footer_wrapper">
            <div class="download">
              <span>下载APP</span>
              <span>电脑版</span>
            </div>
            <div class="copy_statement">
              <span>网易公司版权所有 &copy; 1997-2018</span>
              <span>食品经营许可证：JY13301080111719</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import BScroll from 'better-scroll' ;
  import Swiper from 'swiper' ;
  import {mapState, mapGetters} from 'vuex' ;
  import 'swiper/dist/css/swiper.min.css';
  import Split from '../../components/split/split.vue';
  import MainCarousel from '../../components/maincarousel/maincarousel.vue' ;
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },

    mounted(){
//      console.log(this.mainMsg);
      this.$store.dispatch('getMainMsg', ()=>{
        this.$nextTick(()=>{
//          导航条的滑动
          this._initUlWidth() ;
          this._initNavScroll('.nav_tab') ;
          this.$refs.navUl.children[0].className = 'tab_item on'
//          最外层竖直滑动
          this._initMainScroll() ;
//          横向滑动的两处类似
          this._initSlideItem(this.$refs.slide_item);
          this._initSlideItem(this.$refs.slide_item_once) ;
          this._initNavScroll('.slide_wrapper') ;
          this._initNavScroll('#slide_once') ;
//          洁面仪处的横向滑动
          this._initSlideItem(this.$refs.subjectUl);
          this._initNavScroll('.subject_list_wrapper') ;

        })
      }) ;
    },
    computed: {
      ...mapState(['mainMsg']),
      getNavBar(){
        if(this.mainMsg){
          return this.mainMsg.headCateList
        }
      },
      getTagList(){
        if(this.mainMsg.tagList){
          return this.mainMsg.tagList.slice(0,4)
        }
      },
      getCateList(){
        if(this.mainMsg.cateList){
          return this.mainMsg.cateList.slice(0,3)
        }
      },

      getTopicList(){
        if(this.mainMsg){
          return this.mainMsg.topicList
        }
      },
      getPolicyDescList(){
        if(this.mainMsg){
          return this.mainMsg.policyDescList
        }
      },
      getPopularItemNewUserList(){
        if(this.mainMsg){
          return this.mainMsg.popularItemNewUserList
        }
      },
      getPopularItemList(){
        if(this.mainMsg){
          return this.mainMsg.popularItemList
        }
      }
    },
    data() {
      return {

      }
    },
    components: {
      Split,
      MainCarousel
    },

    methods: {
      _initMainScroll(){
        new BScroll('.main_scroll_wrapper',{
          click: true,
        })
      },
      _initNavScroll(selector){
        new BScroll(selector,{
          click: true,
          scrollX: true
        })
      },

      _initUlWidth(){
        const ul = this.$refs.navUl ;
        const space = 16;
        let ulWidth = 0 ;
        Array.from(ul.children).forEach((li, index) =>{
          ulWidth += li.clientWidth + space ;
        })
        ul.style.width = ulWidth  + 'px' ;
      },

      _initSlideItem(el){
        const slide = el ;//this.$refs.slide_item ;
        const space = 30 ;
        let slideWidth = 0 ;
        Array.from(slide.children).forEach((item, index)=>{
          slideWidth += item.clientWidth + space
        })
        slide.style.width = slideWidth + 'px' ;
      },
//
      selectNavBar(event){
        Array.from(this.$refs.navUl.children).forEach((item)=>{
          item.className = "tab_item" ;
        })
        event.target.className = "tab_item on" ;
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"
  .header
    position relative
    background-color white
    z-index 5
    .main_header
      padding (16/$rem) (32/$rem)
      display flex
      justify-content center
      align-items center
      img
        width (140/$rem)
        height (40/$rem)
        flex 1
        margin-right (20/$rem)
      .search
        flex 9
        position relative
        input
          width 100%
          height (56/$rem)
          line-height (56/$rem)
          background-color #dddddd
          box-sizing border-box
          padding-left (100/$rem)
          border-radius (10/$rem)
          outline none
          &::-webkit-input-placeholder
            font-size (24/$rem)
            color #666666
        .icon-sousuo
          font-size (32/$rem)
          position absolute
          top (16/$rem)
          left (56/$rem)
    .nav_tab
      .tab_wrapper
        clearFix()
        .tab_item
          flex 1
          font-size (28/$rem)
          float left
          width (100/$rem)
          height (60/$rem)
          line-height (60/$rem)
          text-align center
          margin-right (16/$rem)
          &.on
            border-bottom 1px solid darkred
            color darkred
  .main_scroll_wrapper
    height (1186/$rem)
    .detail_wrapper
      box-sizing border-box
      padding-bottom (122/$rem)
      .swiper-container
        .swiper-slide
          img
            width 100%
            height (400/$rem)
      .credit_wrapper
        display flex
        height (72/$rem)
        align-items center
        text-align center
        .credit_item
          flex 1
          .iconfont
            font-size (32/$rem)
            color #ff3366
          span
            font-size (24/$rem)
      .producer_wrapper
        .producer
          width 100%
          height (110/$rem)
          text-align center
          line-height (110/$rem)
          font-size (36/$rem)
          .iconfont
            font-size (32/$rem)
        .producer_list
          width 100%
          clearFix()
          .producer_item
            float left
            position relative
            background-color #eeeeee
            margin (8/$rem)
            display flex
            img
              width (356/$rem)
              height (236/$rem)
            .tips
              position absolute
              top (20/$rem)
              left (20/$rem)
              font-size (24/$rem)
              display flex
              flex-direction column
              span
                margin-bottom (10/$rem)
      .direct_wrapper
        display flex
        background-color #eeffff
        font-size (40/$rem)
        margin-bottom (20/$rem)
        .direct_header
          width 100%
          height (260/$rem)
          display flex
          flex-direction column
          align-items center
          justify-content center
          color #9db0c4
          span.link_other
            margin-top (40/$rem)
            width (240/$rem)
            height (56/$rem)
            line-height (56/$rem)
            text-align center
            border-radius (10/$rem)
            background-color #d8e5f1
            font-size (26/$rem)
      .slide_wrapper
        .direct_slide_wrapper
          clearFix()
          .direct_slide_item
            display flex
            flex-direction column
            width (280/$rem)
            font-size (28/$rem)
            margin-left (30/$rem)
            float left
            img
              width (280/$rem)
              height (280/$rem)
            span
              no_wrap()
              margin-bottom (8/$rem)
            span.good_detail
              color #999999
            span.good_price
              color red
      header.direct_wrapper
        display flex
        background-color #FfEebB
        font-size (40/$rem)
        margin-bottom (20/$rem)
        .direct_header
          width 100%
          height (260/$rem)
          display flex
          flex-direction column
          align-items center
          justify-content center
          color #B4A078
          span.link_other
            margin-top (40/$rem)
            width (240/$rem)
            height (56/$rem)
            line-height (56/$rem)
            text-align center
            border-radius (10/$rem)
            background-color #F4E9CB
            font-size (26/$rem)
      .limit_time_shop
        display flex
        justify-content space-around
        align-items center
        .limit_time
          font-size (28/$rem)
          margin (20/$rem) (20/$rem)
          display flex
          flex-direction column
          .time_wrapper
            margin (32/$rem) 0
            span
              color white
              padding (8/$rem)
              background-color #000000
        img
          width (320/$rem)
          height (320/$rem)
      .welfare
        width (750/$rem)
        height (300/$rem)
        background-image  url("./img/fuli.jpg")
      .special_subject
        .special_wrapper
          width 100%
          height (110/$rem)
          text-align center
          font-size (36/$rem)
          line-height (110/$rem)
          .iconfont
            font-size (25/$rem)
        .subject_list
          clearFix()
          .subject_item
            float left
            width (574/$rem)
            font-size (32/$rem)
            margin-right (30/$rem)
            margin-bottom (20/$rem)
            img
              width 100%
              height (320/$rem)
            .subject_introduce
              clearFix()
              span.left
                float left
                margin (16/$rem) (20/$rem)
              span.right
                float right
                color red
                margin (16/$rem) 0
            .subject_name
              color #666
              font-size (28/$rem)
              margin-left (20/$rem)

      .live_home_wrapper
        .live_home_header
          width 100%
          height (110/$rem)
          line-height (110/$rem)
          text-align center
          font-size (32/$rem)
        .live_home_list
          clearFix()
          .live_home_item
            width (345/$rem)
            margin 0 (10/$rem) (10/$rem) (20/$rem)
            float left
            .img_wrapper
              background-color #f4f4f4
              img
                width (345/$rem)
                height (345/$rem)
            .suggest_price
              color #9F8A60
              font-size (28/$rem)
              width (345/$rem)
              height (69/$rem)
              line-height (53/$rem)
              text-align center
              box-sizing border-box
              padding (8/$rem)
              background-color #F1ECE2
            .discount
              color white
              padding  (8/$rem)
              height (30/$rem)
              font-size (24/$rem)
              background-color #f48f18
              margin-left (10/$rem)
              margin-bottom (20/$rem)
            .live_home_info
              font-size (28/$rem)
              margin-left (10/$rem)
              margin-top (20/$rem)
              no_wrap()
            .live_home_name
              font-size (28/$rem)
              margin (20/$rem) (10/$rem)
              no_wrap()
            .price
              margin-top (10/$rem)
              margin-left (10/$rem)
              font-size (28/$rem)
              color red

      .main_footer
        background-color #333333
        color white
        .footer_wrapper
          padding (54/$rem) (20/$rem) (20/$rem)
          .download
            text-align center
            font-size (28/$rem)
            margin-bottom (30/$rem)
            span
              margin-left (20/$rem)
              padding (10/$rem) (20/$rem)
              border 1px solid #eeeeee
              border-radius (10/$rem)
          .copy_statement
            text-align center
            font-size (28/$rem)
            display flex
            flex-direction column
            span
              margin-bottom (10/$rem)

</style>
