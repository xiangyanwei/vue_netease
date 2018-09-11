<template>
  <div class="matter_wrapper">
    <Header/>
    <div class="matter_page_wrapper">
      <div class="matter_page_content">
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="bannerList.length">
            <div class="swiper-slide" v-for="(banner, index) in bannerList">
              <img :src="banner.picUrl">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="img_nav_wrapper">
          <ul class="img_nav_list" ref="img_nav_ul">
            <li class="img_nav_item" v-for="(item, index) in matterMsg.column" :key="index">
              <img :src="item.picUrl"/>
              <span>{{item.title}}</span>
            </li>
          </ul>
        </div>
        <Split/>
        <div class="recomments">
          <div class="recommend_wrapper">
            <div class="recommend">为你推荐</div>
            <div class="recommend_image" >
              <img :src="matterMsg.recommendOne.picUrl">
            </div>
            <div class="recommend_info">
              <div class="recommend_kind">
                <span class="left">{{matterMsg.recommendOne.title}}</span>
                <span class="right">{{matterMsg.recommendOne.priceInfo}}元起</span>
              </div>
              <span class="recommend_des">{{matterMsg.recommendOne.subTitle}}</span>
            </div>
          </div>
          <div class="food">
            <div class="food_wrapper">
              <div class="food_info">
                <div class="user_info">
                  <img :src="matterMsg.zhenTwo.avatar"/>
                  <div>饮食组：万万</div>
                </div>
                <div class="food_brief">{{matterMsg.zhenTwo.title}}</div>
                <div class="food_intro">{{matterMsg.zhenTwo.subTitle}}</div>
              </div>
              <div class="food_img">
                <img :src="matterMsg.zhenTwo.picUrl">
              </div>
            </div>
            <div class="food_wrapper">
              <div class="food_info">
                <div class="user_info">
                  <img :src="matterMsg.recommendTwo.avatar"/>
                  <div>饮食组：万万</div>
                </div>
                <div class="food_brief">{{matterMsg.recommendTwo.title}}</div>
                <div class="food_intro">{{matterMsg.recommendTwo.subTitle}}</div>
              </div>
              <div class="food_img">
                <img :src="matterMsg.recommendTwo.picUrl" >
              </div>
            </div>
          </div>
          <div class="recommend_wrapper">
            <div class="recommend_image">
              <img :src="matterMsg.zhenOne.picUrl" >
            </div>
            <div class="recommend_info">
              <div class="recommend_kind">
                <span class="left">{{matterMsg.zhenOne.title}}</span>
                <span class="right">{{matterMsg.zhenOne.priceInfo}}元起</span>
              </div>
              <span class="recommend_des">{{matterMsg.zhenOne.subTitle}}</span>
            </div>
          </div>
          <div class="food">
            <div class="food_wrapper">
              <div class="food_info">
                <div class="user_info">
                  <img :src="matterMsg.recommendThree.avatar"/>
                  <div>{{matterMsg.recommendThree.nickname}}</div>
                </div>
                <div class="food_brief">{{matterMsg.recommendThree.title}}</div>
                <div class="food_intro">{{matterMsg.recommendThree.subTitle}}</div>
              </div>
              <div class="food_img">
                <img :src="matterMsg.recommendThree.picUrl">
              </div>
            </div>
            <div class="food_wrapper">
              <div class="food_info">
                <div class="user_info">
                  <img src="./img/touxiang.jpg"/>
                  <div>{{matterMsg.recommendThree.nickname}}</div>
                </div>
                <div class="food_brief">{{matterMsg.recommendThree.title}}</div>
                <div class="food_intro">{{matterMsg.recommendThree.subTitle}}</div>
              </div>
              <div class="food_img">
                <img :src="matterMsg.recommendThree.picUrl">
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <div class="moment">
          <div class="moment_header">十点一刻</div>
          <div class="moment_slide_wrapper">
            <div class="moment_wrapper" ref="moment_container">
              <div class="topic_wrapper" v-for="(item, index) in matterMsg.tenfifteen">
                <div class="topic">
                  {{item.participantNum === '0' ? '-今日话题-' : '' }}
                </div>
                <div class="topic_tips">
                  <span>{{item.title}}</span>
                  <span>{{item.desc}}</span>
                </div>
                <div class="participators">
                  <div class="participator_img">
                    <i class="iconfont icon-geren" ></i>
                    <img class="user" src="./img/touxiang.jpg">
                    <img class="user" src="./img/touxiang.jpg">
                    <div>...</div>
                    <span>989人参与话题</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Split/>
        <div class="recomments">
          <div class="recommend_wrapper">
            <div class="recommend">严选甄品</div>
            <div class="recommend_image">
              <img :src="matterMsg.zhenThree.picUrl" />
            </div>
            <div class="recommend_info">
              <div class="recommend_kind">
                <span class="left">{{matterMsg.zhenThree.title}}</span>
              </div>
              <span class="recommend_des">{{matterMsg.zhenThree.subTitle}}</span>
            </div>
          </div>
          <div class="food">
            <div class="food_wrapper boutique_wrapper">
              <div class="food_info boutique_info">
                <div class="food_brief boutique_brief">{{matterMsg.zhenTwo.title}}</div>
                <div class="food_intro boutique_intro">{{matterMsg.zhenTwo.subTitle}}</div>
              </div>
              <div class="food_img">
                <img :src="matterMsg.zhenTwo.picUrl">
              </div>
            </div>
            <div class="food_wrapper boutique_wrapper">
              <div class="food_info boutique_info">
                <div class="food_brief boutique_brief">{{matterMsg.zhenThree.title}}</div>
                <div class="food_intro boutique_intro">{{matterMsg.zhenThree.subTitle}}</div>
              </div>
              <div class="food_img">
                <img :src="matterMsg.zhenThree.picUrl" >
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <div class="select_look">
          <div class="header_look">
            严选LOOK
          </div>
          <img class="entertainment" :src="matterMsg.yxLook.picUrl" >
          <div class="user_recommend">
            <div class="user_look">
              <img :src="matterMsg.yxLook.avatar">
              <span>{{matterMsg.yxLook.topicId}}</span>
            </div>
            <div class="comment_look">
              {{matterMsg.yxLook.content}}
            </div>
          </div>
        </div>
        <div class="more_brilliant">
          <div class="brilliant_header">
            <span class="line_over">更多精彩</span>
            <span class="line"></span>
          </div>
          <div class="brilliant_item" v-for="(item, index) in matterMsg.yxWeek"
          :key="index">
            <div class="only_one">
              <img :src="item.scenePicUrl" >
            </div>
            <span>{{item.title}}</span>
          </div>
          <div class="brilliant_item">
            <div class="three_img">
              <img src="./img/brilliant.jpg" >
              <div class="right_img">
                <img src="./img/brilliant.jpg" >
                <img src="./img/brilliant.jpg" >
              </div>
            </div>
            <span>严选原创设计 风袅桃溪系列首发</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Split from '../../components/split/split.vue'
  import 'swiper/dist/css/swiper.min.css'
  import Header from '../../components/header/header.vue'
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },
    computed: {
      ...mapState(['matterMsg']),
      bannerList(){
        return this.matterMsg.banner ;
      }
    },
    data() {
      return {}
    },
    mounted(){
      this._initCarousel();
//      设置宽度
      this._initSlideWidth(this.$refs.img_nav_ul, 30) ;
      this._initSlideWidth(this.$refs.moment_container, 30)
      this._initNavScroll('.img_nav_wrapper') ;
      this._initNavScroll('.moment_slide_wrapper') ;
      this._initNavScroll('.matter_page_wrapper') ;


    },

    components: {
      Header,
      Split
    },
    methods: {
      _initCarousel(){
        new Swiper('.swiper-container',{
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })
      },
      _initSlideWidth(el, num){
        const slide = el ;//this.$refs.slide_item ;
        const space = num ;
        let slideWidth = 0 ;
        Array.from(slide.children).forEach((item, index)=>{
          slideWidth += item.offsetWidth + space
        })
        slide.style.width = slideWidth + 'px' ;
      },
      _initNavScroll(selector) {
        new BScroll(selector, {
          click: true,
          scrollX: true
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"
  .matter_page_wrapper
    height (1236/$rem)
    margin-top (108/$rem)
    .matter_page_content
      margin-bottom (120/$rem)
      .swiper-container
        margin (20/$rem) 0  (30/$rem)
        .swiper-wrapper
          .swiper-slide
            text-align center
            width (670/$rem)  !important
            height (385/$rem) !important
            overflow hidden
            img
              width (670/$rem)
              height (385/$rem)
      .img_nav_wrapper
        margin-bottom (30/$rem)
        .img_nav_list
          clearFix()
          .img_nav_item
            float left
            display flex
            flex-direction column
            align-items center
            width (164/$rem)
            margin-left (30/$rem)
            img
              width (164/$rem)
              height (164/$rem)
            span
              no_wrap()
              margin-top (8/$rem)
              font-size (24/$rem)
      .recomments
        .recommend_wrapper
          padding 0 (30/$rem)
          .recommend
            width 100%
            height (120/$rem)
            text-align center
            line-height (120/$rem)
            font-size (32/$rem)
          .recommend_image
            width (688/$rem)
            height (386/$rem)
            /*background url('./img/recommend.jpg')*/
            border-radius (10/$rem)
            background-size contain
            img
              width 100%
              height 100%
          .recommend_info
            padding-bottom (65/$rem)
            border 1px solid #eee
            border-radius (10/$rem)
            .recommend_kind
              clearFix()
              margin (20/$rem) 0
              font-size (32/$rem)
              span.left
                float left
                margin-left (10/$rem)
              span.right
                float right
                margin-right (10/$rem)
            .recommend_des
              font-size (28/$rem)
              margin-left (20/$rem)
              color #999
        .food
          padding 0 (30/$rem)
          .food_wrapper
            display flex
            font-size (28/$rem)
            margin (30/$rem) 0
            border 1px solid #eee
            justify-content space-between
            .food_info
              width (358/$rem)
              padding (20/$rem)
              .user_info
                display flex
                align-items center
                margin-top (20/$rem)
                img
                  width (46/$rem)
                  height (46/$rem)
                  border-radius (23/$rem)
                  margin 0 (20/$rem)
              .food_brief
                font-size (32/$rem)
                margin (20/$rem) 0
              .boutique_brief
                no_wrap()
                margin-top (80/$rem)
              .food_intro
                font-size (28/$rem)
                line-height (32/$rem)
                color #666
                height (66/$rem)
                overflow  hidden;
                text-overflow ellipsis;
                display -webkit-box;
                -webkit-line-clamp 2;
                -webkit-box-orient vertical;
              .boutique_intro
                no_wrap()
                display block
            .food_img
              img
                width (280/$rem)
                height (272/$rem)


      .moment
        padding 0 (30/$rem)
        margin-bottom (60/$rem)
        .moment_header
          width 100%
          height (120/$rem)
          line-height (120/$rem)
          text-align center
          font-size (32/$rem)
        .moment_slide_wrapper
          .moment_wrapper
            clearFix()
            .topic_wrapper
              float left
              display flex
              align-items  center
              flex-direction column
              width (500/$rem)
              height (295/$rem)
              justify-content space-between
              box-sizing border-box
              border (8/$rem) solid #ddd
              margin-right (30/$rem)
              float left
              .topic
                font-size (24/$rem)
                color #999
                margin-top (20/$rem)
                font-weight bold
              .topic_tips
                display flex
                flex-direction column
                text-align center
                span:first-child
                  font-size (40/$rem)
                  font-weight bold
                  margin-bottom (20/$rem)
                span:last-child
                  font-size (28/$rem)
                  font-weight bold
                  color #333
              .participators
                margin-bottom (30/$rem)
                .participator_img
                  display flex
                  align-items center
                  .icon-geren
                    font-size (40/$rem)
                  img
                    width (48/$rem)
                    height (48/$rem)
                    border-radius (24/$rem)
                    vertical-align middle
                  div
                    width (48/$rem)
                    height (48/$rem)
                    border-radius (24/$rem)
                    text-align center
                    line-height (48/$rem)
                    font-size (24/$rem)
                    background-color #999
                  span
                    font-size (24/$rem)
                    margin-left (10/$rem)
                    color #666

              .topic_more
                font-size (38/$rem)
                margin-top (100/$rem)
                .icon-rightarrow
                  font-size (38/$rem)
      .select_look
        .header_look
          text-align center
          font-size (40/$rem)
          width 100%
          height (120/$rem)
          line-height (120/$rem)
        .entertainment
          width 100%
          height (750/$rem)
        .user_recommend
          padding (10/$rem) (30/$rem) (30/$rem)
          .user_look
            display flex
            align-items center
            margin-bottom (20/$rem)
            img
              width (48/$rem)
              height (48/$rem)
              border-radius (24/$rem)
              margin-right (10/$rem)
            span
              font-size (24/$rem)
          .comment_look
            font-size (28/$rem)
            color #999


      .more_brilliant
        padding 0 (30/$rem)
        background-color #eee
        .brilliant_header
          width 100%
          height (120/$rem)
          font-size (32/$rem)
          text-align center
          line-height (120/$rem)
          position relative
          .line_over
            position relative
            z-index 3
            background-color #eee
            padding 0 (10/$rem)
          .line
            width 100%
            height (1/$rem)
            background-color black
            position absolute
            top 1.3rem
            left 0
            border none
        .brilliant_item
          text-align center
          background-color white
          padding (24/$rem) (24/$rem) (30/$rem)
          margin-bottom (30/$rem)
          clearFix()
          .three_img
            display flex
            margin-bottom (30/$rem)
            img
              width (460/$rem)
              height (360/$rem)
              margin-right (4/$rem)
            .right_img
              img
                width (178/$rem)
                height (178/$rem)
          .only_one
            img
              width (642/$rem)
              height (360/$rem)
              margin-bottom (30/$rem)
          span
            float left
            font-size (28/$rem)
            color #666
</style>
