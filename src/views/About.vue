<template lang="pug">
section.about#about
    about-descr
    about-principles
    about-advantages

</template>

<script>
import AboutDescr from './about/AboutDescr';
import AboutPrinciples from './about/AboutPrinciples';
import AboutAdvantages from './about/AboutAdvantages';

export default {
    components: {
        AboutDescr, AboutPrinciples, AboutAdvantages
    }
}
</script>