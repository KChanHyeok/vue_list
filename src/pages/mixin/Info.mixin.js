import { mapActions, mapGetters} from "vuex";

const ListInfoMixin = {
  computed: {
    ...mapGetters('list', ['todoInfo','todos']),
  },
  methods:{
    ...mapActions('list', ['getInfoTodo'])
  }
}
export default ListInfoMixin