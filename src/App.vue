<template>
  <div id="app">
    <global-header />
    <router-view />
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from "@/components/Header";
import GlobalFooter from "@/components/Footer";

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>

<style lang="postcss">
@import "assets/postcss/main.css";
</style>
