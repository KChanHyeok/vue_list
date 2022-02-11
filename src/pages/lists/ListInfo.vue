<template>
  <div>
    <h2>당신이 선택한 TODO의 내용입니다.</h2><br>
    <span>제목 : {{ todoInfo.title }}</span><br><br>
    <span>내용 : {{ todoInfo.text }}</span><br><br>
    <b-button>내용수정하기</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters('list',['todoInfo'])
  }
}
</script>

<style>

</style>