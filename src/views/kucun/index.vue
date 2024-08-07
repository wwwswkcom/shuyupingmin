<template>
  <div class="app-container">
<!--    <commonForm :inline="true" :data="getInfoData" :formConfig="formConfig">-->
<!--    </commonForm>-->
    <JsonExcel
        v-if="total > 0"
        class = "export-excel-wrapper"
        :data = "downloaddata"
        :fields = "json_fields"
        name = "商品库存.xls">
      <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
      <el-button type="primary" size="small">导出EXCEL</el-button>
    </JsonExcel>
    <!-- <el-upload action="" :auto-upload="false" :on-change="upload" :limit="1">
      <el-button size="mini" type="success">上传文件</el-button>
    </el-upload> -->
    <el-table
        :data="tabData"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        class="forms"
    >
      <el-table-column
          prop="货号"
          label="货号"
      />
      <el-table-column
          prop="品名"
          label="品名"
      />
      <el-table-column
          prop="规格"
          label="规格"
      />
      <el-table-column
          prop="单位"
          label="单位"
      />
      <el-table-column
          prop="公司编码"
          label="公司编码"
      />
      <el-table-column prop="公司名称" label="公司名称"/>
      <el-table-column label="公司库存" prop="公司库存e"/>
      <el-table-column label="生产批号"  prop="生产批号"/>


    </el-table>
    <!--分页器-->
    <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="getInfoData.offset"
        :limit.sync="getInfoData.limit"
        @pagination="gitList"
    />
  </div>
</template>

<script>
import * as XLSX from 'xlsx/xlsx.mjs'
import commonForm from "@/components/CommonForm";
import { saveAs } from 'file-saver';
import pagination from "@/components/Pagination";
import JsonExcel from 'vue-json-excel'
export default {
  components:{
    commonForm,
    pagination,
    JsonExcel
  },
  data() {
    return {
      json_fields: {
        "货号": "货号",    //常规字段
        "品名": "品名",    //常规字段
        "规格": "规格",    //常规字段
        "单位": "单位",    //常规字段
        "公司编码": "公司编码",    //常规字段
        "公司名称": "公司名称",
        "公司库存": "公司库存", //常规字段
        "生产批号": "生产批号",    //常规字段
      },
      tabData:[],
      alldata:[],
      downloaddata:[],
      total:0,
      getInfoData: {
        limit: 10,
        offset: 1,
        startDelTime: [],
        startStartTime:'',
        endStartTime:'',
      },
      formConfig: {
        operate: [
          {
            name: "搜索",
            value: "primary",
            type: "button",
            handleClick: this.gitList,
            authBtn: true,
          },
        ],
      },
    }
  },
  mounted(){
    this.readWorkbookFromRemoteFile('https://wwwswkcom.github.io/shuyupingmin-data/漱玉平民库存.xls');
  },
  methods: {
    clearInput(){
      this.getInfoData = {
        limit: 10,
        offset: 1,
        startDelTime: [],
        startStartTime:'',
        endStartTime:'',
      }
    },
    readWorkbookFromRemoteFile: function (url) {

      var xhr = new XMLHttpRequest()
      xhr.open('get', url, true)
      xhr.responseType = 'arraybuffer'
      let _this = this
      xhr.onload = (e) => {
        if (xhr.status === 200) {
          var data = new Uint8Array(xhr.response)

          const workbook = XLSX.read(data, {
            type: 'array'
          })
          const wsname = workbook.SheetNames[0]// 取第一张表
          this.alldata= XLSX.utils.sheet_to_json(workbook.Sheets[wsname])// 生成json表格内容
          console.log(this.alldata);
          // for(let i = 0 ;i<this.alldata.length;i++){
          //   this.alldata[i]['往来帐日期'] = this.formatDate(this.alldata[i]['往来帐日期'],'-');
          // }
          // this.downloaddata = this.alldata;
          // this.tabData = this.alldata.slice(0,this.getInfoData.limit)
          // this.total = this.alldata.length
          console.log(this.tabData.length);
          this.downloaddata = this.alldata;
          this.total = this.alldata
          this.tabData = this.alldata.slice((this.getInfoData.offset-1)*this.getInfoData.limit,this.getInfoData.offset*this.getInfoData.limit)
        }
        fileReader.readAsBinaryString(files[0])
      }
      xhr.send()
    },
    gitList(){
        this.downloaddata = this.alldata;
        this.total = this.alldata
        this.tabData = this.alldata.slice((this.getInfoData.offset-1)*this.getInfoData.limit,this.getInfoData.offset*this.getInfoData.limit)
      //

    },
    formatDate(numb, format) {
      const old = numb - 1;
      const t = Math.round((old - Math.floor(old)) * 24 * 60 * 60);
      const time = new Date(1900, 0, old, 0, 0, t)
      const year = time.getFullYear() ;
      const month = time.getMonth() + 1 ;
      const date = time.getDate() ;
      return year + format + (month < 10 ? '0' + month : month) + format + (date < 10 ? '0' + date : date)
    },
  }
}
</script>
<style scoped>
.export-excel-wrapper{
  margin-bottom: 10px;
}
</style>
