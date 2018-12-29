<template>
<transition :name="transitionName">
  <div class="notice" :class="type" v-if="show" :id="name">
    <h4 class="notice-title" v-if="title">{{title}}</h4>
    <div class="notice-info" :class="{'no-title': !title}">
      <i class="icon-type iconfont" :class="'icon-'+type" v-show="type"></i>
      <p class="describe">{{text}}</p>
    </div>
    <i v-show="hasClose" class="btn-close iconfont icon-close" @click="close"></i>
  </div>
</transition></template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      title: '',
      text: '',
      show: false,
      time: 3000,
      hasClose: true,
      type: '',
      id: '',
      name: '',
      transitionName: 'notice-slide'
    }
  },
  methods: {
    close () {
      this.show = false
      this.$notice.close(this.name)
      this.onclose && (typeof this.onclose === 'function') && this.onclose()
    }
  }
}
</script>
<style scoped>
.notice {
  background: #fff;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color:#333;
  position: relative;
  margin-bottom: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  & .notice-title {
    display: block;
    padding: 6px;
    box-sizing: border-box;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  & .notice-info {
    padding: 10px 6px;
    font-size: 14px;
    display: flex;
    &.no-title {
      padding-top: 20px;
    }
    & .icon-type {
      font-size: 20px;
      margin-right: 10px;
      &.icon-info {
        color: #2db7f5;
      }
      &.icon-success {
        color: #19be6b;
      }
      &.icon-warn {
        color: #ff9900;
      }
      &.icon-error {
        color: #ed4014;
      }
      &.icon-horn {
        color: #ffb230;
      }
    }
    & .describe {
      flex: 1;
      line-height: 1.6;
    }
  }
  & .btn-close {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #bbb;
  }
}
</style>
