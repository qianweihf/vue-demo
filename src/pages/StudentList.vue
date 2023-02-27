<template>
  <div>
    <!-- 列表 -->
    <!--stripe 是否为斑马纹table-->
    <!--border 是否带有纵向边框-->
    <el-table :data="studentList" stripe border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="sid" label="编号" width="150"></el-table-column>
      <el-table-column prop="sname" label="姓名" width="150"></el-table-column>
      <el-table-column prop="gender" label="性别" width="150"></el-table-column>
      <el-table-column prop="age" label="年龄" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'StudentList',
  data () {
    return {
      multipleSelection:[],
      studentList: [
        {
          sid: 's001',
          sname: '张三',
          gender: '男',
          age: 18
        },
        {
          sid: 's002',
          sname: '李思',
          gender: '女',
          age: 21
        }
      ]
    }
  },
  methods:{
    handleSelectionChange(value){
      this.multipleSelection = value
    }
  }
}
</script>
