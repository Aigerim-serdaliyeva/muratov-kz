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
    }

mixin closeSvg
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1543 0.240401C16.8337 -0.0801331 16.3141 -0.0801339 15.9935 0.2404L8.71795 7.51598L1.44237 0.2404C1.12183 -0.0801339 0.602146 -0.0801331 0.281612 0.240401C-0.0389216 0.560935 -0.0389219 1.08062 0.281612 1.40116L7.55719 8.67674L0.2404 15.9935C-0.0801336 16.3141 -0.0801333 16.8337 0.240401 17.1543C0.560934 17.4748 1.08062 17.4748 1.40116 17.1543L8.71795 9.83749L16.0347 17.1543C16.3553 17.4748 16.875 17.4748 17.1955 17.1543C17.516 16.8337 17.516 16.3141 17.1955 15.9935L9.8787 8.67674L17.1543 1.40116C17.4748 1.08062 17.4748 0.560935 17.1543 0.240401Z" fill="#3CA6CD"/>
    </svg>
     
mixin both
    form.home-mod-com__wrap(@submit="sendMail($event)")
        .home-mod-com__close(@click="toggleHomeCommercialModal")
            +closeSvg
        h2.op-600= info.title
        input(type="text" v-model="sendData.companyName" placeholder=info.p1 required)
        input(type="text" v-model="sendData.clientName" placeholder=info.p2 required)
        input(type="text" v-model="sendData.clientSurname" placeholder=info.p3 required)
        input(type="text" v-model="sendData.clientPatronymic" placeholder=info.p4 required)
        input(type="tel" v-model="sendData.clientPhone" placeholder=info.p5 required)
        input(type="email" v-model="sendData.clientEmail" placeholder=info.p6 required)
        base-libra(:isMobile="false" :type="'small'" :transparent="true" class="libra-col-gay")
        base-libra(:isMobile="true" :type="'small'" :transparent="true" class="libra-col-gay")
        button.op-600(type="submit") {{buttonState}}

section.home-mod-com(:class="{ 'hidden': home_commercial_modal_state }")
    +both

</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            sendData: {
                companyName: '',
                clientName: '',
                clientSurname: '',
                clientPatronymic: '',
                clientPhone: null,
                clientEmail: ''
            },
            buttonState: 'Получить'
        }
    },
    computed: {
        ...mapState([  
            'home_commercial_modal_state'
        ])
    },
    methods: {
        ...mapMutations([
            'toggleHomeCommercialModal', 
        ]),
        sendMail(e) {
            e.preventDefault();
            e.stopPropagation(); 
            this.buttonState = 'Отправка сообщения...'
            const options = {
                method: "POST",
                headers: {
                    "content-type": "multipart/form-data"
                },
                data: this.sendData,
                url: `${this.publicPath}mailer.php`
            }      
            axios(options)
            .then(res => {
                this.buttonState = 'Ваше сообщение отправлено, окно закроется через 5 секунд'
            })  
            .catch(err => {
                console.log(err)
            })   
        }
    }
}
</script>

