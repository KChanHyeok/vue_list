<template>
  <div id="app">
    <div>
      <b-nav tabs align="center" >
        <b-nav-item to='/home'  exact exact-active-class='active'>마이홈</b-nav-item>
        <b-nav-item to='/image' exact exact-active-class='active'>이미지</b-nav-item>
        <b-nav-item to='/list' exact exact-active-class='active'>게시판</b-nav-item>
      </b-nav>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isActive: false
    }
  },
  methods:{
    onClick () {
    }
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
#title {
  text-align: center;
  display: block;
  margin-bottom: 30px;
  margin-top: 70px;

}

.listBox{
  height: 300px;
  border: 1px solid black;
  text-align: center;
  overflow: auto;
}


</style>
