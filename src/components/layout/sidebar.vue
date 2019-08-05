<template>
  <div>
    <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :router="true"
    :collapse="isCollapse">
      <div v-for="(item, index) in routeList" :key="item.path"
      v-show="!isCollapse">
      <!-- 二级菜单 -->
        <el-submenu :index="index + '' "
        v-if="item.children[1] && (item.meta.role === role || item.meta.role === 0)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.title }}</span>
          </template>
          <div>
            <el-menu-item-group>
              <div v-for="(child, i) in item.children" :key="child.path">
                <el-menu-item :index="item.path + '/' + child.path" v-if="!child.children">{{child.meta.title}}</el-menu-item>
                <!-- 三级菜单 -->
                <el-submenu :index="i+''" v-else>
                  <span slot="title">{{child.meta.title}}</span>
                  <div v-for="(sub) in child.children" :key="sub.path">
                    <el-menu-item :index="item.path + '/' + child.path + '/' + sub.path">{{sub.meta.title}}</el-menu-item>
                  </div>
                </el-submenu>
              </div>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </div>
        </el-submenu>
        <!-- 只有一级菜单 -->
        <el-menu-item :index="item.path "
          v-else-if="item.meta.role === role || item.meta.role === 0">
          <i class="el-icon-setting"></i>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import rou from '@/router/index.js'
import { getToken } from '@/utils/auth'
export default {
  props: ['isCollapse'],
  data () {
    return {
      routeList: []
    }
  },
  computed: {
    ...mapGetters(['get_token']),
    role: function () {
      let res = this.get_token
      let role = res.role * 1 || JSON.parse(getToken()).role * 1
      return role
    }
  },
  methods: {
    filterRoute () {
      let res = rou.rou.filter(item => {
        return item.meta.nav
      })
      this.routeList = res
    }
  },
  created () {
    this.filterRoute()
  }
}
</script>

<style lang="less" style="scoped">
.el-submenu__title{
  background: rgb(48, 65, 86);
  color: #eee;
}
.el-submenu__title:hover{
  background: #263445;
}
.el-submenu .el-menu-item{
    min-width: 199px;
}
.el-menu-item{
  background: #1f2d3d;
  color: #eee;
}
.el-menu-item:hover{
  background: #001528
}
.el-menu-item-group__title{
  padding: 0;
}
.el-menu{
  border: none;
}
</style>
