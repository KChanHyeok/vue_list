<template>
  <div class="listUpdate">
    <p>수정할 내용을 입력하시오</p>
    <p>제목</p>
    <b-form-input 
      v-model='title'
      trim
      class="mb-3"
    ></b-form-input>
    <p>내용</p>
    <b-form-textarea v-model='contents'></b-form-textarea>
    <b-button @click="updateList" class="mt-3">수정완료</b-button>
  </div>
</template>

<script>
import {InfoMixin} from '../mixin'

export default {
  mixins: [InfoMixin],
  data () {
    return {
      title: '',
      contents: ''
    }
  },
  methods: {
    updateList () {
      if(this.title.length > 0 && this.contents.length > 0){
        this.$store.dispatch('list/updateInfoList',{
          id: this.$route.params.id,
          title: this.title,
          contents: this.contents
        })
        this.$router.push('/list')
      }
    },
  },
  mounted () {
    this.title = this.lists[this.$route.params.id].title
    this.contents = this.lists[this.$route.params.id].contents
  }
}
</script>

<style>

</style>