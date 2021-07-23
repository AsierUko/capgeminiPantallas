<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <el-table
       :data="tableData"
       style="width: 100%">
       <el-table-column
         prop="date"
         label="Fecha"
         width="180">
       </el-table-column>
       <el-table-column
         prop="name"
         label="Nombre"
         width="180">
       </el-table-column>
       <el-table-column
         prop="address"
         label="Dirección">
       </el-table-column>
       <el-table-column
         prop="date"
         label="Fecha"
         width="180">
       </el-table-column>
       <el-table-column
         prop="name"
         label="Nombre"
         width="180">
       </el-table-column>
       <el-table-column
         prop="address"
         label="Dirección">
       </el-table-column>
     </el-table>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
