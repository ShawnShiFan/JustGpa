<template>
 <div class="GpaMain">
  <h4>欢迎登录</h4>
  <div>
 <el-select v-model="value" placeholder="请选择学期">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
    <el-button 
      type="primary" 
      icon="el-icon-search" 
      @click="grade"
    >查询成绩
    </el-button>
    <el-tooltip placement="top">
    <div slot="content">无挂科记录同学绩点准确<br/>出现过挂科重修的同学可能会存在误差</div>
    <el-button 
     type="primary" 
     icon="el-icon-search"
     @click="search"     
    >绩点GPA
    </el-button>
    </el-tooltip>
  </div>
  <div>
<el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="xH"
      label="学号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="xM"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="kKXQ"
      label="学期"
      width="180">
    </el-table-column>
      <el-table-column
      prop="kCH"
      label="课程号"
      width="180">
    </el-table-column>
      <el-table-column
      prop="kCM"
      label="课程名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="zCJ"
      label="成绩"
      width="180"
      >
    </el-table-column>
       <el-table-column
      prop="xF"
      label="学分"
     >
    </el-table-column>
  </el-table>
  </div>
 </div>

</template>

<script>
/*import GradeTable from './GradeTable'*/
 export default {
/* components: {GradeTable},*/
 
data() {
      return {
         options: [{
                value: '2015-2016-1',
                label: '2015-2016第一学期'
              }, {
                value: '2015-2016-2',
                label: '2015-2016第二学期'
              }, {
                value: '2016-2017-1',
                label: '2016-2017第一学期'
              }, {
                value: '2016-2017-2',
                label: '2016-2017第二学期'
              }, {
                value: '2017-2018-1',
                label: '2017-2018第一学期'
              },
               {
                value: '2017-2018-2',
                label: '2017-2018第二学期'
               }
              ],
              value: '',
        tableData: [/*{
                xH: '158111545224',
                xM: '老王',
                kKXQ: '2016-2017第二学期',
                kCH:'01S20010a',
                kCM:'大学物理2',
                zCJ:'80',
                xF:'4'

              }, {
                xH: '158111545224',
                xM: '老王',
                kKXQ: '2016-2017第二学期',
                kCH:'55S20001a',
                kCM:'大学物理2',
                zCJ:'80',
                xF:'4'

              }, {
                xH: '158111545224',
                xM: '老王',
                kKXQ: '2016-2017第二学期',
                kCH:'55S20001a',
                kCM:'大学物理2',
                zCJ:'80',
                xF:'4'
              }, {
                xH: '158111545224',
                xM: '老王',
                kKXQ: '2016-2017第二学期',
                kCH:'55S20001a',
                kCM:'大学物理2',
                zCJ:'80',
                xF:'4'
              }*/
              ]
            }
    },

  
    methods:{
//查询绩点
      search() {
          var term =this.value;
          this.$http.get('http://localhost:8080/gpa/computeGPA.form'+"?term="+term,{  withCredentials : true}).then(response => {

         // console.log(response.data);
          this.$message({
          message: term +'  平均绩点为：'+response.data,
          type: 'success'
        })
        })

    
      },
      grade(){
//查询成绩
          var term =this.value;
          this.$http.get('http://localhost:8080/gpa/getScore.form'+"?term="+term,{  withCredentials : true}).then(response => {
            //console.log(response.data);
            this.tableData = response.data
        })

          this.$message({
          message: term,
          type: 'success'
        })
      }
    }
  
  }
</script>
