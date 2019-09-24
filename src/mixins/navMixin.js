const nav = {
  data() {
    return {
      nav: [
        { name: "Главная", path: "/", anim: "" },
        { name: "О нас", path: "/about", anim: "header-anim" },
        { name: "Клиенты и Партнеры", path: "/clients", anim: "header-anim" },
        { name: "Вакансии", path: "/vacancies", anim: "header-anim" },
        { name: "Контакты", path: "/contacts", anim: "header-anim" }
      ]
    };
  },
  methods: {
    toggleHeaderHeight(stateClass) {
      this.$store.commit("toggleHeaderHeight", stateClass);
      this.toggleMobileMenu();
    }
  }
};

export default nav;

