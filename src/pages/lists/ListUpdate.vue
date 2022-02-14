<template>
  <div>
    <p>수정할 내용을 입력하시오</p>
    제목 <b-form-input v-model="listInfo.title" ></b-form-input><br>
    내용 <b-form-textarea v-model="listInfo.main"></b-form-textarea><br>
    <b-button @click="updatelist">수정완료</b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins:[InfoMixin],
  data(){
    return{
    }
  },
  methods:{
    updatelist(){
    this.$router.push('/')
    }
  }
}
</script>

<style>

</style>