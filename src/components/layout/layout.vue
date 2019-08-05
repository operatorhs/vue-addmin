<template>
  <div class="layout-container" :style='{"padding-left": padLeft + "px",transition}'>
    <el-container>
      <el-header>
        <i class="el-icon-s-fold collapse" @click="changeCollapse"></i>
        <i class="layout" @click="layout">退出登录</i>
      </el-header>
      <el-container>
        <el-aside width="200px" v-show="true" :style='{width: padLeft + "px",transition}'>
          <sidebar :isCollapse="isCollapse"></sidebar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sidebar from './sidebar'
import {removeToken} from '@/utils/auth'

export default {
  components: {
    sidebar
  },
  data () {
    return {
      isCollapse: true,
      padLeft: 0,
      transition: 'all .4s linear .3s'
    }
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.transition = 'none'
        this.padLeft = 0
      } else {
        this.transition = 'all .4s linear .3s'
        this.padLeft = 200
      }
    },
    layout () {
      removeToken()
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container{
  .el-header{
    padding-left: 32px;
    position:relative;
    .collapse{
      font-size: 24px;
      z-index: 100;
      position: absolute;
      top: 0;
      left: 0px;
      height: 32px;
      width: 32px;
    }
    .layout{
      font-size: 24px;
      position: absolute;
      top: 0;
      right: 0px;
      height: 32px;
    }
  }
  .el-aside{
    // background: rgb(48, 65, 86);
    min-height: 500px;
    background: rgb(48, 65, 86);
    position: absolute;
    top:0px;
    left: 0px;
  }
  .el-main{
    position: relative;
  }
}
</style>
