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
      <div v-for="(item, index) in tabs" :key="item.id">
        <div class="article__mobile__header"           
          @click="activetab=index"       
          :class="[ activetab === index ? 'active': '' ]" >
          <div>
            <h2 class="article__mobile__title">{{ item.title }}</h2>
            <div class="article__mobile__mintext">{{ item.text }}</div>
          </div>  
        </div>      

        <div v-show="activetab === index" class="article__mobile__text" v-for="text in contentText" :key="text.id">{{ text }}</div>
      </div>
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

.d-none {
  display: none;
}
  
  .article__mobile {
    display: none;
    padding: 20px 0;
    &__title {
      text-align: center;
      margin-bottom: 5px;
    }
    &__mintext {
      text-align: center;
    }
    &__header {
      cursor: pointer;
      &.active {
        background: #fff;
        padding: 15px;
        .article__mobile {
          &__title {
            font-size: 18px;
            margin-bottom: 0;
          }
          &__mintext {
            display: none;
          }
        }
      }
    }
    &__text {
      text-align: justify;
      &:last-child {
        margin-bottom: 15px;
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

  @media screen and (max-width: 767px) {
    .articles {
      display: none;
    }
    .article__mobile {
      display: block;
    }
  }
</style>