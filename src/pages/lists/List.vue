<template>
  <div>
    <b-button @click="onAddList" size='lg' >등록</b-button>
    <div class="listBox">
      <div v-for="list in lists" :key=list.id>
        <b-list-group @click="onInfoList(list.id)">
        <b-list-group-item button>{{list.title}}</b-list-group-item>
        </b-list-group>
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
    onInfoList(id){
      this.$store.dispatch('list/getInfoList',{id})
      console.log(id)
      this.$router.push('/listinfo')
    }
  }
}
</script>

<style>

</style>