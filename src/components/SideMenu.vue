<template>
  <div
    class="side-menu-component"
    :style='{minHeight: menuHeight+"px"}' 
  >
    <div ref='menuRef' class="menu_container">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <template #icon>
            <PieChartOutlined />
          </template>
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <DesktopOutlined />
          </template>
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <InboxOutlined />
          </template>
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>Navigation One</template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>Navigation Two</template>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
            <a-menu-item key="131">Option 11</a-menu-item>
            <a-menu-item key="14">Option 12</a-menu-item>
            <a-menu-item key="15">Option 11</a-menu-item>
            <a-menu-item key="16">Option 12</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
      <div class='collapsed-btn' @click="toggleCollapsed">
        <!-- <i class="icon iconfont" :class='[collapsed ? "icon-zuo" : "icon-you"]'></i> -->
        <caret-left-outlined v-if='collapsed' />
        <caret-right-outlined v-else />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, ref, watch, onMounted } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  CaretLeftOutlined,
  CaretRightOutlined
} from '@ant-design/icons-vue';
import { commonVars } from '@/assets/utils/common'

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    CaretLeftOutlined,
    CaretRightOutlined
  },
  setup() {
    const state = reactive({
      collapsed: true,
      selectedKeys: ['1'],
      openKeys: [],
      preOpenKeys: [],
    });
    const menuStyle = reactive({
      menuRef: null,
      menuHeight: null
    })

    watch(() => state.openKeys, (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    });


    return {
      ...toRefs(state),
      ...toRefs(menuStyle)
    };
  },
  mounted() {
    this.initMenuHeight()
    // 侧边栏菜单定位
    window.onscroll = () => {
      console.log('scroll')
      this.initMenuHeight()
    }
    window.addEventListener('resize', () => {
      this.initMenuHeight()
    })

  },
  unmounted () {
    window.removeEventListener('resize', () => {
      this.initMenuHeight()
    })
  },
  methods: {
    initMenuHeight () {
      const domHeight = this.$refs.menuRef.getBoundingClientRect().height
      this.menuHeight = Math.max(domHeight, window.innerHeight - commonVars.logobarHeight) // navbar 64
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
      this.openKeys = []
    }
  }
});
</script>
<style scoped lang="stylus">
.side-menu-component
  border-right .5px solid #e8e8e8
  background #F0F2F5
  color rgba(0,0,0,.65)
  display inline-block
  z-index 2
  background #fff
  .menu_container
    position relative
  .iconfont
    font-size 26px
  .collapsed-btn
    // float right
    position absolute
    right -22px
    top 50%
    // top 270px
    width 45px
    height 54px
    border .5px solid #E8E8E8
    border-radius 50%
    background #F0F2F5
    color #000
    clip-path polygon(50% 0%, 100% 0%, 100% 42000%, 50% 50%)
    display flex
    justify-content flex-end
    align-items center
    padding-right 7px
    z-index 2
    &:hover
      cursor pointer
    .anticon
      font-size 12px
      color #1767E8
      transform rotate(180deg)
</style>
