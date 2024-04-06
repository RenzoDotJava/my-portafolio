<script setup>
const items = [
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Work',
    link: '#work',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
];
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
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
      <div class="md:hidden">
        <Icon class="h-8 w-8" name="material-symbols:menu" color="black" @click="toogleMenu" />
      </div>
    </div>
  </header>
  <aside :class="['fixed bg-black w-screen h-screen px-7 md:hidden', `${isOpen ? 'open' : 'close'}`]">
    <div class="flex justify-between items-center h-[80px]">
      <a href="#home" class="text-white text-xl lg:text-2xl font-bold" @click="toogleMenu">RGBO STUDIO</a>
      <Icon class="h-8 w-8 text-white" name="material-symbols:close" @click="toogleMenu" />
    </div>
    <div class="px-10 mt-12">
      <ul class="flex flex-col gap-8">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.link" class="text-white text-2xl font-extralight" @click="toogleMenu">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>