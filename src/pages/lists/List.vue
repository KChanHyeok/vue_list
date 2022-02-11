<template>
  <div>
    <b-button @click="onAddList" size='lg' >등록</b-button>
    <div class="listBox">
    <li>이곳은 나의 게시판내용입니다</li>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {

    }
  },
  methods:{
    onAddList(){
      this.$router.push('/listcreate')
    }
  }
}
</script>

<style>

</style>