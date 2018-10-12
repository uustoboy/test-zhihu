<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
import './swiper'
export default {
  name: 'Swiper',
  props: {
    swipeid: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'slide'
    },
    loop: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    pagination: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 5000
    },
    paginationType: {
      type: String,
      default: 'bullets'
    }
  },
  data () {
    return {
      dom: ''
    }
  },
  activated () {

  },
  beforeCreate () {

  },
  mounted () {
    var That = this
    this.dom = new Swiper('.' + That.swipeid, {
      // 循环
      loop: That.loop,
      // 分页器
      pagination: '.swiper-pagination',
      // 分页类型
      paginationType: That.paginationType, // fraction,progress,bullets
      // 自动播放
      // autoplay: That.autoplay,
      autoplay: That.autoplay,
      // 方向
      direction: That.direction,
      // 特效
      effect: That.effect, // slide,fade,coverflow,cube
      autoplayDisableOnInteraction: false,
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    })
  },
  created () {

  },
  methods: {

  }
}
</script>
<style lang="scss"  type="text/css">
@import './swiper.min';
$global-unit:rem;
.swiper-pagination-bullet-active {
  @include bgc(#fff);
}

.swiper-slide{
  @include h(500);
  img{
    @include w(100%);
  }
  h3{
    @include abs((l:0,b:45,w:100%,h:40,z:1));
    @include flc(24,40,#fff);
    @include pad( 0 20);
    @include tal;
  }
}

.swiper-pagination-bullet{
  @include wh(15);
}
</style>
