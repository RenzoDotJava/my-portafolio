<script setup>
import { icons, items } from '~/utils/constants';

const lastY = ref(0);
const header = ref(null);
const isOpen = ref(false);

const toogleMenu = () => {
  isOpen.value = !isOpen.value;
  const body = document.querySelector('body');
  if (isOpen.value) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
};

const handleScroll = () => {
  if (window.scrollY > lastY.value && window.scrollY > 50) {
    header.value.classList.add('translate');
  } else {
    header.value.classList.remove('translate');
  }
  lastY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <header ref="header" class="flex justify-between items-center h-[80px] px-7 md:px-9 lg:px-12 w-full fixed bg-white">
    <a href="#home" class="text-xl lg:text-2xl font-bold">RGBO STUDIO</a>
    <div>
      <ul class="hidden md:flex gap-7">
        <li v-for="(item, index) in items" :key="index">
          <a class="text-xl header-link" :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
      <div class="md:hidden">
        <Icon class="h-8 w-8" name="material-symbols:menu" color="black" @click="toogleMenu" />
      </div>
    </div>
  </header>
  <aside :class="['fixed bg-black w-screen h-screen px-7 md:hidden', `${isOpen ? 'open' : 'close'}`]">
    <div class="flex justify-between items-center h-[80px]">
      <a href="#home" class="text-white text-xl font-bold" @click="toogleMenu">RGBO STUDIO</a>
      <Icon class="h-8 w-8 text-white" name="material-symbols:close" @click="toogleMenu" />
    </div>
    <div class="px-14 h-[calc(100vh-80px)] flex flex-col justify-around">
      <ul class="flex flex-col gap-8">
        <li v-for="(item, index) in items" :key="index" class="w-fit">
          <a :href="item.link" class="text-2xl font-light mobile-link" @click="toogleMenu">
            {{ item.title }}
          </a>
        </li>
      </ul>
      <button type="button" class="border focus:outline-none w-fit text-white px-10 py-2 font-light text-lg">My
        Resume</button>
      <div class="flex flex-col gap-7">
        <a href="mailto:contact@rgbo.me" class="text-white text-xl font-light mobile-link w-fit">contact@rgbo.me</a>
        <div class="flex gap-10">
          <a v-for="icon in icons" :href="icon.link" target="_blank" rel="noopener noreferrer">
            <Icon :name="icon.name" class="h-8 w-8 text-white" />
          </a>
        </div>
      </div>
    </div>

  </aside>
</template>