<template>
  <div>
    <p>이곳은 등록페이지입니다</p>
    <d-input class="titleText" v-model="titleText"></d-input><br>
    <textarea class="mainText" v-model="mainText"></textarea>
    <d-button @click="Addtodo">추가</d-button>
  </div>
</template>

<script>
import DInput from '../../components/DInput.vue'
import DButton from '../../components/DButton.vue'

export default {
  components:{
    DInput,
    DButton
  },
  data(){
    return{
      titleText:'',
      mainText:''
    }
  },
  methods:{
    Addtodo(){
      if(this.titleText&&this.mainText){
        this.mainText=''
        this.titleText=''
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