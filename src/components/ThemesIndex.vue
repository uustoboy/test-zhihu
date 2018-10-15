<template>
  <div>
    <div v-if="themeList.description" class="zh-caption">
        <img :src="themeList.image" />
        <p class="zh-captionTxt">{{themeList.description}}</p>
    </div>
    <div v-if="themeList.editors" class="zh-compile">
      主编：
      <span v-for="item in themeList.editors" :key="item.id" class="zh-compilePic">
        <img :src="item.avatar">
      </span>
    </div>
    <ul class="zh-ul">
      <li :class="item.images ? 'zh-list' : 'zh-list2'" v-for="item in themeList.stories" :key="item.id" @click="Goto(item.id)">
        <p class="list-txt">
          {{ item.title }}
        </p>
        <div class="list-img" v-if="item.images">
          <img :src="item.images"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'ThemesIndex',
  props: {
  },
  components: {

  },
  data () {
    return {
      themeList: {}
    }
  },
  activated () {

  },
  beforeCreate () {

  },
  computed: {
    ...mapState(['honePage'])
  },
  mounted () {
    let id = this.$route.query.id
    if (this.$route.query.id) {
      this.axios.all([
        this.axios.get(`/api/4/theme/${id}`)
      ]).then(this.axios.spread((themeResp, reviewResp) => {
        this.themeList = themeResp.data
        this.id = id
      }))
    } else {
      id = 13
      this.axios.all([
        this.axios.get(`/api/4/theme/${id}`)
      ]).then(this.axios.spread((themeResp, reviewResp) => {
        this.themeList = themeResp.data
        this.id = id
      }))
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
      // this.$store.commit('updateHomePage', false)
    }
  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;


.zh-caption{
  @include rel();
  @include wh(100%,300);
  img{
    @include wh(100%,300);
  }
  .zh-captionTxt{
    @include abs((b:10,l:0,w:100%,z:1));
    @include flc(24,32,#fff);
    @include box-sz();
    @include pad(20);
    @include tal;
  }
}

.zh-compile{
  @include tal;
  @include pad(10);
  @include flc(24,32,#666);
  img{
    @include wh(35);
    @include mar(0 5 0 0);
    @include bdrs(50%);
  }
}

.top-storiesTxt{
  @include flex;
  @include abs((l:0,b:8%));
  @include flc(24,34,#fff);
  @include tal;
  @include pad(20);
}
.top-storiesImg{
  @include wh(640,480);
}
.top-storiesList{
  @include rel;
}
.zh-h2{
  @include pad(20);
  @include flc(22,24,#333);
  @include tal;
}
.zh-ul{
  @include w(95%);
  @include mar(0 auto);

}
.zh-list,.zh-list2{
  @include pad(10);
  @include flex;
  @include bgc(#fff);
  @include bdrs(10);
  @include over;
  @include mar(0 0 20 0);
  @include box-s;
  &:last-child{
    @include mar(0);
  }
  .list-txt{
    @include w(90%);
    @include mr(5);
    @include flc(22,36,#000);
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
