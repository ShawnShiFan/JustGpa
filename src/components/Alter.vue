<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">修改密码</span>
    </div>
    <el-form label-width="100px" class="demo-ruleForm" v-bind:rules="rules" ref="ruleForm" v-bind:model="ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input type="text" auto-complete="off" v-model="ruleForm.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPwd">
        <el-input type="password" auto-complete="off" v-model="ruleForm.oldPwd" placeholder="请输入旧密码"></el-input>
      </el-form-item>
      <el-form-item label="输入新密码" prop="newPwd">
        <el-input type="password" auto-complete="off" v-model="ruleForm.newPwd" placeholder="新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="handleSubmit">提交</el-button>
        <el-button v-on:click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  // 进入路由时判断当前登录状态，已登录则跳转到首页
  data () {
    // 姓名验证
    let validatorName = function (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入账号'))
      } else if (!/^\d{12}$/.test(value)) {
        callback(new Error('账号默认为学号'))
      }  else {
        callback()
      }
    }
    // 密码验证
    let validatorPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      }else {
        callback()
      }
    }
    // 重复密码验证
    let validatorPass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入正确格式密码（推荐数字、符号、英文）'))
      }  else {
               callback()
      }
    }
    return {
      // 表单数据
      ruleForm: {
        name: '',
        oldPwd: '',
        newPwd: ''
      },
      // 验证规则
      rules: {
        name: [
          { validator: validatorName, trigger: 'blur' }
        ],
        oldPwd: [
          { validator: validatorPass, trigger: 'blur' }
        ],
        newPwd: [
          { validator: validatorPass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交函数
    handleSubmit () {
      // 验证表单
       var formData = JSON.parse(JSON.stringify(this.ruleForm))
       console.log(formData);
 this.$http.get('http://10.131.172.238:8080/gpa/changePwd.form?name='+formData.name+'&oldPwd='+formData.oldPwd+'&newPwd='+formData.newPwd,{  withCredentials : true}
        ).then(response => {
             console.log(response.data)
             // console.log('表单name为：'+formData.name+'密码为：'+formData.password)
              console.log(formData.name)
                 
                  if(response.data===true){

                    console.log('修改成功');

                   
                   this.$message({
                       showClose: true,
                       message: '修改成功，请重新登陆！',
                       type: 'success'
                    })
                   this.$router.push('/login')
                   return ;
              }else{
                 this.$message({
                       showClose: true,
                       message: '修改失败！',
                       type: 'error'
                    })
                  console.log('修改失败！');
                return ;
              }
            })

 
    },
    // 重置表单函数
    handleReset () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>
<style lang="css">
 .box-card{width: 400px; margin: 100px auto;}
</style>