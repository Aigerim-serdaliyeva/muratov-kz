<template lang="pug">

-
    var info = {
        title: {
            span: 'Наша миссия - ',
            text: 'Обезопасить бизнес Клиента, предоставив качественную юридическую помощь.'
        },
        main : {
            title: 'Наши корпоративные ценности:',
            listDesk: [
                {class: 'rotateInUpLeft', title: 'Легальность', subtitle: 'Мы всегда действуем в рамках законодательства и решаем проблемы исключительно правовыми способами.' },
                {class: 'rotateInUpRight', title: 'Гарантия качества', subtitle: 'Мы с полной ответственностью берем на себя все обязательства и чувствительны к оценке Клиента. ' },
                {class: 'rotateInUpLeft', title: 'Оперативность', subtitle: 'Задачи Клиента решаются в максимально короткие сроки.' },
                {class: 'rotateInUpRight', title: 'Профессиональная этика', subtitle: 'Мы с уважением относимся к нашим Клиентам, партнерам, конкурентам, судам и всем тем, с кем взаимодействуем.' }
            ],     
            listMob: [
                {class: 'rotateInUpLeft', title: 'Легальность', subtitle: 'Мы всегда действуем в рамках законодательства и решаем проблемы исключительно правовыми способами.' },
                {class: 'rotateInUpLeft', title: 'Гарантия качества', subtitle: 'Мы с полной ответственностью берем на себя все обязательства и чувствительны к оценке Клиента. ' },
                {class: 'rotateInUpLeft', title: 'Оперативность', subtitle: 'Задачи Клиента решаются в максимально короткие сроки.' },
                {class: 'rotateInUpLeft', title: 'Профессиональная этика', subtitle: 'Мы с уважением относимся к нашим Клиентам, партнерам, конкурентам, судам и всем тем, с кем взаимодействуем.' }
            ],            
        }
    }

mixin both
    .about-descr__wrap
        .about-descr__title.lh-n
            h2.op-400.libra-p-b-l
                span.op-700= info.title.span
                | !{info.title.text}  
            base-libra(:isMobile="false" :type="'large'" class="libra-end")                                                  
        .about-descr__main
            h2.w-100.op-800= info.main.title
            each item,index in info.main.listDesk
                article.lh-n.desk(class=item.class + ' wow' )
                    h3.op-700= item.title
                    p.op-300= item.subtitle
            each item,index in info.main.listMob
                article.lh-n.mob(class=item.class + ' wow' data-wow-delay=index*0.3 + 's')
                    h3.op-700= item.title
                    p.op-300= item.subtitle                    
        .about-descr__image.libra-p-t-l
            base-libra(:isMobile="false" :type="'large'" class="libra-start")   
            .about-descr__parallax                                                           

section.about-descr
    +both

</template>
