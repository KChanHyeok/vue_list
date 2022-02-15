<template>
  <div>
    <p>수정할 내용을 입력하시오</p>

      <p>제목</p>
      <b-form-input 
      v-model='title'
      trim
      ></b-form-input><br>

      <p>내용</p>
      <b-form-textarea v-model='contents' trim></b-form-textarea><br>

      <b-button @click="updateList" >수정완료</b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins: [InfoMixin],
  data() {
    return {
      title: '',
      contents: ''
    }
  },
  methods: {
    updateList() {
      if(this.title.length > 0 && this.contents.length > 0){
        this.$store.dispatch('list/updateInfoList',{
          id: this.listInfo.id,
          title: this.title,
          contents: this.contents
        })
        this.$router.push('/')
      }
    },
  },
  mounted () {
    this.title = this.listInfo.title
    this.contents = this.listInfo.contents
  }
}
</script>

<style>

</style>