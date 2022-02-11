<template>
  <div>
    <p>이곳은 등록페이지입니다</p>
    <b-form-input class="titleText" v-model="titleText"></b-form-input><br>
    <b-form-textarea class="mainText" v-model="mainText"></b-form-textarea>
    <b-button class="" @click="addTodo">추가</b-button>
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
    addTodo(){
      if(this.titleText&&this.mainText){
        this.$store.dispatch('list/addTodo', this.titleText)
        console.log(this.titleText)
        console.log(this.mainText)
        this.titleText=''
        this.mainText=''
      }
      
    }
  }
}
</script>

<style>
.titleText{
  width: 490px;
  font-size: 25px;
}
.mainText{
  width: 490px;
  height: 200px;
}
</style>