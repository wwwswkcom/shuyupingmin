(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fe5f28b"],{"035f":function(e,t,n){"use strict";n("9be2")},2017:function(e,t,n){"use strict";n("cafe")},"9be2":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"login-container"},[e._m(0),e._m(1),n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("p",{staticClass:"title"},[e._v("登录账号：")]),n("el-input",{ref:"loginname",staticClass:"custom-input-border",attrs:{placeholder:"请输入账号",name:"loginname",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.loginname,callback:function(t){e.$set(e.loginForm,"loginname",t)},expression:"loginForm.loginname"}}),n("p",{staticClass:"title"},[e._v("登录密码：")]),n("el-input",{key:e.passwordType,ref:"password",staticClass:"custom-input-border",attrs:{type:e.passwordType,placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),n("p",[e._v("用户类型：供应商")]),n("el-button",{staticStyle:{width:"80px","margin-bottom":"30px","background-color":"#5774b0"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录 ")])],1)],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("img",{staticStyle:{"border-width":"0",height:"45px",width:"200px"},attrs:{id:"imgLogo",src:"http://60.217.250.254:8765/Images/Logo/4009378885960.png"}}),n("div",{staticClass:"nav-title"},[n("h1",[e._v("SAP业务协作平台")])]),n("div",{staticClass:"right-menu"},[n("span",{staticStyle:{position:"relative",display:"block"}},[e._v(" 欢迎"),n("b"),e._v("使用！ ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-container"},[n("h2",{staticClass:"title"},[e._v("登录")]),n("p",{staticClass:"content"},[e._v("请输入登录账号和密码；如果您遗忘或丢失了帐户或密码，请与管理人员联系。")])])}],a=n("5f87"),r=n("cd4a"),s={name:"Login",components:{Navbar:r["b"]},data:function(){var e=function(e,t,n){n()},t=function(e,t,n){t.length<4||n()};return{loginForm:{loginname:"",password:""},loginRules:{loginname:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,"1085"===e.loginForm.loginname?"hbs202401"===e.loginForm.password?(e.loading=!1,Object(a["c"])("1111"),sessionStorage.setItem("ldzloginname",e.loginForm.loginname),e.$router.push({path:e.redirect||"/"})):(e.loading=!1,e.$message({message:"个人账号或密码错误",type:"error"})):(e.loading=!1,e.$message({message:"企业账号错误",type:"error"}))}))}}},l=s,c=(n("2017"),n("eef6"),n("035f"),n("2877")),d=Object(c["a"])(l,o,i,!1,null,"29073ce4",null);t["default"]=d.exports},ab28:function(e,t,n){},cafe:function(e,t,n){},eef6:function(e,t,n){"use strict";n("ab28")}}]);