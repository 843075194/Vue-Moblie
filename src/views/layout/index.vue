<template>
  <div class="layout-container">
      <!-- 子路由出口 -->
      <router-view></router-view>
      <!-- 子路由出口 -->

      <!-- 底部导航栏 -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/qa" icon="search">问答</van-tabbar-item>
            <van-tabbar-item replace to="/video" icon="friends-o">视频</van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
      <!-- 底部导航栏出口 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
