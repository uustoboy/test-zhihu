<template>
  <div>
    <ul class="zh-ul">
      <li class="zh-list">
        <a>
          <p class="list-txt">
            装修还是不能任性，本想搞「极简风」，结果满屋「廉价感
          </p>
          <div class="list-img">
            <img src="https://pic3.zhimg.com/v2-0a7a20c7ea8fa67d70f7ad83b70bad7a.jpg"/>
          </div>
        </a>
      </li>.
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexList',
  data () {
    return {

    }
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
