<template>
  <div>
    <span>제목 : {{ listInfo.title }} </span><br><br>
    <span>내용 : {{ listInfo.main }} </span><br><br>
    <b-button @click='onClickBack'>뒤로가기</b-button> <b-button @click='onClickUpdate'> 내용수정하기 </b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins: [InfoMixin],
  methods: {
    onClickBack () {
      this.$router.go(-1)
    },
    onClickUpdate () {
      this.$router.push('/listupdate')
    }
  }
}
</script>

<style>

</style>