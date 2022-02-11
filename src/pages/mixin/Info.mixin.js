import { mapActions, mapGetters} from "vuex";

const ListInfoMixin = {
  computed: {
    ...mapGetters('list', ['todoInfo','todo']),
  },
  methods:{
    ...mapActions('list', ['getInfoTodo'])
  }
}
export default ListInfoMixin