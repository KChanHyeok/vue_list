<template>
  <div class="home"> 
    <h2 align=center>home</h2>
    <div v-for="box in 6" :key="box.id" class="boxlist" aglin='center'>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>