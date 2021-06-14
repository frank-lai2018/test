<template>
  <div class="hello">
    <span  v-for="(msg1,index) in msg" :key="index">{{msg1.a[0].c}}</span>

    <button @click='aaa'>aaa</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: [
        {
          a:[{c:1},{c:3}],
          b:2
        },
        {
          a:[{c:2},{c:4}],
          b:4
        }
      ]
    }
  },
  methods: {
    aaa:function () {
      alert('111')
      let d = this.msg[0]
      d.a[0].c = 8
      // this.msg.splice(0,1,{a:9});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
