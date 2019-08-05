<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" @pullingUp="loadMore">
      <home-swiper  :banners="banners"/>
      <recommend-view  :recommends="recommends"/>
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      :class="{fixed:isTabFixed}" />
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from '_c/common/NavBar';
  import Scroll from '_c/common/Scroll';
  import TabControl from '_c/content/TabControl';
  import GoodList from '_c/content/Goods/GoodsList'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import BackTop from '_c/content/BackTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "_api/home";
  import { debounce} from "@/lib/util";

  export default {
    name: "Home",
    components: {
      NavBar, TabControl, GoodList, Scroll,
      HomeSwiper,
      RecommendView, FeatureView, BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > document.documentElement.getBoundingClientRect().height
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }).catch(err=>console.log(err))
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        }).catch(err=>console.log(err))
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh(),500)
      this.$bus.$on('refresh', () => {
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          refresh()
        },500)
      })
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      console.log(this.$refs.tabControl.$el.offsetTop)
    },
    activated() {
      const scroll = this.$refs.scroll
      scroll.scrollTo(0,this.saveY,0)
      scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 200px;
    z-index: 9;
  }

  .content {
    position: absolute;
    left: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .fixed{
    position: fixed;
    top: 44px;
    left: 0;
  }

</style>
