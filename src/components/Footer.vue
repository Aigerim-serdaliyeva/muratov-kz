<template lang="pug">

-   
    var info = {        
        list1: [
            { text: 'Главная', path: '/' },
            { text: 'О нас', path: '/about' },                        
        ],
        list2: [
            { text: 'Наши Клиенты', path: '/clients' },
            { text: 'Контакты', path: '/contacts' }            
        ],
        contacts: {
            desk: [
                { text: 'г.Алматы, ул. Шевченко, 153/1' },                
                { text: '+7 (727) 277-76-06' },
                { text: 'Email: info@muratov.kz' }
            ],
            mob: [
                { text: 'г.Алматы, ул. Шевченко, 153/1' },                
                { text: '<a href="tel:+77272777606">+7 (727) 277-76-06</a>' },
                { text: 'Email: info@muratov.kz' }
            ]
        }                                 
    }

    var license = 'All Rights Reserved 2019 «Muratov Partners'

mixin article(data, type, additionalClass)  
    //- Итерация по массиву
    mixin iteration(type)
        each subitem in data
            if type === 'default'                
                router-link(to=subitem.path) !{subitem.text}
            else 
                div !{subitem.text}
    if type === 'nav'
        article.footer__nav
            +iteration ('default')           
    else
        article.footer__contacts(class=additionalClass) 
            .footer__icons                
                a(href="https://www.instagram.com/muratov_partners/" target="_blank")
                    font-awesome-icon(:icon="['fab', 'instagram']")            
                a(href="https://www.facebook.com/Muratovpartners/" target="_blank")
                    font-awesome-icon(:icon="['fab', 'facebook-square']")
                a(href="https://vk.com/muratovpartners" target="_blank")
                    font-awesome-icon(:icon="['fab', 'vk']")
            +iteration('contacts')

//- Происходит усложнение из за маркетологов которые нонстоп меняют дизайн , расположение и количество номеров            
mixin both
    base-libra(:isMobile="false", :type="'large'" class="libra-start")
    base-libra(:isMobile="true", :type="'large'" class="libra-start")
    .footer__wrap.rob-400.lh-n                                    
        +article(info.list1, 'nav')                 
        +article(info.list2, 'nav')                
        +article(info.contacts.desk, 'contacts', 'desk')            
        +article(info.contacts.mob, 'contacts', 'mob w-100')                    
        .footer__license.op-400.w-100=license

footer.footer.w-100#footer
    +both
            
</template>
