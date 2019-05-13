import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      header_anim_state: "",
      home_commercial_modal_state: true,
      home_commercial_modal_title: ""
    },
    mutations: {
      toggleHeaderHeight(state, stateClass) {
        state.header_anim_state = stateClass;
      },
      toggleHomeCommercialModal(state, type) {
        if (type !== "close") {
          state.home_commercial_modal_title =
            type === "consultation"
              ? "Получить консультацию"
              : "Получить коммерческое предложение";
        }
        state.home_commercial_modal_state = !state.home_commercial_modal_state;
      }
    }
  });

export default store;
