<template>
  <el-container>
    <!-- <el-header>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="24">
          <h1>My-Works-CMS</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row v-for="">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer> -->
  </el-container>

  <!-- <div class="container mt-5">

    <div class="row justify-content-center mb-3">
      <div class="col-12 col-sm-3">
        <h2>users</h2>
      </div>
    </div>

    <div class="row justify-content-center mb-3">
      <div class="col-12 col-sm-2 font-weight-bold">title</div>
      <div class="col-12 col-sm-1 font-weight-bold">Age</div>
    </div>

    <div v-for="(user, key) in $store.getters.getUsers" :key="key"
         class="row justify-content-center mb-3">
      <div class="col-12 col-sm-2">
        {{ user.name.first}} {{ user.name.last}}
      </div>
      <div class="col-12 col-sm-1">
        {{ user.age}}
      </div>
    </div>

  </div> -->
</template>


<script>
export default {
  // data(){
  //   return{
  //     works
  //   }
  // },
  // created() {
  //   // this.$store.dispatch('fetchUsers')
  //   this.$store.dispatch("works/init")
  // }
}
</script>

<style lang="scss" scoped>
.el-header{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>