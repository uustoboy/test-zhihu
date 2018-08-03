<template>
  <div>
    <transition >
      <div class="themes-main" name="themes" v-if="themesShow">
        <div class="themes-mark"></div>
        <ul class="themes-ul">
          <li class="themes-list">
            首页
          </li>
          <li class="themes-list" v-for="(item,index) in themesList" :key="item.id">
              {{item.name}}
          </li>
        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailsPage',
  props: {
    'themesList': [],
    'themesShow': {
      type: Boolean,
      default: false
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  activated () {

  },
  beforeCreate () {

  },
  created () {

  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;
.themes-main{
  @include fixed((l:-100%,t:0,w:100%,h:100%,z:30));
}
.themes-mark{
  @include abs((l:0%,t:0,w:100%,h:100%,z:30));
  @include bgc(rgba(0,0,0,0.5));
}
.themes-ul{
  @include rel;
  @include z(32);
  @include wh(80%,100%);
  @include bgc(#fff);
  .themes-list{
    @include flc(28,60,#000);
    @include tal;
    @include ti(30);
  }
}

.themes-enter-active, .themes-leave-active {
  @include trs(left 100% ease-out);
}

.themes-enter, .themes-leave-to {
   @include trs(left -100% ease-out);
}
</style>
