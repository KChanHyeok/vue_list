<template>
  <div>
    <p>이곳은 등록페이지입니다</p>
    <p>제목</p>
    <b-form-input class='titleText' v-model='titleText' trim></b-form-input><br>
    <p>내용</p>
    <b-form-textarea class='contentsText' v-model='contentsText'></b-form-textarea>
    <b-button @click='addList'>추가</b-button>
  </div>
</template>

<script>

export default {
  computed:{

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