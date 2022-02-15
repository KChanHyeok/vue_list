<template>
  <div>
    <p>이곳은 등록페이지입니다</p>
    <p>제목</p>
    <b-form-input
    id='input-live'
    class='titleText' 
    v-model='titleText' 
    :state='titleState'
    aria-describedby='input-live-help input-live-feedback'
    trim
    >
    </b-form-input>
    <div>
      <b-form-invalid-feedback id='input-live-feedback'> 2글자 이상 작성해주세요 </b-form-invalid-feedback>
      <b-form-text id='input-live-help'>이곳은 제목입니다.</b-form-text>
    </div>
    <br>
    <div>
      <p>내용</p>
      <b-form-textarea class='contentsText' v-model='contentsText'></b-form-textarea>
    </div>
    <b-button @click='addList'>추가</b-button>
  </div>
</template>

<script>

export default {
  computed: {
    titleState() {
      return this.titleText.length > 1 ? true : false
    }
  },
  data(){
    return{
      titleText:'',
      contentsText:''
    }
  },
  methods:{
    addList(){
      if(this.titleText.length > 1 && this.contentsText.length > 1){
        this.$store.dispatch('list/addList',{
          title: this.titleText,
          contents: this.contentsText
        })
        this.titleText= ''
        this.contentsText= ''
        this.$router.go(-1)
      }
      
    }
  }
}
</script>

<style>
.titleText {
  width: 490px;
  font-size: 25px;
}
.contentsText {
  width: 490px;
  height: 200px;
}
</style>