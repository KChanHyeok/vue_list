import { mapGetters } from "vuex";

const ListInfoMixin = {
  computed: {
    ...mapGetters('list', ['listInfo','lists']),
  },
}
export default ListInfoMixin