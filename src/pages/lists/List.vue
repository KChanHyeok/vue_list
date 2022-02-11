<template>
  <div>
    <b-button @click="onAddList" size='lg' >등록</b-button>
    <div class="listBox">
      <div v-for="(todos, index) in todo" :key=todos.id>
        <hr>
        <span @click="onInfoList(index)">{{todos.title}}</span>
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
    ...mapGetters('list',['todo'])
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