<template>
  <div>
    <d-button @click="onAddList">등록</d-button>
    <div class="listBox">
    <li>이곳은 나의 게시판내용입니다</li>
    </div>
  </div>
</template>

<script>
import DButton from '../../components/DButton.vue'

export default {
  components: {
    DButton
  },
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