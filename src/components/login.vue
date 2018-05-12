<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">登录</span>
    </div>
    <el-form  label-width="100px" class="demo-ruleForm" v-bind:rules="rules" ref="ruleForm" v-bind:model="ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input type="text" auto-complete="off" v-model="ruleForm.name" placeholder="请输入账号" @keyup.enter.native="handleSubmit"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" auto-complete="off" v-model="ruleForm.pwd" placeholder="请输入密码"  @keyup.enter.native="handleSubmit" ></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 点击进行登录提交 -->
        <el-button type="primary" v-on:click="handleSubmit"  >登录</el-button>
        <!-- 点击重置表单 -->
        <el-button v-on:click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    // 验证登录名
    let validatorname = function (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入账号'))
      } else if (!/^\d{12}$/.test(value)) {
        callback(new Error('账号默认为学号'))
      } else {
        callback()
      }
    }
    // 验证密码
    let validatorPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      }/* else if (!/^\d{6}$/.test(value)) {
        callback(new Error('密码默认为学号后六位'))
      } */
      else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { validator: validatorname, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatorPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 表单提交
    handleSubmit () {
      // 验证表单
       let formData = JSON.parse(JSON.stringify(this.ruleForm))
       console.log(formData);
/*   //本地实现校验
    this.$http.get('/static/user.json',formData).then(response => {
       // console.log(response.data);
       // console.log('表单name为：'+formData.name+'密码为：'+formData.password)
        //console.log(formData.name)
             for(var p in response.data){
              console.log(response.data[p].name) 
              console.log(response.data[p].password) 
             if(formData.name===response.data[p].name&&formData.password === response.data[p].password){
              console.log('验证通过');
             this.$router.push('/SearchGPA')
             return ;
        }else{
           this.$message({
                 showClose: true,
                 message: '验证失败！',
                 type: 'error'
              })
            console.log('验证失败');
          return ;
        }
       }
      })*/
         let form = new FormData();

        form.append("name",formData.name);
/*         
   let url ='http://localhost:8080/gpa/login.form';
  
     this.$http( { 
      method: 'post',
      url:url,
      body:{
         form
      },
        headers:
              {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
      }
   
      ).then((response)=>{ console.log(response.data)
             // console.log('表单name为：'+formData.name+'密码为：'+formData.password)
              console.log(formData.name)
                 
                  if(response.data===true){

                    console.log('验证通过');
                   this.$router.push('/SearchGPA')
                   return ;
              }else{
                 this.$message({
                       showClose: true,
                       message: '验证失败！',
                       type: 'error'
                    })
                  console.log('验证失败');
                return ;
              }
            })
     */
/*  
        var init = {
                  method: 'POST',
                  mode:'cors',
                  cache: 'default',
                  headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
                    'token': 'Cl5bxjcUt+gDtIDJY4wDgZKNoYdMcgjKQQKXga/UKtmpfniucZTeKaf5mUjsm7uc'
                  },
            body:{
                  name:formData.name,
                  pwd:formData.pwd
                          }
                  };
              
       fetch(url , init).then((response) => {  
                   console.log(response.data)
                })*/
 
/*    fetch('http://localhost:8080/gpa/login.form',{

                        method:'post',

                        body:formData,

                        credentials: 'include'

                    }).then((response)=>{

                                   if(response.data===true){

                              console.log('验证通过');
                             this.$router.push('/SearchGPA')
                             return ;
                          }else{
                           this.$message({
                                 showClose: true,
                                 message: '验证失败！',
                                 type: 'error'
                              })
                            console.log('验证失败');
                          return ;
                          }

                              });*/



this.$http.get('http://localhost:8080/gpa/login.form?name='+formData.name+'&pwd='+formData.pwd,{  withCredentials : true}
        ).then(response => {
             console.log(response.data)
             // console.log('表单name为：'+formData.name+'密码为：'+formData.password)
              console.log(formData.name)
                 
                  if(response.data===true){

                    console.log('验证通过');
                   this.$router.push('/SearchGPA')
                   return ;
              }else{
                 this.$message({
                       showClose: true,
                       message: '验证失败！',
                       type: 'error'
                    })
                  console.log('验证失败');
                return ;
              }
            })
    
  /*   
    this.$refs.ruleForm.validate(valid => {
        if (valid) {
           alert("登陆成功！")
          this.$router.push('/SearchGPA')
        } else {
          console.log('验证不通过')
           alert("登陆失败！")

        }
      })*/


    },
    // 重置表单
    handleReset () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="css">
 .box-card{width: 400px; margin: 100px auto;}
</style>
