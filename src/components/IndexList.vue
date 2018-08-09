<template>
  <div>
    <div v-if="latestList.top_stories">
      <Swiper>
        <div class="swiper-slide" v-for="item in latestList.top_stories" :key="item.id" slot="swiper-con" @click="Goto(item.id)">
          <div clss="top-storiesList">
            <img :src="item.image" class="top-storiesImg">
            <p class="top-storiesTxt">{{item.title}}</p>
          </div>
        </div>
      </Swiper>
    </div>
    <ul class="zh-ul">
      <li :class="item.images ? 'zh-list' : 'zh-list2'" v-for="item in latestList.stories" :key="item.id" @click="Goto(item.id)">
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
import Swiper from './swipe/Swiper'
export default {
  name: 'IndexList',
  components: {
    Swiper
  },
  data () {
    return {
      latestList : ''
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
//       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
// 　　   console.log(scrollTop)
    }
  },
  mounted(){
    // window.addEventListener('scroll', this.scrollToTop)
  },
  created () {

      this.axios.get(`/api/4/news/latest`).then((latestResp)=>{
        this.latestList = latestResp.data
        console.log(this.latestList.top_stories);
      })

  }
}
</script>
<style lang="scss" scoped type="text/css">
$global-unit:rem;

.swiper-slide{
  @include rel;
}
.top-storiesTxt{
  @include flex;
  @include abs((l:0,b:8%));
  @include flc(24,34,#fff);
  @include tal;
  @include pad(20);
}
.top-storiesImg{
  @include wh(640,480);
}
.top-storiesList{
  @include rel;
}
.zh-ul{
  @include w(95%);
  @include mar(30 auto);

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
