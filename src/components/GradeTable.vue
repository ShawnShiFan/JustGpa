<template>
  <div class="GradeTable">
 <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="XH"
      label="学号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="XM"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="KKXQ"
      label="学期"
      width="180">
    </el-table-column>
      <el-table-column
      prop="KCH"
      label="课程号"
      width="180">
    </el-table-column>
      <el-table-column
      prop="KCM"
      label="课程名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="ZCJ"
      label="成绩"
      width="180"
      >
    </el-table-column>
       <el-table-column
      prop="XF"
      label="学分"
     >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
 
     data() {
      return {
        tableData: [{
          XH: '158111545224',
          XM: '老王',
          KKXQ: '2016-2017第二学期',
          KCH:'01S20010a',
          KCM:'大学物理2',
          ZCJ:'80',
          XF:'4'

        }, {
          XH: '158111545224',
          XM: '老王',
          KKXQ: '2016-2017第二学期',
          KCH:'55S20001a',
           KCM:'大学物理2',
          ZCJ:'80',
           XF:'4'

        }, {
          XH: '158111545224',
          XM: '老王',
          KKXQ: '2016-2017第二学期',
          KCH:'55S20001a',
          KCM:'大学物理2',
          ZCJ:'80',
          XF:'4'
        }, {
          XH: '158111545224',
          XM: '老王',
          KKXQ: '2016-2017第二学期',
          KCH:'55S20001a',
          KCM:'大学物理2',
          ZCJ:'80',
          XF:'4'
        }]
      }
    },
    methods:{
    }
}
</script>
