<template>
  <div class="container">
    <div class="login-container">
      <div class="navbar">

        <img id="imgLogo" src="http://60.217.250.254:8765/Images/Logo/4009378885960.png"
             style="border-width:0;height:45px;width:200px;" >
        <div class="nav-title">
          <h1>SAP业务协作平台</h1>
        </div>
        <div class="right-menu">
      <span style="position: relative; display: block;">
                            欢迎<b></b>使用！
        </span>
        </div>
      </div>
      <div class="title-container">
        <h2 class="title">登录</h2>
        <p class="content">请输入登录账号和密码；如果您遗忘或丢失了帐户或密码，请与管理人员联系。</p>
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
               label-position="left">
        <p class="title">登录账号：</p>
<!--        <el-form-item prop="loginname">-->

          <el-input
              ref="loginname"
              v-model="loginForm.loginname"
              placeholder="请输入账号"
              name="loginname"
              type="text"
              tabindex="1"
              auto-complete="on"
              class="custom-input-border"
          />
<!--        </el-form-item>-->
        <p class="title">登录密码：</p>
<!--        <el-form-item prop="password">-->

          <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              class="custom-input-border"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
          />
<!--          <span class="show-pwd" @click="showPwd">-->
<!--          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>-->
<!--        </span>-->
<!--        </el-form-item>-->

        <p >用户类型：供应商</p>

        <el-button :loading="loading" type="primary" style="width:80px;margin-bottom:30px;  background-color: #5774b0;"
                   @click.native.prevent="handleLogin">登录
        </el-button>

        <!-- <div class="tips">
          <span style="margin-right:20px;">loginname: admin</span>
          <span> password: any</span>
        </div> -->

      </el-form>
    </div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
// import {login} from "@/api/user"
import {setToken} from '@/utils/auth'
import {Navbar} from "@/layout/components";

export default {
  name: 'Login',
  components: {Navbar},
  data() {
    const validateUsername = (rule, value, callback) => {
      callback()
    }

    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        // callback(new Error('密码输入错误'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        loginname: '',
        password: '',
      },
      loginRules: {
        loginname: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {

    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.loginForm.loginname === "1085") {
            if (this.loginForm.password === "hbs202401") {
              this.loading = false
              setToken('1111');
              sessionStorage.setItem('ldzloginname', this.loginForm.loginname);
              this.$router.push({path: this.redirect || '/'})

            } else {
              this.loading = false
              this.$message({
                message: '个人账号或密码错误',
                type: 'error'
              });
            }

          } else {
            this.loading = false
            this.$message({
              message: '企业账号错误',
              type: 'error'
            });
          }


          // login(this.loginForm).then((res)=>{
          //   if(res.code == "0"){
          //       setToken('1111');
          //       this.$router.push({ path: this.redirect || '/' })
          //       this.loading = false
          //     }
          //   });
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #f5f5f5;
$light_gray: #000;
$cursor: #000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: #000;
  }

}

.login-container .el-form-item {
  background: $bg !important;
}


/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: #000;
      height: 47px;
      caret-color: $cursor;
      background: transparent;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: #000 !important;
        // color: #000;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-size: 100% 100%;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 30px 35px 0;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    margin-left: 20px;

    .title {
      font-size: 26px;
      color: black;
      font-weight: bold;
    }
    .content {
      font-size: 16px;
      color: #696969;
      margin-bottom: 10px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

<style>


/* 定义外部容器 */
.container {
  position: relative;
  min-height: 100%;
  width: 100%;
}


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


/* 修改边框的选择器需要匹配你的组件结构 */
.custom-input-border  {
  border: 1px solid #d3dce6; /* 修改边框颜色 */
  width: 200px; /* 修改宽度 */
}

</style>
