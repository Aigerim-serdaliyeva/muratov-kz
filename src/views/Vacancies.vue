<template>
  <div>
    <h2 class="h2-regular op-800">Вакансии</h2>

    <div>
      <div class="vacancies__title">
        <p>В данном разделе размещены актуальные вакансии нашей компании. <br>
          Отправляйте резюме на наш электронный адрес: <a href="mailto:recrutment@muratov.kz">recrutment@muratov.kz</a></p> 
      </div>
    </div>
		

		<div class="vacancies">

			<div
				class="contacts-block"
				ref="contactsBlock"
				:style="{ position: position, left: `${contactsBlockLeft}px`, top: `${contactsBlockTop}px` }"
			>
				<div class="contacts-block__content">
					<div class="contacts-block__title">Контакты</div>
					<div class="contacts-block__phone"><img src="" alt=""> <a href="tel:+77010316711" class="text-phone" id="phone_number">+7 (701) 031 67 11</a> <span> (Дарья)</span></div>
					<div class="contacts-block__phone"><img src="" alt=""> <a href="tel:+77272777600" class="text-phone" id="phone_number">+7 (727) 277 76 00</a> <span>, внутр. 603</span></div>
					<div class="contacts-block__phone"><img src="" alt=""><a href="mailto:recrutment@muratov.kz">recrutment@muratov.kz</a></div>
				</div>
				<a href="mailto:recrutment@muratov.kz" class="contacts-block__link">Отправить резюме</a>
			</div>

			<div class="vacancy">
				<h3 class="vacancy__title">Юрист</h3>
				<div class="vacancy__block">
					<h3 class="vacancy__text">Обязанности:</h3>
					<ul>
						<li>•	управление штатом проектных юристов (5-7 человек);</li>
						<li>•	полное сопровождение клиента (юридического лица);</li>
						<li>•	консультация клиентов;</li>
						<li>•	подготовка документов для клиентов.</li>
					</ul>
					<h3 class="vacancy__text">Требования:</h3>
					<ul>
						<li>•	высшее юридическое образование;</li>
						<li>•	опыт работы от 3 (трех) лет;</li>
						<li>•	знание в области:</li>
						<li>1.	гражданского законодательства;</li>
						<li>2.	гражданско-процессуального законодательства;</li>
						<li>3.	трудового законодательства;</li>
						<li>4.	налогового законодательства;</li>
						<li>5.	административного законодательства;</li>
						<li>6.	законодательства о гос. закупках;</li>
						<li>7.	тендерах.</li>
						<li>•	ответственность;</li>
						<li>•	исполнительность;</li>
						<li>•	коммуникабельность.</li>
					</ul>
					<h3 class="vacancy__text">Условия:</h3>
					<ul>
						<li>•	официальное трудоустройство;</li>
						<li>•	график с 9.00 до 18.00. 5/2;</li>
						<li>•	з/п оговаривается на собеседовании;</li>
						<li>•	возможность карьерного роста, как горизонтального, так и вертикального;</li>
						<li>•	достойная система мотивации при достижении KPI+расширенный соц. пакет.</li>
					</ul>
				</div>
			</div>

			<div class="vacancy">
				<h3 class="vacancy__title">Менеджер по продажам юридических услуг</h3>
				<div class="vacancy__block">
					<h3 class="vacancy__text">Обязанности:</h3>
					<ul>
						<li>•	поиск и привлечение клиентов;</li>
						<li>•	координация текущих клиентов;</li>
						<li>•	выполнение индивидуального плана продаж;</li>
						<li>•	выполнение задач руководителя;</li>
						<li>•	анализ и отчётность.</li>
					</ul>
					<h3 class="vacancy__text">Требования:</h3>
					<ul>
						<li>•	знание техники прямых продаж, опыт применения на практике; </li>
						<li>•	умение работать в команде и работать на результат; </li>
						<li>•	грамотная письменная и устная речь; </li>
						<li>•	честность; </li>
						<li>•	коммуникабельность; </li>
						<li>•	целеустремленность. </li>
					</ul>
					<h3 class="vacancy__text">Условия:</h3>
					<ul>
						<li>•	официальное трудоустройство;</li>
						<li>•	график работы с 9.00 до 18.00. 5/2;</li>
						<li>•	заработная плата+бонусы (KPI);</li>
						<li>•	возможность карьерного роста.</li>
					</ul>
				</div>
			</div>

			<div class="vacancy">
				<h3 class="vacancy__title">Проектный юрист</h3>
				<div class="vacancy__block">
					<h3 class="vacancy__text">Обязанности:</h3>
					<ul>
						<li>Начался отбор начинающих юристов на стажировку.</li>
					</ul>
					<h3 class="vacancy__text">Требования:</h3>
					<ul>
						<li>•	высшее юридическое образование;</li>
						<li>•	средний бал GPA - не ниже 3,5;</li>
						<li>•	оперативность;</li>
						<li>•	коммуникабельность;</li>
						<li>•	стремление обучаться и получать новые знания;</li>
						<li>•	умение аккумулировать свои знания и применять их на практике;</li>
						<li>•	умение анализировать информацию;</li>
						<li>•	высокий уровень персональной ответственности;</li>
						<li>•	грамотная речь.</li>
					</ul>
					<h3 class="vacancy__text">Условия:</h3>
					<ul>
						<li>•	график с 9.00 до 18.00. 5/2;</li>
						<li>•	официальное трудоустройство;</li>
						<li>•	возможность вертикального карьерного роста;</li>
						<li>•	расширенная программа обучения и развития за счет работодателя;</li>
						<li>•	условия оплаты оговаривается на собеседовании.</li>
					</ul>
				</div>
			</div>

		</div>
		
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactsBlockOffsetTop: 0,
      contactsBlockLeft: 1300,
      headerHeight: 66,
      isContactsBlockSticked: false
    }
  },
  computed: {
    position: function() {
      return this.isContactsBlockSticked ? 'absolute' : 'sticky';
    },
    contactsBlockTop: function() {
      return this.headerHeight + 30;
    }
  },
  methods: {
    handleScroll (event) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop + this.contactsBlockTop >= this.contactsBlockOffsetTop) {
        this.isContactsBlockSticked = true;
      } else {
        this.isContactsBlockSticked = false;
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.contactsBlockOffsetTop = this.$refs.contactsBlock.offsetTop;
    this.contactsBlockLeft = this.$refs.contactsBlock.offsetLeft;
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
  .vacancies {
		position: relative;
		max-width: 1478px;
		margin: 0 auto;
    &__title {
      color: #00305B;
      background: #EAF4F6;
      font-size: 18px;
      padding: 57px 15px;
      a {
        font-weight: bold;
        color: #00305B;
      }
      p {
        margin: 0 auto;
        max-width: 660px;
      }
    }
  }

	.vacancy {
		color: #00305B;

		&__title {
			font-weight: 600;
			font-size: 24px;
			text-align: center;
			margin: 30px 0;
		}

		&__block {
			background: #EAF4F6;
			max-width: 1478px;
			margin: 0 auto;
			padding: 40px 40px 40px 250px;
			&:last-child {
				margin-bottom: 30px;
			}
		}

		&__text {
			font-size: 18px;
			font-weight: 600;
		}

		ul {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
			li {
				font-size: 18px;
			}
		}
	}

  .contacts-block {
		color: #00305B;
		text-align: center;
		max-width: 316px;
		width: 100%;
		right: 160px;

		&__content {
			background: #fff;
			box-shadow: 0px 0px 10px #CEE0E3;
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
			font-weight: 600;
			font-size: 24px;
			position: relative;
			margin-bottom: 30px;
			&::after {
				content: "";
				width: 72px;
				height: 1px;
				position: absolute;
				background: #CFCFCF;
				left: 50%;
				transform: translateX(-50%);
				bottom: -15px;
			}
		}

		&__phone {
			font-size: 14px;
			margin-bottom: 20px;
			a {				
				color: #00305B;
			}
		}

		&__link {
			display: block;
			color: #fff;
			background: #3CA6CD;
			border-radius: 5px;
			font-weight: 600;
			font-size: 18px;
			padding: 13px;
		}
  }
</style>