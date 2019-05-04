<template lang="pug">

-
    var info = {
        title : 'Традиционный аутсорсинг предполагает, что исполнитель находится удаленно от заказчика, и заказчик вынужден тратить свое время постановку задания (написать письмо, выехать, встретиться, и т.д.).',
        minus: 'К основным минусам такой модели можно отнести:',
        list: [
            { text: 'Трудно оценить квалификацию удаленного юриста' },
            { text: 'Трата времени на исправление результата'},
            { text: 'Непрозрачность ценообразования и постановки сроков на выполнение задач' },
            { text: 'Удаленное взаимодействие может привести к искажению и неправильному толкованию информации. В итоге Клиент получает не тот результат, на который рассчитывал' }
        ]
    }

mixin both
    .home-minus__wrap.lh-n
        h2.home-minus__title.op-700 !{info.title}
        base-libra(:isMobile="true" :type="'small'" class="libra-s-p")
        .home-minus__list
            h2.op-800 !{info.minus}
            each item in info.list
                p.op-600 !{item.text}
        base-libra(:isMobile="true" :type="'small'" class="libra-s-p")                
    base-libra(:isMobile="false" :type="'large'" class="libra-end")                        

section.home-minus.blue-bg#home-minus
    +both

</template>
