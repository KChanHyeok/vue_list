<template>
  <button @click='click'><slot></slot></button>
</template>

<script>
export default {
  name:'d-button',
  methods:{
    click(e){
      this.$emit('click',e)
    }
  }
}
</script>

<style>

</style>