<template>
  <div class="login-container">
    <div class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="user">
          <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { setToken } from '@/utils/auth.js'

export default {
  data () {
    var user = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
    }
    return {
      ruleForm: {
        pass: '123456',
        user: 'hs'
      },
      rules: {
        user: [
          { validator: user, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['get_login_token']),
    submitForm () {
      if (this.ruleForm.pass.length === 0 || this.ruleForm.user.length === 0) {
        this.$message({
          message: '请输入用户名或者密码',
          type: 'warning'
        })
        return false
      }

      this.get_login_token(this.ruleForm).then(res => {
        res = res.data
        if (res.status === 1) {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        } else if (res.status === 0) {
          setToken(JSON.stringify(res.token[0]))
          this.$router.push({path: '/'})
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  background: rgb(48, 65, 86);
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .content{
    width: 450px;
    height: 300px;
    // background: #2d3a4b;
    margin: 200px auto;
    .el-form{
      margin-left: -80px;
    }
  }
}
</style>
