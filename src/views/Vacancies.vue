<template>
  <div>
    <h2 class="h2-regular op-800">Вакансии</h2>

    <div>
      <h2 class="vacancies__title">
        <span>Построй свою карьеру вместе</span>  <span>с Muratov Partners!</span>
      </h2>
    </div>

    <div class="vacancies">
      <div
        class="contacts-block"
        ref="contactsBlock"
        :style="{
          position: position,
          left: `60%`,
          top: `${contactsBlockTop}px`
        }"
      >
        <div class="contacts-block__content">
          <div class="contacts-block__title">Контакты</div>
          <div class="contacts-block__phone">
            <img src="../assets/images/vacancy/phone.png" alt="" />
            <a href="tel:+77010316711" class="text-phone" id="phone_number"
              >+7 (701) 031 67 11</a
            >
            <span> (Дарья)</span>
          </div>
          <div class="contacts-block__phone">
            <img src="../assets/images/vacancy/telephone.png" alt="" />
            <a href="tel:+77272777600" class="text-phone" id="phone_number"
              >+7 (727) 277 76 00</a
            >
            <span>, внутр. 603</span>
          </div>
          <div class="contacts-block__phone">
            <img src="../assets/images/vacancy/message.png" alt="" /><a
              href="mailto:recrutment@muratov.kz"
              >recrutment@muratov.kz</a
            >
          </div>
        </div>
        <a href="mailto:recrutment@muratov.kz" class="contacts-block__link"
          >Отправить резюме</a
        >
      </div>

      <div class="vacancy">
        <h3 class="vacancy__title" @click="toggleVacancy(1)">Юрист</h3>
        <div class="vacancy__block open" ref="vacancyBlock1">
          <h3 class="vacancy__text">Обязанности:</h3>
          <ul>
            <li>• управление штатом проектных юристов (5-7 человек);</li>
            <li>• полное сопровождение клиента (юридического лица);</li>
            <li>• консультация клиентов;</li>
            <li>• подготовка документов для клиентов.</li>
          </ul>
          <h3 class="vacancy__text">Требования:</h3>
          <ul>
            <li>• высшее юридическое образование;</li>
            <li>• опыт работы от 3 (трех) лет;</li>
            <li>• знание в области:</li>
            <li>1. гражданского законодательства;</li>
            <li>2. гражданско-процессуального законодательства;</li>
            <li>3. трудового законодательства;</li>
            <li>4. налогового законодательства;</li>
            <li>5. административного законодательства;</li>
            <li>6. законодательства о гос. закупках;</li>
            <li>7. тендерах.</li>
            <li>• ответственность;</li>
            <li>• исполнительность;</li>
            <li>• коммуникабельность.</li>
          </ul>
          <h3 class="vacancy__text">Условия:</h3>
          <ul>
            <li>• официальное трудоустройство;</li>
            <li>• график с 9.00 до 18.00. 5/2;</li>
            <li>• з/п оговаривается на собеседовании;</li>
            <li>
              • возможность карьерного роста, как горизонтального, так и
              вертикального;
            </li>
            <li>
              • достойная система мотивации при достижении KPI+расширенный соц.
              пакет.
            </li>
          </ul>

          <div class="contacts-block">
            <div class="contacts-block__content">
              <div class="contacts-block__title">Контакты</div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/phone.png" alt="" />
                <a href="tel:+77010316711" class="text-phone" id="phone_number"
                  >+7 (701) 031 67 11</a
                >
                <span> (Дарья)</span>
              </div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/telephone.png" alt="" />
                <a href="tel:+77272777600" class="text-phone" id="phone_number"
                  >+7 (727) 277 76 00</a
                >
                <span>, внутр. 603</span>
              </div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/message.png" alt="" /><a
                  href="mailto:recrutment@muratov.kz"
                  >recrutment@muratov.kz</a
                >
              </div>
            </div>
            <a href="mailto:recrutment@muratov.kz" class="contacts-block__link"
              >Отправить резюме</a
            >
          </div>
        </div>
      </div>

      <div class="vacancy">
        <h3 class="vacancy__title" @click="toggleVacancy(2)">
          Менеджер по продажам юридических услуг
        </h3>
        <div class="vacancy__block" ref="vacancyBlock2">
          <h3 class="vacancy__text">Обязанности:</h3>
          <ul>
            <li>• поиск и привлечение клиентов;</li>
            <li>• координация текущих клиентов;</li>
            <li>• выполнение индивидуального плана продаж;</li>
            <li>• выполнение задач руководителя;</li>
            <li>• анализ и отчётность.</li>
          </ul>
          <h3 class="vacancy__text">Требования:</h3>
          <ul>
            <li>
              • знание техники прямых продаж, опыт применения на практике;
            </li>
            <li>• умение работать в команде и работать на результат;</li>
            <li>• грамотная письменная и устная речь;</li>
            <li>• честность;</li>
            <li>• коммуникабельность;</li>
            <li>• целеустремленность.</li>
          </ul>
          <h3 class="vacancy__text">Условия:</h3>
          <ul>
            <li>• официальное трудоустройство;</li>
            <li>• график работы с 9.00 до 18.00. 5/2;</li>
            <li>• заработная плата+бонусы (KPI);</li>
            <li>• возможность карьерного роста.</li>
          </ul>
          <div class="contacts-block">
            <div class="contacts-block__content">
              <div class="contacts-block__title">Контакты</div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/phone.png" alt="" />
                <a href="tel:+77010316711" class="text-phone" id="phone_number"
                  >+7 (701) 031 67 11</a
                >
                <span> (Дарья)</span>
              </div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/telephone.png" alt="" />
                <a href="tel:+77272777600" class="text-phone" id="phone_number"
                  >+7 (727) 277 76 00</a
                >
                <span>, внутр. 603</span>
              </div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/message.png" alt="" /><a
                  href="mailto:recrutment@muratov.kz"
                  >recrutment@muratov.kz</a
                >
              </div>
            </div>
            <a href="mailto:recrutment@muratov.kz" class="contacts-block__link"
              >Отправить резюме</a
            >
          </div>
        </div>
      </div>

      <div class="vacancy">
        <h3 class="vacancy__title" @click="toggleVacancy(3)">
          Проектный юрист
        </h3>
        <div class="vacancy__block" ref="vacancyBlock3">
          <h3 class="vacancy__text">Обязанности:</h3>
          <ul>
            <li>Начался отбор начинающих юристов на стажировку.</li>
          </ul>
          <h3 class="vacancy__text">Требования:</h3>
          <ul>
            <li>• высшее юридическое образование;</li>
            <li>• средний бал GPA - не ниже 3,5;</li>
            <li>• оперативность;</li>
            <li>• коммуникабельность;</li>
            <li>• стремление обучаться и получать новые знания;</li>
            <li>
              • умение аккумулировать свои знания и применять их на практике;
            </li>
            <li>• умение анализировать информацию;</li>
            <li>• высокий уровень персональной ответственности;</li>
            <li>• грамотная речь.</li>
          </ul>
          <h3 class="vacancy__text">Условия:</h3>
          <ul>
            <li>• график с 9.00 до 18.00. 5/2;</li>
            <li>• официальное трудоустройство;</li>
            <li>• возможность вертикального карьерного роста;</li>
            <li>
              • расширенная программа обучения и развития за счет работодателя;
            </li>
            <li>• условия оплаты оговаривается на собеседовании.</li>
          </ul>
          <div class="contacts-block">
            <div class="contacts-block__content">
              <div class="contacts-block__title">Контакты</div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/phone.png" alt="" />
                <a href="tel:+77010316711" class="text-phone" id="phone_number"
                  >+7 (701) 031 67 11</a
                >
                <span> (Дарья)</span>
              </div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/telephone.png" alt="" />
                <a href="tel:+77272777600" class="text-phone" id="phone_number"
                  >+7 (727) 277 76 00</a
                >
                <span>, внутр. 603</span>
              </div>
              <div class="contacts-block__phone">
                <img src="../assets/images/vacancy/message.png" alt="" /><a
                  href="mailto:recrutment@muratov.kz"
                  >recrutment@muratov.kz</a
                >
              </div>
            </div>
            <a href="mailto:recrutment@muratov.kz" class="contacts-block__link"
              >Отправить резюме</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="vacancies__text">
      В данном разделе размещены актуальные вакансии нашей компании. <br />
      Отправляйте резюме на наш электронный адрес:
      <a href="mailto:recrutment@muratov.kz">recrutment@muratov.kz</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      contactsBlockOffsetTop: 0,
      headerHeight: 66,
      isContactsBlockSticked: false
    };
  },
  computed: {
    position: function() {
      return this.isContactsBlockSticked ? "fixed" : "absolute";
    },
    contactsBlockTop: function() {
      return this.headerHeight + 30;
    }
  },
  methods: {
    handleScroll(event) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop + this.contactsBlockTop >= this.contactsBlockOffsetTop) {
        this.isContactsBlockSticked = true;
      } else {
        this.isContactsBlockSticked = false;
      }
    },
    toggleVacancy(index) {
      if (window.outerWidth > 767) {
        return;
      }
      $(this.$refs[`vacancyBlock${index}`]).slideToggle("slow");
      for (let i = 1; i <= 3; i++) {
        if (i !== index) {
          $(this.$refs[`vacancyBlock${i}`]).slideUp("slow");
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.contactsBlockOffsetTop = $(this.$refs.contactsBlock).offset().top;
    this.contactsBlockLeft = $(this.$refs.contactsBlock).offset().left;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.d-block {
  display: block;
}

.d-none {
  display: none;
}

.vacancies {
  position: relative;
  margin: 0 auto;
  font-family: serif;
  &__title {
    text-align: center;
    font-weight: 800;
    font-size: 40px;
    color: #00305B;
    padding: 50px 0;
    background: #EAF4F6;
    span {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
  &__text {
    font-family: OpenSans-300;
    color: #00305b;
    font-size: 18px;
    padding: 57px 15px;
    text-align: center;
    a {
      font-weight: bold;
      color: #00305b;
    }
  }
}

.vacancy {
  color: #00305b;

  &__title {
    font-weight: 600;
    max-width: 1478px;
    margin: 0 auto;
    font-family: OpenSans-600;
    font-size: 24px;
    text-align: center;
    padding: 30px 0;
    background: #fff;
    border: 1px solid rgba(#00305b, 0.3);
    border-left: none;
    border-right: none;
  }

  &__block {
    background: #eaf4f6;
    max-width: 1478px;
    margin: 0 auto;
    padding: 40px 40px 40px 12%;
    &:last-child {
      // margin-bottom: 30px;
    }
    .contacts-block {
      display: none;
      margin: 0 auto;
      max-width: none;
      &__content {
        margin-bottom: 0;
        border-radius: 0;
      }
      &__link {
        border-radius: 0;
      }
    }
  }

  &__text {
    font-size: 18px;
    font-family: OpenSans-600;
    font-weight: 600;
  }

  ul {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    li {
      font-size: 18px;
      font-family: OpenSans-300;
    }
  }
}

.contacts-block {
  color: #00305b;
  text-align: center;
  max-width: 316px;
  width: 100%;
  margin-top: 20px;

  &__content {
    background: #fff;
    box-shadow: 0px 0px 10px #cee0e3;
    border-radius: 5px;
    padding: 30px 40px 10px;
    margin-bottom: 5px;
  }
  &.fixed {
    position: fixed;
    top: 70px;
    left: 10px;
  }

  &__title {
    font-family: OpenSans-600;
    font-weight: 600;
    font-size: 24px;
    position: relative;
    margin-bottom: 30px;
    &::after {
      content: "";
      width: 72px;
      height: 1px;
      position: absolute;
      background: #cfcfcf;
      left: 50%;
      transform: translateX(-50%);
      bottom: -15px;
    }
  }

  &__phone {
    font-family: OpenSans-400;
    font-size: 14px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 6px;
    }
    a {
      color: #00305b;
    }
  }

  &__link {
    font-family: OpenSans-600;
    display: block;
    color: #fff;
    background: #3ca6cd;
    border-radius: 5px;
    font-weight: 600;
    font-size: 18px;
    padding: 13px;
  }
}

@media screen and (max-width: 1200px) {
  .vacancy {
    &__block {
      padding: 30px 50px;
    }
  }
}

@media screen and (max-width: 991px) {
  .vacancy {
    &__title {
      font-size: 20px;
    }
    &__block {
      padding: 30px;
    }
    &__text {
      font-size: 16px;
    }
    ul {
      li {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .vacancies {
    padding-bottom: 20px;
    background: #eaf4f6;
    font-family: Open Sans;
    &__title {
      font-size: 16px;
      text-align: center;
      padding: 30px 15px;
      span {
        display: block;
        margin: 0;
      }
    }
  }

  .contacts-block {
    display: none;
  }

  .vacancy {
    &__title {
      font-size: 18px;
      cursor: pointer;
      padding: 20px;
      margin: 0;
    }
    &__block {
      padding: 30px 20px;
      display: none;
      &:last-child {
        margin-bottom: 0;
      }

      &.open {
        display: block;
        animation-delay: 2s;
      }

      .contacts-block {
        display: block;
      }
    }
    &__text {
      font-size: 14px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
}
</style>
