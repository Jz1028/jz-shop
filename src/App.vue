<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"/>
  </div>
</template>

<script>
  import MainTabBar from '_c/content/MainTabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  .main-tab-bar {
    z-index: 999;
  }
</style>
