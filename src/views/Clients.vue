<template lang="pug">
    
-
    var info = {
        title: 'Наши Клиенты',
        testimonals: 'Отзывы'
    }   
    
mixin both
    .clients__wrap   
        .clients__title.h2-regular.op-800= info.title 
        .clients__slider
            hooper(:settings="settings1" ref="hooper1" :style="styleHooper")
                slide(v-for="(item,index) in 7" :key="`hooper1-${index}`")
                    .clients__slider-block
                        img(:src="require(`@/assets/images/clients/client-${index + 1}.png`)")                        
                hooper-pagination(slot='hooper-addons')            
        base-libra(:isMobile="false" :type="'small'" :transparent="true" class="libra-col-blue")                
        base-libra(:isMobile="true" :type="'small'" :transparent="true" class="libra-col-blue")                
        .clients__testimonals            
            //- h2.op-800= info.testimonals
            //- hooper(:settings="settings2" ref="hooper2" :style="styleHooper")
            //-     slide(v-for="(item,index) in 23" :key="`hooperred-${index}`")
            //-         .clients__slider-block
            //-             img(:src="require(`@/assets/images/docs/doc-${index + 1}.png`)" @click="toggleGallery(index)")                        
            //-     hooper-navigation(slot='hooper-addons')                                        
            
            
section.clients#clients
    +both
    gallery(:images='images' :index='index' @close='toggleGallery(null)')

</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";
import VueGallery from "vue-gallery";
import toggleHeaderHeight from "@/mixins/toggleHeaderHeight";

export default {
  mixins: [toggleHeaderHeight],
  data() {
    return {
      images: [
        "docs/doc-1.jpg",
        "docs/doc-2.jpg",
        "docs/doc-3.jpg",
        "docs/doc-4.jpg",
        "docs/doc-5.jpg",
        "docs/doc-6.jpg",
        "docs/doc-7.jpg",
        "docs/doc-8.jpg",
        "docs/doc-9.jpg",
        "docs/doc-10.jpg",
        "docs/doc-11.jpg",
        "docs/doc-12.jpg",
        "docs/doc-13.jpg",
        "docs/doc-14.jpg",
        "docs/doc-15.jpg",
        "docs/doc-16.jpg",
        "docs/doc-17.jpg",
        "docs/doc-18.jpg",
        "docs/doc-19.jpg",
        "docs/doc-20.jpg",
        "docs/doc-21.jpg",
        "docs/doc-22.jpg",
        "docs/doc-23.jpg"
      ],
      index: null,
      styleHooper: {
        height: "auto",
        outline: "none",
        "user-select": "none"
      },
      settings1: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 2500,
        mouseDrag: false,
        wheelControl: false,
        shortDrag: false,
        breakpoints: {
          325: {
            itemsToShow: 1
          },
          1024: {
            itemsToShow: 5
          }
        }
      },
      settings2: {
        infiniteScroll: true,
        mouseDrag: false,
        wheelControl: false,
        shortDrag: false,
        breakpoints: {
          325: {
            itemsToShow: 1
          },
          1024: {
            itemsToShow: 5
          }
        }
      }
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    gallery: VueGallery
  },
  methods: {
    toggleGallery(index) {
      this.index = index;
      this.$refs.hooper1.restart();
      this.$refs.hooper2.restart();
    }
  }
};
</script>
