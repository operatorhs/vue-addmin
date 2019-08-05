<template>
  <div class="step-container">
    <ul>
      <li
      v-for="(item, index) in step"
      :key="item.title"
      @click="next(index)">
        <span :class="active === index ? 'active' : ''">{{index}}</span>
        <h3 :class="active === index ? 'active' : ''">{{item.title}}</h3>
        <p :class="active === index ? 'active' : ''" v-show="active === index">{{item.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      active: 100,
      step: [
        {title: '第一步', description: '这里是一段文字1'},
        {title: '第二部', description: '这里是一段文字2'},
        {title: '第三部', description: '这里是一段文字3'}
      ]
    }
  },
  methods: {
    next (index) {
      this.active = index
    }
  }
}
</script>

<style lang="less" scoped>
.step-container{
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    li{
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #888;
      padding: 0 10px;
      span{
        display: block;
        width: 40px;
        height: 40px;
        border: 2px solid #888;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 24px;
        margin-bottom: 5px;
        &.active{
          color: #007aff;
          border-color: #007aff;
        }
      }
      h3{
        margin: 0;
        &.active{
          color: #007aff;
        }
      }
      p{
        margin: 0;
        padding-top: 5px;
        line-height: 20px;
        font-size: 16px;
        &.active{
          color: #007aff;
        }
      }
    }
  }
}
</style>
