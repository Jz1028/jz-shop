<template>
  <swiper class="swiper">
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '_c/common/Swiper'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default:()=>[]
      }
    }
  }
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 0;
  padding-bottom: 52%;
  overflow: hidden;
}
</style>
