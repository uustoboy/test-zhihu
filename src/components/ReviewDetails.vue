<template>
  <div>
    <div class="review-h2">
       {{reviewInfo.long_comments}} 条长评论
    </div>
    <div v-if="longLength">Yes</div>
    <div v-else class="review-null">
      深度长评虚位以待
    </div>
    <div class="review-h2" @click="getShortList()">
       {{reviewInfo.short_comments}} 条评论
    </div>
    <div v-if="shortLength">Yes</div>
    <div v-else class="review-null">
      深度长评虚位以待
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailsPage',
  data () {
    return {
      reviewInfo: '',
      reviewLong: '',
      reviewShort: '',
      longLength: '',
      shortLength: ''
    }
  },
  activated () {

  },
  beforeCreate () {

  },
  created () {
    let id = this.$route.query.id
    axios.all([
      axios.get(`/api/4/story-extra/${id}`),
      axios.get(`/api/4/story/${id}/long-comments`)
    ]).then(axios.spread((infoResp, longResp) => {
      this.reviewInfo = infoResp.data
      this.reviewLong = longResp.data
      if (this.reviewInfo.long_comments > 0) {
        this.longLength = true
      }
      if (this.reviewInfo.comments > 0) {
        this.shortLength = true
      }

    }))
  },
  methods: {
    getShortList () {

      axios.get(`/api/4/story/${id}/short-comments`).then( (shortResp) => {
        this.reviewShort = shortResp.data

      })
    }
  }
}
</script>
<style lang="scss" scoped  type="text/css">
$global-unit:rem;
.review-h2{
  @include pad(0 20);
  @include tal;
  @include bdtb(1 solid #666);
  @include flc(20,50,#000);
  &:nth-child(1){
    @include bdt(none);
  }
}

.review-null{
  @include wh(100%,200);
  @include flex;
  @include ai(center);
  @include jc(center);
  @include fc(24,#000);
}
</style>
