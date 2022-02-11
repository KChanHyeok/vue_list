<template>
  <div id="app">
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
}
#title {
  text-align: center;
  display: block;
  margin-bottom: 30px;
  margin-top: 70px;

}

.listBox{
  width: 500px;
  height: 500px;
  border: 1px solid black;
  text-align: center;
}


</style>
