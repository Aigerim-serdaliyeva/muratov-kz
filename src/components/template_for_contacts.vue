<template lang="pug">
    section(class="contacts fs fsp mobp")
        .contacts__wrap(v-if="!isMobile") 
            .contacts__controller
                p(@click="changeTrigger(true)") Контакты
                p(@click="changeTrigger(false)") Обратная связь
            .contacts__info(v-if="contacts_trigger === true") 
                .contacts__info__blur
                .contacts__info__address
                    article(v-for="(item, index) in contacts_address", :key="index")                        
                        p {{ item.text }}  
                .contacts__info__map
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afecebcbe1ca9ee17362443b16d81447ba20b476df72e5784f99198c30bed8335&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
            .contacts__call(v-else)
                .contacts__call__blur
                form(@submit="submit($event)")
                    h2 Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит. 
                    input(type="text",  v-model="call_name", placeholder="Имя")
                    input(type="text",v-mask="'8 (###)-###-##-##'", v-model="call_phone", placeholder="Телефон")    
                    p.call-err(v-if="call_err_trigger")
                        | {{call_err_text}}                    
                    button(type="submit") {{call_button}}    
        //- Mobile  
        mobile-menu      
        .blur-wrap(v-if="isMobile")                                
                .blur-wrap__bg            
        
        .blur-text(v-if="isMobile")
            .navigation 
                router-link(to="/")
                    img(src="~@/assets/images/back.svg")                
                h2 Контакты
            article(v-for="(item, index) in contacts_address", :key="index")
                img(:class="`contacts-${index + 1}`", :src="require(`@/assets/images/contacts/contacts-${index + 1}.png`)", alt="")
                p {{ item.text }}
            .line    
            .contacts__call
                form(@submit="submit($event)")
                    h2 Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит. 
                    input(type="text",  v-model="call_name", placeholder="Имя")
                    input(type="text",v-mask="'8 (###)-###-##-##'", v-model="call_phone", placeholder="Телефон")    
                    p.call-err(v-if="call_err_trigger")
                        | {{call_err_text}}                    
                    button(type="submit") {{call_button}}                                          
                                    
</template>

<script>
import { visited } from "@/mixins/visited";
import axios from "axios";

export default {
    data() {
        return {
            contacts_address: require("@/assets/json/contacts_address.json"),
            call_button: "Отправить",
            call_class: "call__pre",
            call_name: null,
            call_phone: null,
            publicPath: process.env.BASE_URL,
            call_err_trigger: false,
            call_err_text: "Пожалуйста, заполните нужные поля"
        };
    },
    computed: {
        contacts_trigger() {
            return this.$store.state.contacts_trigger;
        }
    },
    mixins: [visited],
    methods: {
        changeTrigger(type) {
            this.$store.commit("changeTrigger", type);
        },
        submit(e) {
            e.preventDefault();
            e.stopPropagation();
            this.call_err_text = "Пожалуйста, заполните нужные поля";
            if (
                this.call_name !== null &&
                this.call_phone !== null &&
                this.call_name !== "" &&
                this.call_phone !== ""
            ) {
                if (this.call_phone.length < 17) {
                    this.call_err_trigger = true;
                    this.call_err_text = "Номер введен неверно";
                } else {
                    this.call_err_trigger = false;
                    this.call_button = "Отправляется...";
                    this.call_class = "call__upd";
                    const options = {
                        method: "POST",
                        headers: {
                            "content-type": "multipart/form-data"
                        },
                        data: {
                            name: this.call_name,
                            phone: this.call_phone
                        },
                        url: `${this.publicPath}mailer.php`
                    };
                    axios(options)
                        .then(res => {
                            console.log(res);
                            this.call_button = "Ваша заявка отправлена";
                            this.call_class = "call__success";
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            } else {
                this.call_err_trigger = true;
            }
        }
    }
};
</script>
