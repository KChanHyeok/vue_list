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


.box {
  @include Box(black)
}
.boxlist{
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}


.list {
  @include listBox
}
.listTitle {
  @include listPage
}
.listContents {
  @include listPage
}
.listInfo {
  @include listPage
}
.listUpdate {
  @include listPage
}

</style>
