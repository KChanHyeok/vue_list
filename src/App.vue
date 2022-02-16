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

<style>
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

.listBox{
  height: 300px;
  border: 1px solid black;
  text-align: center;
  overflow: auto;
}


</style>
