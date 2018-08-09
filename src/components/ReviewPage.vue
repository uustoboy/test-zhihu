<template>
  <div>
    <div class="review-column">
      <div class="review-comment" @click="Goto(id)">评论 {{reviewInfo.comments}}</div>
      <div class="review-praise">点赞 {{reviewInfo.popularity}}</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewPage',
  props: [
    'reviewInfo',
    'id'
  ],
  data () {
    return {

    }
  },
  methods: {
    Goto (id) {
      console.log(id);
      this.$router.push({
        name: 'ReviewDetails',
        query: {
          id: id
        }
      })
    }
  },
  created () {

  }
}
</script>
<style lang="scss" scoped type="text/css">
$global-unit:rem;
.review-column{
  @include fixed((l:0,b:0,w:100%,h:60));
  @include bgc(#388fe8);
  @include flex;
  @include jc(flex-end);
  @include flc(24,60,#fff);
}
.review-comment{
  @include mar(0 20 0 0);
}
.review-praise{
  @include mar(0 20 0 0);
}

</style>
