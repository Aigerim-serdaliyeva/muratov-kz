<template lang="pug">

-   
    var info = {        
        list1: [
            { text: 'Главная', path: '' },
            { text: 'О нас', path: '' },            
            { text: 'Услуги', path: '' }
        ],
        list2: [
            { text: 'Наши Клиенты', path: '' },
            { text: 'Контакты', path: '' }            
        ],
        contacts: {
            desk: [
                { text: 'г.Алматы, ул. Шевченко, 153/1' },
                { text: 'Call-center: 5335, +7 (701) 031-67-13, +7 (727) 339-04-52 ' },
                { text: 'ПЦН: +7 (727) 346-83-18, +7 (701) 038-68-20' },
                { text: 'Email: info.muratov.kz' }
            ],
            mob: [
                { text: 'г.Алматы, ул. Шевченко, 153/1' },
                { text: 'Call-center: 5335, +7 (701) 031-67-13, +7 (727) 339-04-52 ' },
                { text: 'ПЦН: +7 (727) 346-83-18, +7 (701) 038-68-20' },
                { text: 'Email: info.muratov.kz' }
            ]
        }                                 
    }

    var license = 'All Rights Reserved 2019 «Muratov Partners'

mixin article(data, type, additionalClass)  
    //- Итерация по массиву
    mixin iteration
        each subitem in data                
                a(href=subitem.path) !{subitem.text}

    if type === 'nav'
        article.footer__nav
            +iteration            
    else
        article.footer__contacts(class=additionalClass) 
            .footer__icons
                font-awesome-icon(:icon="['fab', 'instagram']")            
                font-awesome-icon(:icon="['fab', 'facebook-square']")
                font-awesome-icon(:icon="['fab', 'vk']")
            +iteration

//- Происходит усложнение из за маркетологов которые нонстоп меняют дизайн , расположение и количество номеров            
mixin both
    base-libra(:isMobile="false", :type="'large'" class="libra-start")
    base-libra(:isMobile="true", :type="'large'" class="libra-start")
    .footer__wrap.rob-400.lh-n                                    
        +article(info.list1, 'nav')                 
        +article(info.list2, 'nav')                
        +article(info.contacts.desk, 'contacts', 'desk')            
        +article(info.contacts.desk, 'contacts', 'mob w-100')                    
        .footer__license.op-400.w-100=license

footer.footer.w-100#footer
    +both
            
</template>
