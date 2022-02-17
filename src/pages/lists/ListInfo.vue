<template>
  <div class="listInfo mt-4">
    <span>제목 : {{ lists[$route.params.id].title }} </span><br><br>
    <span>내용 : {{ lists[$route.params.id].contents }} </span><br><br>
    <b-button @click='onClickBack'>뒤로가기</b-button> <b-button @click='onClickUpdate($route.params.id)'> 내용수정하기 </b-button>
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
    onClickUpdate (id) {
      // this.$emit('listInfo',this.listInfo)
      this.$router.push({name:'listupdate' ,params:{id: id}})
    }
  }
}
</script>

<style>

</style>