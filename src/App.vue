<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      deptId:'deptId',
      // departmentDto:'departmentDto',
      deptName:'rao'
    }
  },
  components: {
    HelloWorld
  },
  created(){
    // axios.get(`/department/list`)
    // .then(res => {
    //   console.log(res);
    // })
    // axios.get(`/department/departmentInfo`,{
    //   params:{
    //     deptId:'123'
    //   }
    // })
    // .then(res => {
    //   console.log(res);
    // })

    // axios.get(`/department/updateDepartmentName`,{
    //   params:{
    //     deptId:'123',
    //     deptName:''
    //   }
    // })
    // .then(res => {
    //   console.log(res);
    // })

    // axios.get(`/department/updateStatus`,{
    //   params:{
    //     deptId:'updateStatus',
    //     status:'updateStatus'
    //   }
    // })
    // .then(res => {
    //   console.log(res);
    // })

    // axios.post('/department/delete',this.deptId)
    // .then(res => {
    //   console.log(res);
    // })






    axios.post('/department/add',{
      params:{
        "name":"rao",
        "age":"18",
        "hobby":"basketball"
      }
    })
    .then(res => {
      console.log(res);
    })
    axios.post('/department/update',this.departmentDto)
    .then(res => {
      console.log(res);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
