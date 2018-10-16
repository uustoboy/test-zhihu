<template>
  <div>
      <div class="details-head">
          <img :src="detailsList.image" class="details-pic"/>
          <div class="details-top">
               <h2>
                   {{detailsList.title}}
               </h2>
               <div  v-if="detailsList.image_source" class="details-source">
                   图片来源:{{detailsList.image_source}}
               </div>
          </div>
      </div>
      <div v-html='detailsList.body' class="details-main">
      </div>
      <ReviewPage :reviewInfo="reviewInfo" :id="id" />
      <BackTop />
  </div>
</template>

<script>
import ReviewPage from './ReviewPage'
export default {
  name: 'DetailsPage',
  components: {
    ReviewPage
  },
  data () {
    return {
      detailsList: '',
      reviewInfo: '',
      id: ''
    }
  },
  activated () {

  },
  beforeCreate () {

  },
  created () {
    let id = this.$route.params.id
    console.info(id);
    this.axios.all([
      this.axios.get(`/api/4/news/${id}`),
      this.axios.get(`/api/4/story-extra/${id}`)
    ]).then(this.axios.spread((detailsResp, reviewResp) => {
      this.detailsList = detailsResp.data
      this.reviewInfo = reviewResp.data
      this.id = id
    }))
  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;
.details-head{
    @include rel;
    @include wh(100%,350);
    @include over;
}
.details-pic{
  @include abs((l:0,t:-20%));
  @include w(100%);
}
.details-top{
    @include abs((l:5%,b:5%,w:90%));
    h2{
        @include flc(24,28,#fff);
        @include tal;
    }
    .details-source{
        @include tar;
        @include flc(16,28,#fff);
    }
}

.details-main{
  @include w(95%);
  @include tal;
  @include mar(0 auto 80);
  $red: #FC4482;
  $yellow: #FFD300;
  $blue: #5B7492;
  $gray: #acb9c8;
  h2,
  li,
  p {
    text-align: justify!important;
    margin: 1em 0;
  }
  h2 {
      color: $blue;
      position: relative;
      z-index: 1;
      font-size: .54rem;
  }
  a {
      color: $yellow;
      word-break: break-word;
  }
  .headline-title {
      color: $blue;
  }
  .meta {
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      @include flc(26,32,#666);
      @include mb(20);
      .avatar {
          vertical-align: middle;
          display: inline-block;
          width: 0.6rem;
          margin-right: 0.1rem;
      }
      span {
          color: #666;
          @include vic;
      }
      .author {
          display: inline-table;
          @include vic;
      }
  }
  .content {
      font-size: 0.8rem;
      @include flc(24,32,#333);
  }
  .question {
      blockquote {
          text-align: justify;
          position: relative;
          &::before {
              content: '';
              left: -.5rem;
              display: block;
              height: 100%;
              border-left: 0.1rem solid $yellow;
              position: absolute;
          }
      }
      &:first-child {
          padding-top: 0;
      }
      &:last-child {
          padding-bottom: 0;
          &::before {
              display: none;
          }
      }
      ul {
          padding-left: 0.3rem;
          li {
              text-align: left;
          }
      }
  }
  .content-image {
      width: inherit;
      max-width: 100%;
      @include mar(0 auto 20);
      display: block;
  }
  figure{
    @include w(100%);
  }
  .view-more {
      text-align: center;
      margin-bottom: 0.5rem;
      a {
          @include block;
          @include bgc(#ccc);
          @include hflc(50,20,50,#fff);
          @include cur;
          @include bdrs(10);
      }
  }
}

</style>
