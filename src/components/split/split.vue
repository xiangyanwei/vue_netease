<template>
  <div class="split_bar"></div>
</template>
<script>
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },

    data() {
      return {}
    },

    methods: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"

  .split_bar
    width 100%
    height (30/$rem)
    background-color #eeeeee
</style>
