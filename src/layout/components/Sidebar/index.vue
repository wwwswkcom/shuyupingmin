<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          class="custom-menu"
          mode="horizontal"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style>
/* 设置自定义菜单样式 */
.custom-menu {
  --menu-line-color: #f00; /* 修改为你想要的颜色 */
  --menu-line-height: 2px; /* 修改为你想要的高度 */
}

/* 覆盖Element UI的默认分隔线样式 */
.custom-menu .el-menu-item {
  position: relative;
}

.custom-menu .el-menu-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--menu-line-height);
  background-color: var(--menu-line-color);
  transition: all 0.3s;
}

.custom-menu .el-menu-item:last-child::after {
  display: none; /* 移除最后一个项目的分隔线 */
}
</style>
