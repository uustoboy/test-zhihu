<template>
  <div>
      <div class="details-head">
          <img :src="details.image" class="details-pic"/>
          <div class="details-top">
               <h2>
                   {{details.title}}
               </h2>
               <div  v-if="details.image_source" class="details-source">
                   图片来源:{{details.image_source}}
               </div>
          </div>
      </div>
      <div v-html='details.body'>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailsPage',
  components: {
      //https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
  },
  data () {
    return {
        details : ''
    }
  },
  activated (){

  },
  beforeCreate () {

  },
  created () {
     let id = this.$route.query.id;
    console.log(id);
    axios.get(`/api/4/news/${id}`).then((res) => {
      if (res.status === 200) {
        this.details = res.data
      }
    })
  }

}
</script>
<style lang="scss" type="text/css">
    .details-head{
        @include rel;
        @include wh(100%,250);
    }
    .details-pic{
        @include wh(100%);
    }
    .details-top{
        @include abs((l:5%,b:5%,w:90%));
        h2{
            @include flc(18,24,#fff);
            @include tal;
        }
        .details-source{
            @include tar;
            @include flc(12,24,#fff);
        }
    }
</style>
