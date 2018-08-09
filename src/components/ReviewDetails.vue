<template>
  <div>
    <div class="review-h2">
       {{reviewInfo.long_comments}} 条长评论
    </div>
    <div v-if="longLength">
      <ul class="review-ul">
        <li v-for="item in reviewLong" :key="item.id" class="review-list">
            <div class="review-avatar">
              <img :src="item.avatar" />
            </div>
            <div class="review-info">
              <div class="review-name">
                <div class="review-author">
                  {{ item.author }}
                </div>
                <div class="review-likes">
                  👍&nbsp;&nbsp;{{item.likes}}
                </div>
              </div>
              <div class="review-content">
                  {{ item.content }}
              </div>
              <div v-if="item.reply_to" class="review-replyMain">
                //<span class="review-replyName">{{item.reply_to.author}}:</span><span class="review-replyContent">{{item.reply_to.content}}</span>
              </div>
              <div class="review-time">
                   {{ item.time | turnTime }}
              </div>
            </div>
        </li>
      </ul>
    </div>
    <div v-else class="review-null">
      深度长评虚位以待
    </div>
    <div class="review-h2" @click="getShortList()">
       {{reviewInfo.short_comments}} 条评论
    </div>
    <div v-if="shortLength">
      <ul class="review-ul">
        <li v-for="item in reviewShort" :key="item.id" class="review-list">
            <div class="review-avatar">
              <img :src="item.avatar" />
            </div>
            <div class="review-info">
              <div class="review-name">
                <div class="review-author">
                  {{ item.author }}
                </div>
                <div class="review-likes">
                  👍 {{item.likes}}
                </div>
              </div>
              <div class="review-content">
                  {{ item.content }}
              </div>
              <div v-if="item.reply_to" class="review-replyMain">
                //<span class="review-replyName">{{item.reply_to.author}}:</span><span class="review-replyContent">{{item.reply_to.content}}</span>
              </div>
              <div class="review-time">
                   {{ item.time | turnTime }}
              </div>
            </div>
        </li>
      </ul>
    </div>
    <div v-else class="review-null">
      深度长评虚位以待
    </div>
    <BackTop />
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
      this.reviewLong = longResp.data.comments

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
      let id = this.$route.query.id
      axios.get(`/api/4/story/${id}/short-comments`).then( (shortResp) => {
        this.reviewShort = shortResp.data.comments
      });
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
.review-ul{
  .review-list{
      @include flex;
      @include pad(20);
      @include bdb(1 solid #666);
      @include mar(0 0 -1 0);
      @include tal;
  }
  .review-avatar{
    @include wh(68);
    @include mar(0 20 0 0);
    img{
      @include wh(68);
      @include bdrs(50%);
    }
  }
  .review-info{
    @include w(85%);
  }
  .review-name{
     @include flex;
     @include w(100%);
     @include jc(space-between);
     @include flc(30,60,#333);
  }
  .review-content{
    @include flc(24,34,#333);
  }
  .review-time{
    @include flc(22,32,#333);
    @include mar(15 0 0 0);
  }
  .review-replyMain{
    @include mt(10);
    @include flc(28,34,#000);
  }
  .review-replyName{
    @include fcb(28,#000);
    @include mar(0 10 0 0);
  }
  .review-replyContent{
    @include fc(24,#333);
  }

}
</style>
