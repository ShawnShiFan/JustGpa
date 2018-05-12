<template>
  <div id="app" class="m-index">
    <div class="nav">
      <router-link to="/login"><el-button type="danger">登录</el-button></router-link>
      <router-link to="/Alter"><el-button type="warning">修改密码</el-button></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="css">
/*.m-index{ width: 400px; margin: 100px auto; }*/
.m-index .nav{ line-height: 50px; margin-bottom: 10px; }
</style>
