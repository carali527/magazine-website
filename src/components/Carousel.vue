<script setup lang="ts">
import { ref, reactive } from 'vue';
const imgs = reactive(['https://www.w3schools.com/howto/img_nature_wide.jpg','https://picsum.photos/id/870/200/300?grayscale&blur=2','https://www.w3schools.com/howto/img_lights_wide.jpg']);
const show = ref(0);
function changeSlide(val:number){
    if (val < 0) show.value = imgs.length -1;
    else if (val > imgs.length - 1) show.value = 0;
    else show.value = val;
}
</script>

<template>
    <div class="relative my-10 w-[335px] lg:w-[730px] h-[200px] lg:h-[500px]">
        <div class="relative m-auto">
            <div class="mySlides fade absolute flex items-center justify-center" v-for="(img, index) in imgs" :key="index" v-show="index === show">
                <img class="w-[327px] h-[184px] lg:w-[730px] lg:h-[480px] rounded-3xl z-10" :src="img">
            </div>
            <img class="absolute w-[335px] h-[184px] lg:w-[700px] lg:h-[480px] rounded-3xl carousel__bg--first lg:top-[5px] lg:right-[10px]" src="https://www.w3schools.com/howto/img_nature_wide.jpg">
            <img class="absolute w-[400px] h-[170px] lg:w-[700px] lg:h-[400px] rounded-3xl carousel__bg--second mt-[30px] lg:mt-[20px] lg:ml-[20px] lg:right-[10px] lg:top-[30px]" src="https://www.w3schools.com/howto/img_nature_wide.jpg">
        </div>
        <a class="absolute left-[10px] top-[50%] z-11 translate-y-[-50%]" @click="changeSlide(show-1)">
            <svg class="w-8 h-8 lg:w-[40px] lg:h-[40px] fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"/>
            </svg>
        </a>
        <a class="absolute right-[10px] top-[50%] z-11 translate-y-[-50%]" @click="changeSlide(show+1)">
            <svg class="w-8 h-8 lg:w-[40px] lg:h-[40px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707"/>
            </svg>
        </a>
        <div class="absolute left-[50%] bottom-[20px] lg:bottom-[30px] flex gap-5 lg:gap-3 translate-x-[-50%] translate-y-[-50%] h-[10px] z-11">
            <span class="" @click="changeSlide(index-1)" v-for="index in imgs.length" :key="index" :class="{ active: show === index-1 }">
                <div class="w-[8px] lg:w-8 rounded h-[8px] bg-slate-300"></div>
            </span>
        </div>
    </div>
</template>

<style scoped>
    .carousel__bg--first {
        transform: perspective(1500px) rotateX(-45deg) scale(1);
        z-index: 5;
    }
    .carousel__bg--second {
        transform: perspective(800px) rotateX(-45deg) scale(1);
    }
    @media (min-width: 970px) {
        .carousel__bg--first {
            transform: perspective(1500px) rotateX(-33deg) scale(1);
        }
        .carousel__bg--second {
            transform: perspective(1000px) rotateX(-30deg) scale(1);
        }
    }
    .active div{
        background-color: white;
    }
</style>