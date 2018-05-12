<template>
  <div class="employment">


    <el-tabs v-model="currentTab1">
      <el-tab-pane
        v-for="(item1, index1) in tabs"
        :key="index1"
        :label="item1.label"
        :name="index1.toString()"
        >

        <el-tabs v-model="currentTab2" type="card">
          <el-tab-pane
            v-for="(item2, index2) in item1.children"
            :key="index2"
            :label="item2.label"
            :name="item2.name">
            <Panel :url="item2.url"
            :label="item2.name"
            :currentTab="currentTab2"
            :settings="item2.settings"
            :toolbox="item2.toolbox"
            :type="item2.type"
            ></Panel>
            <Table 
            :url="item2.url"
            :label="item2.name"
            :currentTab="currentTab2"
            :type="item2.type"
            >
            </Table>
            <DirectionTable 
            :url="item2.url"
            :label="item2.name"
            :currentTab="currentTab2"
            :type="item2.type"
            >
            </DirectionTable>
            <!-- <ve-chart
              :data="item2.data"
              :settings="{type: item2.type}"
              :ref="'chart'+item2.name">
            </ve-chart> -->
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import 'echarts/lib/component/toolbox'


  export default {
    components: {},
    data() {
      return {
        tabs: [],
        currentTab1: '0',
        currentTab2: '0_0',
        i2data: []
      }
    },
    methods: {
     /* fetchdata() {
         fetch('http://localhost:8080/enrollment_and_employment_analysis/ajaxStatistics/'+ this.url ,{method: 'POST'}).then(resp=>resp.json()).then(console.log).catch(console.error)
       },*/
      getTabs() {
        this.$http.get('/static/tabs.json').then(response => {
          this.tabs = response.data
        })
      },
    },
    watch: {
      currentTab1(ref) {
        this.currentTab2 = ref + '_0'
      },
      // currentTab2(ref) {
      //   this.$nextTick(_ => {
      //     this.$refs['chart' + ref][0].echarts.resize()
      //   })
      // }
    },
    mounted() {
      // this.fetchdata()
      this.getTabs()
    }
  }
</script>
