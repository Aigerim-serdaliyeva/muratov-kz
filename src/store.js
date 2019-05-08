import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
        header_anim_state: ''
    },
    mutations: {
        toggleHeaderHeight(state, stateClass) {
            state.header_anim_state = stateClass
        }
    }
  });

export default store;
