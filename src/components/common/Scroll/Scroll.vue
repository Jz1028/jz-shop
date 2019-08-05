<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default:3
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap:'tap',
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.refresh()
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
</style>
