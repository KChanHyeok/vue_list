import { mapGetters} from "vuex";

const ListInfoMixin = {
  computed: {
    ...mapGetters('list', ['todoInfo']),
  }
}
export default ListInfoMixin