<template>
  <div>
    <h2>당신이 선택한 TODO의 내용입니다.</h2><br>
    <span>제목 : {{ listInfo.title }}</span><br><br>
    <span>내용 : {{ listInfo.main }}</span><br><br>
    <b-button @click="back">뒤로가기</b-button> <b-button @click="update">내용수정하기</b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins: [InfoMixin],
  methods:{
    back(){
      this.$router.go(-1)
    },
    update(){
      this.$router.push('/listupdate')
    }
  }
}
</script>

<style>

</style>