<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">欢迎</div> -->
    <!--    <img class="homePage" src="https://srm.sdyanxitang.com/ELSServer_YXT/images/homePage.png" alt="">-->
    <h2 class="dashboard-title">供应商用户首页</h2>
    <p class="dashboard-content">列示系统公告、公司通告及站内通知；及时了解待办事项，回复采购、财务等业务人员提出的问题等。</p>
    <img class="dashboard-shuHome" src="@/assets/img/shu_home.png" alt="shu_home">

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.homePage {
  display: block;
  width: 688px;
  height: 695px;
  margin: 50px auto 0;
}

.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }

  &-shuHome {
    width: 1600px;
    margin-top: 30px;
  }
  &-title {
    font-size: 26px;
    color: #666666;
    font-weight: bold;
  }
  &-content {
    font-size: 16px;
    color: #696969;
    margin-bottom: 10px;
  }
}
</style>
