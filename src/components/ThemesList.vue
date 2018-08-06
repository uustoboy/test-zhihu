<template>
  <div>

    <transition name="themes">
      <div class="themes-main" v-if="isThemes">
        <div class="themes-mark"></div>
        <ul class="themes-ul">
          <li class="themes-list">
            首页
          </li>
          <li class="themes-list" v-for="item in themesLists" :key="item.id">
              {{item.name}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  name: 'ThemesList',
  props: {
    'themesLists': {}
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
  computed: {
    ...mapState(['isThemes'])
  },
  created () {

  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;
.themes-main{
  @include fixed((l:0,t:0,w:100%,h:100%,z:30));
}
.themes-mark{
  @include abs((l:0,t:0,w:100%,h:100%,z:30));
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
  transition: left 4.5s ease;
}
.themes-enter, .themes-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //@include l(0);
}
</style>
