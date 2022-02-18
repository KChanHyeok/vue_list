<template>
  <div>
    <div class="list">
      <div align=right>
        <b-button @click="onAddList" size='mg' variant='light' class="mb-2 mr-2">등록</b-button>
      </div>
      <div v-for="list in lists" :key=list.id>
        <b-list-group @click="onInfoList(list.id)">
          <b-list-group-item button>{{ list.title }}</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('list', ['lists'])
  },
  methods: {
    onAddList () {
      this.$router.push('/list/listcreate')
    },
    onInfoList (id) {
      // this.$store.dispatch('list/getInfoList', {id})
      this.$router.push({name:'listinfo' ,params:{id: id}})
    }
  }
}
</script>

<style>


</style>