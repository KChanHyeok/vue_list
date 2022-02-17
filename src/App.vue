<template>
  <div id="app">
    <div id="container">
    <Header/>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './layouts/header.vue'

export default {
  name: 'App',
  components:{
    Header
  },
  data () {
    return {
      isActive: false
    }
  },
  methods:{

  }
}
  
</script>

<style lang='scss'>
*{
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  height: 90vh;
}
#container {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}

#title {
  text-align: center;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;

}
#button {
  margin: 5px 20px;
  text-align: right;
}

.listBox {
  height: 300px;
  border: 1px solid black;
  text-align: center;
  overflow: auto;
}
.menubtn {
  display: flex;
  float: right;
}
.toggleBox {
  margin-right: 20px;
}


</style>
