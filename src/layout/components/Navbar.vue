<template>
  <div class="navbar">

    <img id="imgLogo" src="http://60.217.250.254:8765/Images/Logo/4009378885960.png"
         style="border-width:0px;height:45px;width:200px;">
    <div class="nav-title">
      <h1>SAP业务协作平台</h1>
    </div>
    <div class="right-menu">
      <span style="position: relative; display: block;">
                            欢迎<b>【西藏神威药业有限公司】</b>使用！
          <a href="#" name="header" @click=logout style="margin-left: 20px;">退 出</a>
        </span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      // await this.$store.dispatch('user/logout')
      sessionStorage.removeItem('ldzloginname');
      sessionStorage.removeItem('loginperson');
      sessionStorage.removeItem('ldz_admin_token');
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  position: relative;
  background: #465C71;
  flex-direction: row;
  display: flex; /* 启用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */

  .nav-title {
    flex-grow: 1;
    /*font-size: 1.1em;*/
    display: block;
    text-align: left;
    color: White;
    margin-left: 30px;
  }

  .right-menu {
    float: right;
    /*font-size: 1.1em;*/
    display: block;
    text-align: right;
    color: White;
    margin-right: 30px;
  }
}

</style>
