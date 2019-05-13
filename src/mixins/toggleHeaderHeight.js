import { mapMutations } from "vuex";

const ToggleHeaderHeight = {
  methods: {
    ...mapMutations(["toggleHeaderHeight"])
  },
  mounted() {
    let path = this.$route.path;
    path === "/"
      ? this.toggleHeaderHeight("")
      : this.toggleHeaderHeight("header-anim");
  }
};

export default ToggleHeaderHeight;
