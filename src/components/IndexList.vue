<template>
  <div>
    <ul class="zh-ul" v-for="item in homeList">
      <li class="zh-list" >
        <a>
          <p class="list-txt">
                {{ item.title }}
          </p>
          <div class="list-img" >
            <img :src="item.images"/>
          </div>
        </a>
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
  created () {
    console.log(`homeList:${this.homeList}`);
  }
}
</script>
<style lang="scss" scoped="" type="text/css">
.zh-ul{
  @include w(90%);
  @include mar(0 auto);
}
.zh-list{
  @include pad(10 0);
  @include bdb(1 solid #ccc);
  a{
    @include flex;
  }
  .list-txt{
    @include w(90%);
    @include mr(5);
    @include flc(14,24,#000);
    @include tal;
  }
  .list-img{
    @include wh(100,50);
    img{
      @include wh(100%);
    }
  }
}
</style>
