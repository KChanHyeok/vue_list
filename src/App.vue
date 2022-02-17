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

.listBox {
  max-width: 600px;
  width: 100%;
  height: 300px;
  text-align: center;
  margin: auto;
}

.box {
  @include Box(black)
}


.boxlist{
  @include listBox
}
.titleBox {
  @include listPage
}
.contentsBox {
  @include listPage
}
.listInfoBox {
  @include listPage
}
.updateBox {
  @include listPage
}

</style>
