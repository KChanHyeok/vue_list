<template>
  <div id="app">
    <div>
      <b-nav tabs align="center">
        <b-nav-item >마이 홈</b-nav-item>
        <b-nav-item >이미지</b-nav-item>
        <b-nav-item active>게시판</b-nav-item>
      </b-nav>
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
  border: 1px solid black;
  text-align: center;
  overflow: auto;
}


</style>
