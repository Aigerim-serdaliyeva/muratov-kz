<template lang="pug">

-
    var info = {
        title: 'Получить коммерческое предложение',
        p1: 'Наименование компании',
        p2: 'Имя',
        p3: 'Фамилия',
        p4: 'Отчество' ,
        p5: 'Мобильный номер телефона',
        p6: 'Email',
        button: 'Получить'
    }

mixin both
    form.home-mod-com__wrap
        h2.op-600= info.title
        input(type="text" placeholder=info.p1 required)
        input(type="text" placeholder=info.p2 required)
        input(type="text" placeholder=info.p3 required)
        input(type="text" placeholder=info.p4 required)
        input(type="tel" placeholder=info.p5 required)
        input(type="email" placeholder=info.p6 required)
        base-libra(:isMobile="false" :type="'small'" :transparent="true" class="libra-s-p libra-col-gay")
        button.op-600(type="submit")= info.button

section.home-mod-com
    +both

</template>
