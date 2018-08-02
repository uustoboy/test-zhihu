<template>
  <div>
    <ul class="zh-ul">
      <li class="zh-list" v-for="item in homeList" :key="item.id" @click="Goto(item.id)">
        <p class="list-txt">
              {{ item.title }}
        </p>
        <div class="list-img" >
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
    }
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
  @include pad(10 0);
  @include bdb(1 solid #ccc);
  @include flex;

  .list-txt{
    @include w(90%);
    @include mr(5);
    @include flc(18,32,#000);
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
