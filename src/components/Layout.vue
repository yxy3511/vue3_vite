<script>
  import SideMenu from './SideMenu'
  import { ref, onMounted } from 'vue'
  export default {
    components: {
      SideMenu
    },
    setup() {
      const uname = ref(null)

      uname.value = 'Yvonne'

      const logout = function () {
        // api
      }
      
      return {
        uname,
        logout
      };
    }
  }

</script>

<template>
  <div class="layout-container">
    <div id="main-nav">
      <div class="menu-logo">
        <router-link to='/'>
          Welcom
        </router-link>
      </div>
      <div class="menu-right">
        <div class="user_div">
          <div class="user-info">{{uname}}</div>
          <div class="item-list">
            <div
              class="item-content"
              @click='logout'
            >退出登录</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <SideMenu />
      <div class="content-container">
        Hellow World!
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.layout-container
  display flex
  flex-direction column
  min-height 100vh
  .main-content
    flex 1
    background #fff
    display flex
    .content-container
      flex 1
  #main-nav
    height 64px
    background-color #fff
    display flex
    justify-content space-between
    align-items center
    padding 0 30px 0 39px
    border-bottom 1px solid #eee
    .menu-logo
      a, i.icon-samartmi
        font-size 24px
        color #000
        text-decoration unset
    .menu-right
      font-size 14px
      color rgba(0,0,0,0.65)
      height 100%
      .item-list
        display none
        align-items center
        justify-content center
        width 120px
        height 60px
        background #fff
        position absolute
        right 0px
        top 50px
        box-shadow 0px 4px 12px 0px rgba(0, 0, 0, 0.2)
        border-radius 4px
        z-index 2
        .item-content
          height 30px
          line-height 30px
          width 100%
          text-align center
          &:hover
            cursor pointer
            color rgba(23, 103, 232, 1)
      .user_div
        height 100%
        display flex
        align-items center
        &:hover
          cursor pointer
          .item-list
            display flex
</style>