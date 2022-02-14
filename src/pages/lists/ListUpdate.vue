<template>
  <div>
    <p>수정할 내용을 입력하시오</p>

      <p>제목</p>
      <b-form-input :value="listInfo.title" @keyup="onChangeTitle" trim></b-form-input><br>

      <p>내용</p>
      <b-form-textarea :value="listInfo.main" @keyup="onChangeMain" ></b-form-textarea><br>
      <b-button @click="updateList" >수정완료</b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins: [InfoMixin],
  data() {
    return {

    }
  },
  methods: {
    updateList() {
        this.$store.dispatch('list/updateInfoList',{
        id: this.listInfo.id,
        title: this.listInfo.title,
        main: this.listInfo.main
        })
        this.$router.push('/')
    },
    onChangeTitle(e) {
      this.listInfo.title = e.target.value
    },
    onChangeMain(e) {
      this.listInfo.main = e.target.value 
    }
  }
}
</script>

<style>

</style>