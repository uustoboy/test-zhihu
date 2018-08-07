<template>
  <div>
    <ul class="zh-ul">
      <li :class="item.images ? 'zh-list' : 'zh-list2'" v-for="item in homeList" :key="item.id" @click="Goto(item.id)">
        <p class="list-txt">
              {{ item.title }}
        </p>
        <div class="list-img" v-if="item.images">
          <img :src="item.images"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexList',
  props: [
    'homeList'
  ],
  data () {
    return {

    }
  },
  methods: {
    Goto (id) {
      this.$router.push({
        name: 'DetailsPage',
        query: {
          id: id
        }
      })
    },
    scrollToTop(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
　　   console.log(scrollTop)
    }
  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)
  },
  created () {


  }
}
</script>
<style lang="scss" scoped type="text/css">
$global-unit:rem;
.zh-ul{
  @include w(95%);
  @include mar(0 auto);

}
.zh-list{
  @include pad(10);
  @include flex;
  @include bgc(#fff);
  @include bdrs(10);
  @include over;
  @include mar(0 0 20 0);
  @include box-s;
  .list-txt{
    @include w(90%);
    @include mr(5);
    @include flc(22,36,#000);
    @include tal;
  }
  .list-img{
    @include wh(150,100);
    img{
      @include wh(100%);
    }
  }
}
</style>
