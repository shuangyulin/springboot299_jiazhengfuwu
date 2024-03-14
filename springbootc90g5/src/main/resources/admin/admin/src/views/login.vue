<template>
  <div>
        <div class="container loginIn">

      <div :class="2 == 1 ? 'left' : 2 == 2 ? 'left center' : 'left right'">
        <el-form class="login-form" label-position="left" :label-width="1 == 3 || 1 == 2 ? '30px': '0px'">
          <div class="title-container"><h3 class="title">家政服务平台的设计与实现登录</h3></div>
          <el-form-item :style='{"padding":"0 0 0 30px","boxShadow":"0 0 6px rgba(0,0,0,0)","margin":"0px 0px 12px 15px","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(144, 238, 144, 0)","borderRadius":"0","borderWidth":"0","width":"500px","borderStyle":"solid","height":"auto"}' :label="1 == 3 ? '用户名' : ''" :class="'style'+1">
            <span v-if="1 != 3" class="svg-container" style="
			color:rgba(74, 50, 22, 1);
			line-height:30px;
			font-size:16px;
			width:30px;
			padding:0;
			margin:8px 0px 0px 20px;
			radius:0;
			border-width:0;
			border-style:solid;
			border-color:rgba(0,0,0,0);
			background-color:rgba(0, 206, 209, 0);
			box-shadow:0 0 6px rgba(0,0,0,0);
			}"><svg-icon icon-class="user" /></span>
            <el-input placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username" />
          </el-form-item>
          <el-form-item :style='{"padding":"0 0 0 30px","boxShadow":"0 0 6px rgba(0,0,0,0)","margin":"0px 0px 12px 15px","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(144, 238, 144, 0)","borderRadius":"0","borderWidth":"0","width":"500px","borderStyle":"solid","height":"auto"}' :label="1 == 3 ? '密码' : ''" :class="'style'+1">
            <span v-if="1 != 3" class="svg-container" style="color:rgba(74, 50, 22, 1);
			line-height:30px;
			font-size:16px;
			width:30px;
			padding:0;
			margin:8px 0px 0px 20px;
			radius:0;
			border-width:0;
			border-style:solid;
			border-color:rgba(0,0,0,0);
			background-color:rgba(0, 206, 209, 0);
			box-shadow:0 0 6px rgba(0,0,0,0);"><svg-icon icon-class="password" /></span>
            <el-input placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password" />
          </el-form-item>
          <el-form-item :style='{"padding":"0 0 0 30px","boxShadow":"0 0 6px rgba(0,0,0,0)","margin":"0px 0px 12px 15px","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(144, 238, 144, 0)","borderRadius":"0","borderWidth":"0","width":"500px","borderStyle":"solid","height":"auto"}' v-if="1 == '1'" class="code" :label="1 == 3 ? '验证码' : ''" :class="'style'+1">
            <span v-if="1 != 3" class="svg-container" style="color:rgba(74, 50, 22, 1);
			line-height:30px;
			font-size:16px;
			width:30px;
			padding:0;
			margin:8px 0px 0px 20px;
			radius:0;
			border-width:0;
			border-style:solid;
			border-color:rgba(0,0,0,0);
			background-color:rgba(0, 206, 209, 0);
			box-shadow:0 0 6px rgba(0,0,0,0);"><svg-icon icon-class="code" /></span>
            <el-input placeholder="请输入验证码" name="code" type="text" v-model="rulesForm.code" />
            <div class="getCodeBt" @click="getRandCode(4)">
              <span v-for="(item, index) in codes" :key="index" :style="{color:'rgba(255, 255, 255, 1)',transform:item.rotate,fontSize:'16px'}">{{ item.num }}</span>
            </div>
			
          </el-form-item>
          <el-form-item v-if="roles.length>1" label="角色" prop="loginInRole" class="role" style="display: flex;align-items: center;">
            <el-radio
              v-for="item in roles"
              v-bind:key="item.roleName"
              v-model="rulesForm.role"
              :label="item.roleName"
            >{{item.roleName}}</el-radio>
          </el-form-item>
          <el-form-item v-if="roles.length==1" label=" " prop="loginInRole" class="role" style="display: flex;align-items: center;">
          </el-form-item>
          <el-button type="primary" @click="login()" class="loginInBt">{{'1' == '1' ? '登录' : 'login'}}</el-button>
          <el-form-item class="setting">
            <!-- <div style="color:${template2.back.login.loginInSettingFontColor}" class="reset">修改密码</div> -->
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>

import menu from "@/utils/menu";

export default {
  data() {
    return {
      rulesForm: {
        username: "",
        password: "",
        role: "",
        code: '',
      },
      menus: [],
      roles: [],
      tableName: "",
      codes: [{
        num: 1,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 2,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 3,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 4,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      }],
    };
  },
  mounted() {
	let menus = menu.list();
	this.menus = menus;
    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
            this.roles.push(this.menus[i])
      }
    }
  },
  created() {
    this.getRandCode()
	
  },
  methods: {
    register(tableName){
      this.$storage.set("loginTable", tableName);
      this.$router.push({path:'/register'})
    },
    // 登陆
    login() {
      let code = ''
      for(let i in this.codes) {
        code += this.codes[i].num
      }
	  if ('1' == '1' && !this.rulesForm.code) {
	     this.$message.error("请输入验证码");
	    return;
	  }
      if ('1' == '1' && this.rulesForm.code.toLowerCase() != code.toLowerCase()) {
         this.$message.error("验证码输入有误");
		this.getRandCode()
        return;
      }
      if (!this.rulesForm.username) {
         this.$message.error("请输入用户名");
        return;
      }
      if (!this.rulesForm.password) {
         this.$message.error("请输入密码");
        return;
      }
      if(this.roles.length>1) {
          if (!this.rulesForm.role) {
             this.$message.error("请选择角色");
            return;
          }
          let menus = this.menus;
          for (let i = 0; i < menus.length; i++) {
            if (menus[i].roleName == this.rulesForm.role) {
              this.tableName = menus[i].tableName;
            }
          }
      } else {
          this.tableName = this.roles[0].tableName;
          this.rulesForm.role = this.roles[0].roleName;
      }

      this.$http({
        url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
        method: "post"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$storage.set("Token", data.token);
          this.$storage.set("role", this.rulesForm.role);
          this.$storage.set("sessionTable", this.tableName);
          this.$storage.set("adminName", this.rulesForm.username);
          this.$router.replace({ path: "/index/" });
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    getRandCode(len = 4){
      this.randomString(len)
    },
    randomString(len = 4) {
      let chars = [
          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
          "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
          "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
          "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
          "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
          "3", "4", "5", "6", "7", "8", "9"
      ]
      let colors = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
      let sizes = ['14', '15', '16', '17', '18']

      let output = [];
      for (let i = 0; i < len; i++) {
        // 随机验证码
        let key = Math.floor(Math.random()*chars.length)
        this.codes[i].num = chars[key]
        // 随机验证码颜色
        let code = '#'
        for (let j = 0; j < 6; j++) {
          let key = Math.floor(Math.random()*colors.length)
          code += colors[key]
        }
        this.codes[i].color = code
        // 随机验证码方向
        let rotate = Math.floor(Math.random()*60)
        let plus = Math.floor(Math.random()*2)
        if(plus == 1) rotate = '-'+rotate
        this.codes[i].rotate = 'rotate('+rotate+'deg)'
        // 随机验证码字体大小
        let size = Math.floor(Math.random()*sizes.length)
        this.codes[i].size = sizes[size]+'px'
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.loginIn {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background-image: url(http://codegen.caihongy.cn/20211105/950630b98de94b99b8a37c64938c61a3.jpg);
    

  .loginInBt {
    width: 180px;
    height: 330px;
    line-height: 330px;
    margin: -250px 0px 0px 555px;
    padding: 0;
    color: rgba(255, 255, 255, 1);
    font-size: 22px;
    border-radius: 0;
    border-width: 5px 5px 5px 0px;
    border-style: dotted;
    border-color: rgba(255, 255, 255, 1);
    background-color: rgba(74, 50, 22, 1);
    box-shadow: 0px 0px 0px 15px rgba(74, 50, 22, 1);
  }
  .register {
    width: 90px;
    height: 22px;
    line-height: 22px;
    margin: -70px 0 0 10px;
    padding: 0px;
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
    border-radius: 0;
    border-width: 0;
    border-style: dotted;
    border-color: rgba(74, 50, 22, 1);
    background-color: rgba(144, 238, 144, 0);
    box-shadow: 0 0 6px rgba(255,0,0,0);
	cursor: pointer;
  }
  .reset {
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: -70px 200px 0px 0px;
    padding: 0;
    color: rgba(255, 255, 255, 0);
    font-size: 14px;
    border-radius: 0;
    border-width: 0;
    border-style: solid;
    border-color: rgba(64, 158, 255, 1);
    background-color: rgba(255, 215, 0, 0);
    box-shadow: 0 0 6px rgba(255,0,0,0);
  }


  .left {
    position: absolute;
    left: 0;
    top: 0;
	box-sizing: border-box;
	width: 540px;
	height: 330px;
	margin: 25px 0px 0px -105px;
	padding: 0;
	border-radius: 0;
	border-width: 5px 0px 5px 5px;
	border-style: dotted;
	border-color: rgba(74, 50, 22, 1);
	background-color: rgba(253, 253, 229, 1);
	box-shadow: 0px 0px 0px 15px  rgba(253, 253, 229, 1);

    .login-form {
      background-color: transparent;
      width: 100%;
      right: inherit;
      padding: 0;
      box-sizing: border-box;
      display: flex;
	  position: initial;
      justify-content: center;
      flex-direction: column;
    }

    .title-container {
      text-align: center;
      font-size: 24px;

      .title {
        width: 420px;
        line-height: 0;
        margin: 80px 0px 40px 45px;
        padding: 15px;
        color: rgba(74, 50, 22, 1);
        font-size: 16px;
        border-radius: 0;
        border-width: 0;
        border-style: solid;
        border-color: rgba(74, 50, 22, 1);
        background-color: rgba(255, 215, 0, 0);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);
      }
    }

    .el-form-item {
      position: relative;

      & /deep/ .el-form-item__content {
        line-height: initial;
      }

	  & /deep/ .el-radio__label {
	    width: auto;
	    height: 14px;
	    line-height: 14px;
	    margin: 0;
	    padding: 0 0 0 10px;
	    color: rgba(0, 0, 0, 1);
	    font-size: 14px;
	    border-radius: 0;
	    border-width: 0;
	    border-style: solid;
	    border-color: rgba(255, 255, 255, 0);
	    background-color: rgba(253, 253, 229, 1);
	    box-shadow: 0 0 6px rgba(255,0,0,0);
	    text-align: left;
	  }
	  & /deep/ .el-radio.is-checked .el-radio__label {
	    width: auto;
	    height: 14px;
	    line-height: 14px;
	    margin: 0;
	    padding: 0 0 0 10px;
	    color: rgba(255, 215, 0, 1);
	    font-size: 14px;
	    border-radius: 0;
	    border-width: 0;
	    border-style: solid;
	    border-color: rgba(255, 255, 255, 0);
	    background-color: rgba(255, 255, 255, 0);
	    box-shadow: 0 0 6px rgba(255,0,0,0);
	    text-align: left;
	  }
	  & /deep/ .el-radio__inner {
	    width: 14px;
	    height: 14px;
	    margin: 0;
	    padding: 0;
	    border-radius: 100%;
	    border-width: 1px;
	    border-style: solid;
	    border-color: rgba(74, 50, 22, 1);
	    background-color: rgba(74, 50, 22, 1);
	    box-shadow: 0 0 6px rgba(255,0,0,0);
	  }
	  & /deep/ .el-radio.is-checked .el-radio__inner {
	    width: 14px;
	    height: 14px;
	    margin: 0;
	    padding: 0;
	    border-radius: 100%;
	    border-width: 1px;
	    border-style: solid;
	    border-color: rgba(0, 0, 0, 1);
	    background-color: rgba(0, 0, 0, 1);
	    box-shadow: 0 0 6px rgba(255,0,0,0);
	  }

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        padding: 0;
        line-height: 40px;
        width: 30px;
        text-align: center;
      }

      .el-input {
        display: inline-block;
        // height: 40px;
        width: 100%;

        & /deep/ input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          padding: 0 15px 0 30px;
          color: #fff;
          height: 40px;

		  width: 260px;
		  height: 30px;
		  line-height: 30px;
		  margin: 0px 0px  5px  70px;
		  padding: 0px auto 0px;
		  color: rgba(0, 0, 0, 1);
		  font-size: 16px;
		  border-radius: 0;
		  border-width: 0px 0px 3px 0px;
		  border-style: dotted;
		  border-color: rgba(74, 50, 22, 1);
		  background-color: rgba(255, 215, 0, 0);
		  box-shadow: 0px 0px 0px 0px rgba(32,33,36, 1);
        }
      }

    }


  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
  }

  .right {
    position: absolute;
    left: inherit;
    right: 0;
    top: 0;
  }

  .code {
    .el-form-item__content {
      position: relative;

      .getCodeBt {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        line-height: 40px;
        width: 100px;
        background-color: rgba(51,51,51,0.4);
        color: #fff;
        text-align: center;
        border-radius: 0 4px 4px 0;
        height: 40px;
        overflow: hidden;
		padding: 0;
		margin: 0;
		width: 100px;
        height: 30px;
        line-height: 30px;
        border-radius: 0;
        border-width: 0;
        border-style: solid;
        border-color: rgba(64, 158, 255, 1);
        background-color: rgba(51, 51, 51, 0.4);
        box-shadow: 0px 0px 0px 0px rgba(51, 51, 51, 0.4);

        span {
          padding: 0 5px;
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
        }
      }

      .el-input {
        & /deep/ input {
          padding: 0 130px 0 30px;
        }
      }
    }
  }

  .setting {
    & /deep/ .el-form-item__content {
      // padding: 0 15px;
      box-sizing: border-box;
      line-height: 32px;
      height: 32px;
      font-size: 14px;
      color: #999;
      margin: 0 !important;
	  display: flex;

      .register {
        // float: left;
        // width: 50%;
		text-align: center;
      }

      .reset {
        float: right;
        width: 50%;
        text-align: right;
      }
    }
  }

  .style2 {
    padding-left: 30px;

    .svg-container {
      left: -30px !important;
    }

    .el-input {
      & /deep/ input {
        padding: 0 15px !important;
      }
    }
  }

  .code.style2, .code.style3 {
    .el-input {
      & /deep/ input {
        padding: 0 115px 0 15px;
      }
    }
  }

  .style3 {
    & /deep/ .el-form-item__label {
      padding-right: 6px;
      height: 30px;
      line-height: 30px;
    }

    .el-input {
      & /deep/ input {
        padding: 0 15px !important;
      }
    }
  }
  
  & /deep/ .el-form-item__label {
	width: 30px;
	height: 30px;
	line-height: 30px;
	margin: 8px 0px 0px 20px;
	padding: 0;
	color: rgba(74, 50, 22, 1);
	font-size: 16px;
	border-radius: 0;
	border-width: 0;
	border-style: solid;
	border-color: rgba(0,0,0,0);
	background-color: rgba(0, 206, 209, 0);
	box-shadow: 0 0 6px rgba(0,0,0,0);
  }

  .role {
    & /deep/ .el-form-item__label {
      width: 56px !important;
      height: 38px;
      line-height: 38px;
      margin: 0px 0px 0px 60px;
      padding: 0;
      color: rgba(0, 0, 0, 1);
      font-size: 14px;
      border-radius: 0;
      border-width: 0;
      border-style: solid;
      border-color: rgba(64, 158, 255, 1);
      background-color: rgba(255, 215, 0, 0);
      box-shadow: 0 0 6px rgba(255,0,0,0);
      text-align: center;
    }

    & /deep/ .el-radio {
      margin-right: 12px;
    }
  }
}
</style>
