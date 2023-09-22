<script setup lang="ts">
import Carousel from './Carousel.vue';
import { ref, watch } from 'vue';
import { useWindowScroll, } from '@vueuse/core';
const toggleButton = ref(false);
const showSearchBar = ref(false);
const hideLineBtn = ref(false);
const description = ref('');
const Url = ref('');
const { x, y } = useWindowScroll();
const positionNow = ref(y.value);

fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=0b38b1226bb8495399c8c50e26bd1e2f&country=ca')
.then((res) => {
  return res.json();
}).then((data) => {
    description.value = data.sources[1].description;
    Url.value = data.sources[1].url;
}).catch((err) => {
    console.log('Error: ', err);
});

watch(() => y.value, () => {
    if (positionNow.value < y.value) {
        if (!toggleButton.value) showSearchBar.value = true;
    }else {
        showSearchBar.value = false;
        hideLineBtn.value = false;
    }
    positionNow.value = y.value;
});
</script>

<template>
    <div>
        <div class="width-full flex items-center justify-center lg:py-[20px] py-[10px]">
            <a class="hidden lg:flex cursor-pointer bg-slate-300 w-[970px] h-[250px] items-center justify-center text-white" href="">
                970 x 250
            </a>
            <a class="lg:hidden cursor-pointer bg-slate-300 w-[300px] h-[250px] flex items-center justify-center text-white" href="">
                300 x 250
            </a>
        </div>
        <header class="bg-[#B38E5B] h-8 flex flex-col items-end py-1 px-[40px] hidden lg:flex">
            <ul class="flex gap-3 text-white">
                <li>
                    <a class="cursor-pointer text-sm">康健</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">大人社團</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">康健知識庫</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">康健線上學習</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">康健嚴選</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">康健出版</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">康健影音</a>
                </li>
                <li>
                    <a class="cursor-pointer text-sm">書香花園</a>
                </li>
            </ul>
        </header>
        <div :class="[
            ['items-center opacity-100 bg-white flex relative lg:justify-around shadow-nav h-[61px] lg:h-[80px]'],
            (!showSearchBar) && 'justify-around',
            (showSearchBar) && 'justify-center'
            ]">
            <div :class="[
                ['py-4 items-center lg:flex'],
                (!showSearchBar) && 'flex',
                (showSearchBar) && 'hidden'
            ]">
                <button 
                    class="mx-[20px] w-[20px] relative" 
                    id="menu-toggle" 
                    :aria-expanded="toggleButton ? 'true' : 'false'"
                    @click="toggleButton = !toggleButton"
                >
                    <span :class="[
                        ['block bg-black h-[3px] rounded w-full duration-100'],
                        (toggleButton) && 'rotate-45 absolute duration-100'
                        ]"></span>
                    <span :class="[
                        ['block bg-black h-[3px] rounded w-full mt-[4px] block'],
                        (toggleButton) && 'hidden'
                        ]"></span>
                    <span :class="[
                        ['block bg-black h-[3px] rounded w-full duration-100'],
                        (!toggleButton) && 'mt-[4px]',
                        (toggleButton) && '-rotate-45 absolute duration-100 mt-0'
                        ]"></span>
                </button>
                <a class="lg:h-[48px] w-[200px] text-white bg-black flex items-center justify-center mr-[10px] h-[29px]" href="">
                    logo
                </a>
                <a class="h-[48px] w-[200px] text-white rounded bg-slate-300 flex items-center justify-center hidden lg:flex" href="">
                    327 X 28
                </a>
            </div>
            <div :class="[
                ['lg:flex'],
                (showSearchBar) && 'flex',
                (!showSearchBar) && 'hidden'
            ]">
                <div :class="[
                    ['lg:max-w-[400px] border border-[#DDDDDD] border-solid rounded-[46px] h-[40px] p-2 flex lg:mr-0'],
                    (hideLineBtn) && 'mr-1',
                    (!hideLineBtn) && 'mr-2.5'
                ]">
                    <select class="mr-2.5 xl:min-w-[110px] focus-visible:outline-0 cursor-pointer">
                        <option value="all">全部</option>
                    </select>
                    <div :class="[
                        ['flex rounded-[20px] border-[#DDDDDD] relative'],
                        (hideLineBtn) && 'w-[70vw]'
                    ]">
                        <input type="text" :class="[
                            ['border-solid border border-y-0 border-r-0 pl-2.5 focus-visible:outline-0 lg:hidden'],
                            (!hideLineBtn) && 'flex',
                            (hideLineBtn) && 'hidden']"/>
                        <input type="text" :class="[
                            ['border-solid border border-y-0 border-r-0 pl-2.5 focus-visible:outline-0 lg:flex lg:w-[150px] xl:w-auto'],
                            (hideLineBtn) && 'flex',
                            (!hideLineBtn) && 'hidden']" placeholder="請輸入關鍵字"/>
                        <button class="absolute right-0" @click="hideLineBtn = !hideLineBtn">
                            <svg class="w-7 h-7 fill-[#DDDDDD]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <button :class="[
                    ['text-white bg-[#07B53B] rounded-[46px] py-1 px-2 lg:hidden'],
                    (!hideLineBtn) && 'flex items-center justify-center',
                    (hideLineBtn) && 'hidden'
                ]">
                    加入 LINE
                </button>
            </div>
            <div :class="[
                ['items-center justify-center lg:flex'],
                (!showSearchBar) && 'flex',
                (showSearchBar) && 'hidden'
            ]">
                <p class="mr-[10px] hidden lg:flex text-base">會員限定</p>
                <button class="text-[#FF9122] border-[#FF9122] mr-[10px] py-1.5 px-4 rounded-[46px] border text-base">登入</button>
                <button class="text-white bg-[#FF9122] rounded-[46px] py-1.5 px-4 hidden lg:flex text-base">加入會員</button>
            </div>
            <nav :class="[
                ['absolute top-16 lg:top-20 h-screen bg-[#F7F7F7] w-full min-h-full flex items-center lg:justify-center flex-col z-30'],
                (!toggleButton) && 'hidden duration-100',
                (toggleButton) && 'block duration-100'
            ]">
                <a class="h-[82px] w-[327px] text-white rounded bg-slate-300 flex items-center justify-center lg:hidden mt-[20px]" href="">
                    327 X 28
                </a>
                <a class="h-screen flex items-center justify-center">
                    <span class="text-[64px]">MENU</span>
                </a>
            </nav>
        </div>
        <div class="px-5 flex flex-col lg:flex-row-reverse lg:justify-around flex-wrap items-center">
            <Carousel />
            <div class="flex flex-col items-center justify-center lg:flex-col max-w-[410px]">
                <div class="w-full mb-[20px]">
                    <ul class="flex">
                        <li class="flex bg-grey-black/[.6] rounded-xl px-2 mr-[10px] text-sm">
                            <div class="flex items-center justify-center">
                                <svg class="w-[15px] h-[15px]" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    viewBox="0 0 24 24" xml:space="preserve">
                                <path d="M9,18l7-6L9,6V18z"/>
                                </svg>
                            </div>
                            <span class="text-white m-auto">影音</span>
                        </li>
                        <li>
                            <span class="text-[#B38E5B] text-sm mr-[10px]">#不分癌</span>
                        </li>
                        <li>
                            <span class="text-[#B38E5B] text-sm mr-[10px]">#常見治療問題</span>
                        </li>
                        <li>
                            <span class="text-[#B38E5B] text-sm">#常見問題</span>
                        </li>
                    </ul>
                </div>
                <h1 class="text-[28px] font-bold leading-[42px]">{{ description }}</h1>
                <a :href="Url" target="_blank" class="mt-10 flex items-center justify-center text-[#FF9122] border-[#FF9122] py-2 px-4 rounded-[46px] border w-[171px]">立即閱讀</a>
            </div>
        </div>
    </div>
</template>