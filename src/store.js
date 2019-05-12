import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
        header_anim_state: '',
        home_commercial_modal_state: true        
    },
    mutations: {
        toggleHeaderHeight(state, stateClass) {
            state.header_anim_state = stateClass
        },
        toggleHomeCommercialModal(state) {
          state.home_commercial_modal_state = !state.home_commercial_modal_state
        }    
    }
  });

export default store;
