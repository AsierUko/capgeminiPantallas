<template>
  <div class="home">
    <el-drawer :visible.sync="drawer" :with-header="false" size="50%">
      <Detail :title="title" :dataDetail="dataDetail"/>
    </el-drawer>
      <div class="filter">
        <div class="filter__input">
          <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="formInline" >
            <el-form-item label="Genero">
              <el-select @change="getGender" v-model="formInline.gender" placeholder="female/male" clearable>
                <el-option label="Male" value="male"></el-option>
                <el-option label="Female" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Edad">
              <el-input v-model="formInline.age" placeholder="Edad" @change="getAge" clearable></el-input>
            </el-form-item>
            <el-form-item label="Nacionalidad">
              <el-input v-model="formInline.nat" placeholder="ES/DE" @change="getNat" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit(formInline)">Filtrar</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-table
       :data="tableData"
       style="width: 100%">
       <el-table-column
         prop="gender"
         label="Genero"
         width="">
       </el-table-column>
       <el-table-column
         prop="name.first"
         label="Nombre"
         width="">
       </el-table-column>
       <el-table-column
         prop="email"
         label="Email">
       </el-table-column>
       <el-table-column
         prop="nat"
         label="Nacionalidad"
         width="">
       </el-table-column>
       <el-table-column
         prop="dob.date"
         label="Fecha de Nacimiento"
         width="">
       </el-table-column>
       <el-table-column
         prop="registered.date"
         label="Fecha de registro">
       </el-table-column>
       <el-table-column
        align="center"
        width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">Detalle</el-button>
        </template>
      </el-table-column>
     </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { CallApi } from '@/utils/CallApi.js'
import Detail from '@/components/Detail.vue'

export default {
  name: 'Home',
  components: {
    Detail
  },
  data() {
    return {
      dataUser: [],
      tableData: [],
      paramsDefaul: {
        results: 100
      },
      formInline: {
        gender: '',
        nat: '',
        age: ''
      },
      gender: {},
      nat: {},
      age: {},
      filterGA: {},
      drawer: false,
      title: 'Detalle',
      dataDetail: null

    }
  },

  mounted() {
    this.getUser ? this.tableData = this.getUser: this.loadDataUser(this.paramsDefaul)
  },

  computed: {
    ...mapGetters(
      {
        getUser: 'getUser',
      }
    ),
  },

  watch:{

  },
  methods: {
    ...mapActions(
      {
        updateUser: 'updateUser',
      }
    ),
    async loadDataUser(value) {
      const response = await CallApi.callApiUser('https://randomuser.me/api/', 'GET', null, value)
      if(response && response.status == '200') {
          this.tableData = response.data.results
          console.debug("Back--->")
          this.updateUser(this.tableData)
        }
    },

    handleEdit(val){
      this.drawer = true
      this.dataDetail = val
      console.log(this.drawer, '--------------', val)
    },

    updatekey (elemId, key) {
      let obj = []
      this.getUser.forEach( (valor) => {
        if (valor[key] == elemId) { obj.push(valor) }
      })
      return obj
    },

    updatekeybis (elemId, key, keybis) {
      let obj = []
      this.getUser.forEach( (valor) => {
        if (valor[key][keybis] == elemId) { obj.push(valor) }
      })
      return obj
    },

    getGender(val){
      this.gender = this.updatekey(val, 'gender')
      this.tableData = this.gender
      console.log(this.gender, 'genero')
    },

    getAge(val){
      this.age = this.updatekeybis(val, 'dob', 'age')
      // this.tableData = this.age
      console.log(this.age, 'ageaaaaaaaaaaaaaa')
    },

    getNat(val){
      this.nat = this.updatekey(val, 'nat')
      // this.tableData = this.nat
      console.log(this.nat, 'nat')
    },

    filterSetGender (elemId, key, keybis) {
      let obj = []
      this.gender.forEach( (valor) => {
        if (valor[key][keybis] == elemId) { obj.push(valor) }
      })
      return obj
    },

    filterSetTotal(elemId, key){
      let obj = []
      this.filterGA.forEach( (valor) => {
        if (valor[key] == elemId) { obj.push(valor) }
      })
      return obj
    },

    onSubmit2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    onSubmit(val) {
      if(this.formInline.gender){
        this.filterGA = this.filterSetGender(this.formInline.age, 'dob', 'age')
        this.tableData = this.filterSetTotal(this.formInline.nat, 'nat',)
        console.log(val, 'submit!');
      }
    },
  }
}
</script>
<style scoped lang="scss">

</style>
