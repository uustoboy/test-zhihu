<template>
  <div>
    <div v-if="latestList.top_stories">
      <Swiper swipeid="swipe" ref="swiper" :autoplay="3000" effect="slide">
        <div @click="go(top.id)" v-for="top in latestList.top_stories" class="swiper-slide" slot="swiper-con">
          <img :src="top.image">
          <h3>{{top.title}}</h3>
        </div>
      </Swiper>
    </div>
    <div class="zh-h2">今日热闻</div>

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
    <div v-for="item in beforeList" :key="item.id">
      <div class="zh-h2">{{item.date | getDateWeek }}</div>
      <ul  class="zh-ul" >
        <li :class="jtem.images ? 'zh-list' : 'zh-list2'" v-for="jtem in item.stories" :key="jtem.id" @click="Goto(jtem.id)">
          <p class="list-txt">
                {{ jtem.title }}
          </p>
          <div class="list-img" v-if="jtem.images">
            <img :src="jtem.images"/>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

import Swiper from './swipe/Swipe'
export default {
  name: 'IndexList',
  components: {
    Swiper
  },
  data () {
    return {
      latestList : '',
      scrollBtn : false,
      scrollData : this.getNowFormatDate(),
      beforeList : []
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
      this.$store.commit('updateHomePage',false)
    },
    scrollToTop(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let bodyH = document.body.offsetHeight
      let winH = document.documentElement.clientHeight
      let that = this

       if( scrollTop+winH > bodyH-10 && !this.scrollBtn ){
        this.scrollBtn = true
        let data = this.scrollData
        console.log(data);
        this.axios.get(`/api/4/news/before/${data}`).then((resp) => {

          //that.beforeList = [...that.beforeList,...resp.data]
          that.beforeList.push(resp.data)
          that.scrollData = resp.data.date
          console.log(resp.data);
          that.scrollBtn = false
        })
       }
    },
    getNowFormatDate () {
      var date = new Date()
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = `${date.getFullYear()}${month}${strDate}`;
      console.log(currentdate)
      return currentdate;
    },

  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)

    let id = this.$route.query.id

    if(id){
      console.log('id:idsdsd');
      this.axios.all([
        this.axios.get(`/api/4/theme/${id}`)
        ]).then(this.axios.spread((themeResp, reviewResp)=>{
        this.latestList = themeResp.data
        this.id = id
        }))
    }else{
      this.axios.get(`/api/4/news/latest`).then((latestResp) => {
        this.latestList = latestResp.data
       // console.log(this.latestList.top_stories)
      })
    }



  },
  created(){

  },
  filters: {
    getDateWeek: function (value) {
      if (!value) return ''

      let year = value.slice(0,4)
      let month = value.slice(4,6)
      let day = value.slice(6,8)
      let spellDay = `${year}-${month}-${day}`
      let week = getWeek(spellDay)
      return `${month}月${day} ${week}`
      function getWeek(date) {
          var week;
          date = new Date(date)
          if(date.getDay() == 0) week = "星期日"
          if(date.getDay() == 1) week = "星期一"
          if(date.getDay() == 2) week = "星期二"
          if(date.getDay() == 3) week = "星期三"
          if(date.getDay() == 4) week = "星期四"
          if(date.getDay() == 5) week = "星期五"
          if(date.getDay() == 6) week = "星期六"
          return week;
      }
    }
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
.zh-h2{
  @include pad(20);
  @include flc(22,24,#333);
  @include tal;
}
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
  &:last-child{
    @include mar(0);
  }
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
