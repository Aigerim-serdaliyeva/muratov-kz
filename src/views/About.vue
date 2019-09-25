<template lang="pug">
section.about#about
    about-descr
    about-principles
    about-advantages

</template>

<script>
import AboutDescr from "./about/AboutDescr";
import AboutPrinciples from "./about/AboutPrinciples";
import AboutAdvantages from "./about/AboutAdvantages";
import toggleHeaderHeight from "@/mixins/toggleHeaderHeight";

export default {
  components: {
    AboutDescr,
    AboutPrinciples,
    AboutAdvantages
  },
  mixins: [toggleHeaderHeight]
};
</script>
