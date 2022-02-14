<template>
  <div>
    <p>수정할 내용을 입력하시오</p>

      <p>제목</p>
      <b-form-input v-model="listInfo.title" trim></b-form-input><br>

      <p>내용</p>
      <b-form-textarea v-model="listInfo.main"></b-form-textarea><br>

    <b-button @click="updatelist" type='submit'>수정완료</b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins: [InfoMixin],
  methods: {
    updatelist() {
    if(this.listInfo.title && this.listInfo.main) {
      this.$store.dispatch('list/updateInfoList', this.listInfo.id)
      this.$router.push('/')
    }
    }
  }
}
</script>

<style>

</style>