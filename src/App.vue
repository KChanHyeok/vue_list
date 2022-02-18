<template>
  <div id="app">
    <div class="mt-9">
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
  height: 200vh;
}

#list{
  @include list
}

.hoverImg {
  &:hover {
    opacity: 30%;
  }
}


.homebox {
  @include HomeBox(black);
  @include boxSize;
}
.boxlist {
  @include boxList
}

.list {
  @include lists
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
