<template>
  <input type="text" placeholder="입력해주세요" :value='value' @input="updateInput">
</template>

<script>
export default {
  name: 'd-input',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods:{
      updateInput(e){
          this.$emit('input', e.target.value)
      }
    }
}
</script>

<style>

</style>