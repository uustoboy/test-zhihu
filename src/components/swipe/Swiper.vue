<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot name="swiper-con"></slot>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import './swiper'
export default {
  name: 'Swiper',
  components: {

  },
  data () {
    return {

    }
  },
  activated () {

  },
  beforeCreate () {

  },
  mounted(){

    var mySwiper = new Swiper('.swiper-container', {
                                  autoplay: 5000,
                                 	//分页器
                                  pagination: '.swiper-pagination',
                                  paginationType : 'bullets',
                              })
  },
  created () {

  },
  methods: {

  }
}
</script>
<style lang="scss"  type="text/css">
@import './swiper.min.css';
$global-unit:rem;

.swiper-pagination-bullet{
  @include wh(20);
}
</style>
