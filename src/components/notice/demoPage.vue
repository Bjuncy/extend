<template>
  <div class="notice-demo">
    <h2>vue extend自定义组件全局注册</h2>
    <div class="demo-api">
      <h4>API</h4>
      <p>通过直接调用以下方法来使用组件：</p>
      <ul style="padding:10px 20px; line-height: 2;">
        <li>this.$notice.open(config)</li>
        <li>this.$notice.info(config)</li>
        <li>this.$notice.success(config)</li>
        <li>this.$notice.warn(config)</li>
        <li>this.$notice.error(config)</li>
      </ul>
      <p>另外提供了全局关闭某个通知和全局销毁的方法：</p>
      <ul style="padding:10px 20px; line-height: 2;">
        <li>this.$notice.close(name)</li>
        <li>this.$notice.destroy()</li>
      </ul>
       <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <th width="100">属性</th>
          <th width="300">说明</th>
          <th width="100">类型</th>
          <th width="100">默认值</th>
        </tr>
        <tr>
          <td>title</td>
          <td>标题，非必填</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>text</td>
          <td>描述说明，非必填</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>hasclose</td>
          <td>手动关闭按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>type</td>
          <td>显示类型，仅在open方法时可用，用于自定义icon类型，type 为类型名字，例如：icon-close，则type为close，默认iconfont为字体图标font-family</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>当前通知唯一标识，调用close方法时可用</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>onclose</td>
          <td>关闭时回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>time</td>
          <td>自动关闭的延时，单位毫秒，不关闭可以写 0</td>
          <td>Function</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>transitionName</td>
          <td>过渡类型，可自定义</td>
          <td>String</td>
          <td>'notice-slide'</td>
        </tr>
      </table>
    </div>
    <div class="demo">
      <h4>示例</h4>
      <ul class="btn">
        <li @click="open1()">打开通知(title)</li>
        <li @click="open2()">打开通知(text)</li>
        <li @click="open3()">打开通知(自定义时间)</li>
        <li @click="close()">关闭通知</li>
        <li @click="destroy()">销毁通知</li>
      </ul>
      <h4>type 类型</h4>
      <ul class="btn">
        <li @click="info()" style="border-color: #2db7f5; background: #2db7f5">info</li>
        <li @click="success()" style="border-color: #19be6b; background: #19be6b">success</li>
        <li @click="warn()" style="border-color: #ff9900; background: #ff9900">warn</li>
        <li @click="error()" style="border-color: #ed4014; background: #ed4014">error</li>
        <li @click="open()" style="border-color: #808695; background: #808695">open</li>
        <li @click="horn()" style="border-color: #ff9900; background: #ff9900">open(horn)</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demoPage',
  data () {
    return {}
  },
  methods: {
    open1 () {
      this.$notice.open({
        title: '推荐',
        text: '自从有了debug小黄鸭，bug都少了！'
      })
    },
    open2 () {
      this.$notice.info({
        text: '自从有了debug小黄鸭，bug都少了！',
        time: 0
      })
    },
    open3 () {
      this.$notice.success({
        title: '推荐',
        text: '自从有了debug小黄鸭，bug都少了！',
        time: 5000,
        name: 'open3'
      })
    },
    close () {
      this.$notice.close('open3')
    },
    destroy () {
      this.$notice.destroy()
    },
    info () {
      this.$notice.info({
        title: '推荐',
        text: '自从有了debug小黄鸭，bug都少了！'
      })
    },
    success () {
      this.$notice.success({
        title: '推荐',
        text: '自从有了debug小黄鸭，bug都少了！'
      })
    },
    warn () {
      this.$notice.warn({
        title: '寻物启事',
        text: '谁动了我的小黄鸭？'
      })
    },
    error () {
      this.$notice.error({
        title: '寻物启事',
        text: '我的小黄鸭跑了！'
      })
    },
    open () {
      this.$notice.open({
        title: '寻物启事',
        text: '我的小黄鸭跑了！'
      })
    },
    horn () {
      this.$notice.open({
        title: '公告',
        text: '朕遗失小黄鸭一枚，寻回归还者重重有赏！',
        type: 'horn'
      })
    }
  }
}
</script>
<style scoped>
.notice-demo {
  padding: 20px 40px;
  & h2, & h4 {
    padding: 20px 0;
  }
  & .demo-api {
    & table {
      margin: 20px 0;
      text-align: left;
      border-collapse: collapse;
      font-size: 14px;
      & tr th, & tr td {
        padding: 5px 10px 5px;
        border: 1px solid #ccc;
      }
    }
  }
  & .demo {
    & .btn {
      list-style: none;
      & li {
        cursor: pointer;
        display: inline-block;
        padding: 3px 8px;
        border-radius: 5px;
        border:1px solid #19be6b;
        background: #19be6b;
        color: #fff;
        margin: 5px;
      }
    }
  }
}
</style>
