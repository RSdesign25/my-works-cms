<template>
  <!-- <div class="form">
    <form @submit.prevent="add">
      <input v-model="work.title">
      <input v-model="work.siteLink">
      <button>Add</button>
    </form>
    <div>
      <el-input placeholder="ページタイトルを入力してください" v-model="work.title">
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="Please input" v-model="work.siteLink">
        <template slot="prepend">https://</template>
      </el-input>
    </div>
  </div>  -->
  <el-container>
    <el-header>INPUT SCREEN</el-header>
    <el-main>
        <el-row>
          <el-col :span="24">
            <el-input placeholder="ページタイトルを入力してください" v-model="work.title">
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input placeholder="ページURLを入力してください" v-model="work.siteLink">
              <template slot="prepend">https://</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-button type="info" plain @click="add">Add</el-button>
        </el-row>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>










   <!-- <b-form @submit.prevent="addUser">
    <div class="container mt-5">

      <div class="row justify-content-center mb-3">
        <div class="col-12 col-sm-3">
          <h2>Create user</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="First name" label-for="first">
            <b-form-input
              id="first"
              v-model="user.name.first"
              required
              placeholder="Jane"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="Last name" label-for="last">
            <b-form-input
              id="last"
              v-model="user.name.last"
              required
              placeholder="Doe"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="Age" label-for="age">
            <b-form-input
              id="age"
              v-model="user.age"
              required
              placeholder="20"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-3">
          <b-button block type="submit" variant="primary">Create</b-button>
        </div>
      </div>

    </div>
  </b-form> -->
</template>

<script>
export default {
  data() {
    return {
      work:{
        title:null,
        siteLink:null,
      }
    //   user: {
    //     name: {
    //       first: null,
    //       last: null
    //     },
    //     age: null
    //   }
    }
  },
  methods: {
    // addUser() {
    //   this.$store.dispatch('addUser', { user: this.user })
    //   .then(() => {
    //     this.user.name.first = null
    //     this.user.name.last = null
    //     this.user.age = null

    //     alert('Successfully created user')
    //   })
    // }
    add(){
      this.$store.dispatch("works/add",this.work)
      this.work.title = "";
      this.work.siteLink = "";
    }
  }
}
</script>