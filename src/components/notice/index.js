import notice from './notice.vue'
import noticeBox from './noticeBox.vue'
import Vue from 'vue'

let VueNotice = Vue.extend(notice)
let VueParent = Vue.extend(noticeBox)
let newParent = null
let newNotice = null
let duration = 3000
let myNotice = () => {
  newParent = new VueParent({
    el: document.createElement('div')
  })
  document.body.appendChild(newParent.$el)
  myDemo()
}
let myDemo = () => {
  function msg (type, obj) {
    newNotice = new VueNotice({
      el: document.createElement('div')
    })
    if (obj instanceof Object) {
      if (obj.title) {
        newNotice.title = obj.title
      }
      if (obj.text) {
        newNotice.text = obj.text
      }
      if (obj.time >= 0) {
        newNotice.time = obj.time
      } else {
        newNotice.time = duration
      }
      if (obj.hasClose) {
        newNotice.hasClose = obj.hasClose
      }
      if (obj.name) {
        newNotice.name = obj.name
      }
      if (obj.onclose) {
        newNotice.onclose = obj.onclose
      }
      if (obj.render && typeof obj.render === 'function') {
        newNotice.render = obj.render
        newNotice.isRender = true
      }
      newNotice.type = type
    } else if (typeof obj === 'string' || typeof obj === 'number') {
      newNotice.text = obj
    }
    newNotice.show = true
    document.getElementById('wrap').appendChild(newNotice.$el)
    if (newNotice.time) {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        newNotice.show = false
        let t = setTimeout(() => {
          clearTimeout(t)
          newParent.$el.childNodes.length && document.getElementById('wrap').removeChild(newNotice.$el)
          newNotice.$destroy()
          newNotice = null
        }, 200)
        obj.onclose && (typeof obj.onclose === 'function') && obj.onclose()
      }, newNotice.time)
    }
  }
  Vue.prototype.$notice = {
    open (obj) {
      if (!obj) return
      msg(obj.type, obj)
    },
    info (obj) {
      if (!obj) return
      msg('info', obj)
    },
    success (obj) {
      if (!obj) return
      msg('success', obj)
    },
    error (obj) {
      if (!obj) return
      msg('error', obj)
    },
    warn (obj) {
      if (!obj) return
      msg('warn', obj)
    },
    close (name) {
      let parent = document.getElementById('wrap')
      let childs = Array.prototype.slice.call(parent.childNodes)
      let index = childs.findIndex(v => v.id === name)
      if (index >= 0) {
        let timer = setTimeout(() => {
          clearTimeout(timer)
          parent.removeChild(childs[index])
        }, 300)
      } else {
        alert('未找到该元素！')
      }
    },
    destroy () {
      let parent = document.getElementById('wrap')
      let childs = parent.childNodes
      if (childs.length) {
        let timer = setTimeout(() => {
          clearTimeout(timer)
          newNotice.show = false
          newNotice.$destroy()
          newNotice = null
          for (var i = childs.length - 1; i >= 0; i--) {
            parent.removeChild(childs[i])
          }
        }, 300)
      } else {
        alert('当前无通知！')
      }
    }
  }
}
export default myNotice
