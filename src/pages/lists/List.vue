<template>
  <div>
    <b-button @click="onAddList" size='lg' >등록</b-button>
    <div class="listBox">
      <div v-for="(todo, index) in todos" :key=todo.id>
        <hr>
        <span @click="onInfoList(index)">{{todo.title}}</span>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  data() {
    return {
      }
  },
  computed:{
    ...mapGetters('list',['todos'])
  },
  methods:{
    onAddList(){
      this.$router.push('/listcreate')
    },
    onInfoList(index){
      this.$store.dispatch('list/getInfoTodo',{index})
      this.$router.push('/listinfo')
    }
  }
}
</script>

<style>

</style>