<template>
  <div>
    <b-button @click="onAddList" size='lg' >등록</b-button>
    <div class="listBox">
      <div v-for="(list, index) in lists" :key=list.id>
        <hr>
        <span @click="onInfoList(index)">{{list.title}}</span>
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
    ...mapGetters('list',['lists'])
  },
  methods:{
    onAddList(){
      this.$router.push('/listcreate')
    },
    onInfoList(index){
      this.$store.dispatch('list/getInfoList',{index})
      this.$router.push('/listinfo')
    }
  }
}
</script>

<style>

</style>