import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// *** Plugins
import VueScrollTo from "vue-scrollto";
import "./plugins/modernizr";
import { isMobile } from "./mixins/isMobile";
// *** /Plugins

// *** Vue use
Vue.mixin(isMobile);
Vue.use(VueScrollTo);
// *** /Vue use

// *** Global components
// *** /Global components

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
