<template>
  <div class="hello">
    <ul>
      <li @click="to('demoPage')">demoPage</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    to (name) {
      this.$router.push({name: name})
    }
  }
}
</script>
<style scoped>
  ul li {
    text-align: left;
    line-height: 2;
    background: #eee;
    margin-bottom: 5px;
  }
</style>
