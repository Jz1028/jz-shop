<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~_img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~_img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="~_img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~_img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="~_img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~_img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="~_img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~_img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '_c/tabbar/TabBar'
  import TabBarItem from '_c/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
