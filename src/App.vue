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
  }
}
  
</script>

<style lang='scss'>
*{
  margin: 0;
}
nav{
  position:fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

#app {
  @include app
}
#container {
  margin-top: 90px;
}

#title {
  text-align: center;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
}

#list{
  @include list
}

#button {
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: right;
}

.listBox {
  max-width: 600px;
  width: 100%;
  height: 300px;
  text-align: center;
  margin: auto;
}
.menubtn {
  display: flex;
  float: right;
}
.boxlist{
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}

.box {
  @include Box($blue)
}
.titleBox {
  @include listbox
}
.contentsBox {
  @include listbox
}
.listInfoBox {
  @include listbox
}
.updateBox {
  @include listbox
}

</style>
