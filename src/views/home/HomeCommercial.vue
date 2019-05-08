<template lang="pug">
-
    var info = {
        title : 'Штатные юристы выполняют много работы технического характера, немного тактического и очень редко стратегического плана. Однако заработная плата такого юриста необоснованно выше уровня тех задач, которые он может решить.',
        subtitle: 'Услуга «Проектный юрист» позволяет Вам решать задачи всех уровней за плату одного штатного юриста, что',
        list: [
            { text: 'Значительно экономит ресурсы Клиента (до 1 миллиона тенге в год)' },
            { text: 'Оптимизирует работы: задачи решаются в 1,5-2 раза быстрее за счет командной работы' },
            { text: 'Над задачами Клиента трудится не 1, а целых 3 юриста во главе с Директором юридического департамента.' }
        ],
        button: 'Получить коммерческое предложение'
    }    

mixin both
    base-libra(:isMobile="false" :type="'large'" class="libra-start")
    base-libra(:isMobile="true" :type="'large'" class="libra-start")
    .home-commercial__wrap.lh-n
        h2= info.title
        h3= info.subtitle
        ul
            each item in info.list
                li= item.text
        a.home-commercial__button=info.button        

section.home-commercial.blue-bg#home-commercial
    +both

</template>
