<template lang="pug">

-
    var info = {
        title: 'Корпоративные принципы работы юридической компании «Muratov Partners»',
        list: [
            { title: 'Коллегиальность в выработке решений', subtitle: 'Анализ ситуации осуществляется совместно с группой юристов, каждый из которых является специалистом в своей области права, такой подход позволяет решить проблему клиента в комплексе' },
            { title: 'Инновационность', subtitle: 'Наши юристы не только следят за изменениями в нормативно-правовой базе, но и сами вносят предложения по совершенствованию действующего законодательства' },
            { title: 'Дипломатия', subtitle: 'Отличительной чертой нашей деятельности является то, что мы используем все навыки коммуникации для сохранения партнерских отношений между клиентом и его оппонентом (его контрагенты и сотрудники) и достижения взаимовыгодного консенсуса' }
        ]
    }

mixin both
    .about-principles__wrap.lh-n
        h2.op-800= info.title
        base-libra(:isMobile="false" :type="'small'" :transparent="true" class="libra-s-p libra-col-blue")
        base-libra(:isMobile="true" :type="'small'" :transparent="true" class="libra-s-p libra-col-blue")
        each item in info.list
            article
                h3.op-800= item.title
                p.op-400= item.subtitle
        base-libra(:isMobile="false" :type="'small'" :transparent="true" class="libra-s-p libra-col-blue mar-bot-0")
        base-libra(:isMobile="true" :type="'small'" :transparent="true" class="libra-s-p libra-col-blue mar-bot-0")
section.about-principles 
    +both           

</template>
