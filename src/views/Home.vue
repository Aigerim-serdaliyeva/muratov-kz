<template lang="pug">
    main.main#main
        home-problems
        home-minus
        home-solution
        home-commercial
        home-modal-commercial

</template>

<script>
import HomeProblems from "./home/HomeProblems";
import HomeMinus from "./home/HomeMinus";
import HomeSolution from "./home/HomeSolution";
import HomeCommercial from "./home/HomeCommercial";
import HomeModalCommercial from "./home/HomeModalCommercial";
import toggleHeaderHeight from "@/mixins/toggleHeaderHeight";

export default {
  components: {
    HomeProblems,
    HomeMinus,
    HomeSolution,
    HomeCommercial,
    HomeModalCommercial
  },
  mixins: [toggleHeaderHeight],  
};
</script>
