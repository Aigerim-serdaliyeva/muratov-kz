<template>
  <div>    
    <h2 class="h2-regular op-800">Статьи</h2>

    <div class="articles" >
             
      <div class="tab__content" >
        <div class="article">
          <h2 class="article__title">{{ contentTitle }}</h2>
          <div class="article__text" v-for="text in contentText" :key="text.id">            
            {{ text }}              
          </div>
        </div>
      </div>

      <div class="tabs" >
        <div class="tabs__title">Другие статьи</div>
        <div class="tab__link"
          v-for="(item, index) in tabs" :key="item.id"
          @click="activetab=index" 
          :class="[ activetab === index ? 'active': '' ]"
        >
          <h3 class="tab__link__title"> {{item.title}} </h3>
          <div class="tab__link__text"> {{item.text}} </div>
        </div>

    
      </div>
    </div>

    <div class="article__mobile">
      <div class="article__mobile__header" v-for="(item, index) in tabs" :key="item.id" @click="toggleArticle(activetab === index)">
        <h2 class="article__mobile__title">{{ item.title }}</h2>
        <div class="article__mobile__mintext">{{ item.text }}</div>
      </div>
      <div class="article__mobile__text" v-for="text in contentText" :key="text.id">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 0,
      article: require("@/assets/json/article"),
      tabs: require("@/assets/json/tabs"),
    }
  },
  computed: {
    contentTitle() {
      return this.article[this.activetab].title
    },
    contentText() {
      return this.article[this.activetab].text
    }
  },
  methods: {
    
    toggleArticle(index) {
      // $('.article__mobile__header').click( function() {
      //   this.closest('.article__mobile').find('.article__mobile__text').slideToggle("slow")
      // })
      // debugger
      // if (window.outerWidth > 767) {
      //   return;
      // }
      $(this.article[this.activetab].text).slideToggle("slow");
      for (let i = 0; i <= 3; i++) {
        if (i !== this.activetab) {
          $(this.article[this.activetab].text).slideUp("slow");
        }
      }
    }
  }
 
}
</script>

<style lang="scss" scoped>

  .articles {
    display: flex;
    max-width: 1600px;
    margin: 0 auto;
  }

  .article {
    max-width: 1089px;
    margin: 0 20px 0 0;
    padding: 70px 0;
    &__title {
      color: #00305B;
      font-size: 36px;
      text-align: center;
      margin-bottom: 40px;
      font-family: OpenSans-700;
    }
    &__text {
      font-size: 24px;
      color: #000;
      font-family: OpenSans-300;
      text-align: justify;
    }

    &__mobile {
      &__header {
        cursor: pointer;
        background: #EAF4F6;
        padding: 19px 15px;
      }
      &__title {
        color: #00305B;
        font-family: OpenSans-700;
        font-size: 14px;
      }
      &__mintext {
        color: #656565;
        font-size: 13px;
        font-family: OpenSans-300;
      }
      &__text {
        font-size: 14px;
        font-family: OpenSans-300;
        padding: 0 20px;
      }
    }
  }

  .tabs {
    &__title {
      color: #00305B;
      padding: 19px 10px;
      font-size: 24px;
      font-family: OpenSans-800;
      text-align: center;
      background: #EAF4F6;
    }
  }

  .tab {
    &__link {
      cursor: pointer;
      max-width: 493px;
      background: #EAF4F6;
      padding: 22px 20px;

      &.active {
        background: #fff;
      }

      &__title {
        font-size: 18px;
        color: #00305B;
        font-family: OpenSans-700;
        margin-bottom: 8px;
      }

      &__text {
        color: #656565;
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .articles {
      margin: 0 60px;
    }
    .article {
      &__title {
        font-size: 28px;
        margin-bottom: 20px;
      }
      &__text {
        font-size: 18px;
      }
    }
    .tab {
      &__link {
        padding: 15px;
        &__title {
          font-size: 16px;
        }
      }
    }
  }
</style>