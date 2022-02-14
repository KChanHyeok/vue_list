<template>
  <div>
    <p>이곳은 등록페이지입니다</p>
    <p>제목</p>
    <b-form-input class='titleText' v-model='titleText' trim></b-form-input><br>
    <p>내용</p>
    <b-form-textarea class='mainText' v-model='mainText'></b-form-textarea>
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
      mainText:''
    }
  },
  methods:{
    addList(){
      if(this.titleText.length > 1 && this.mainText.length > 1){
        this.$store.dispatch('list/addList',{
          title: this.titleText,
          main: this.mainText
        })
        this.titleText= ''
        this.mainText= ''
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
.mainText {
  width: 490px;
  height: 200px;
}
</style>