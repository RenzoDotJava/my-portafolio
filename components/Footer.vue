<script setup>
const icons = [
  'ph:github-logo',
  'mdi:linkedin',
  /* 'mdi:instagram' */
]
</script>

<template>
  <footer class="h-[140px] flex flex-col justify-center gap-7">
    <div class="flex gap-6 justify-center">
      <Icon v-for="icon in icons" class="h-8 w-8 cursor-pointer" :name="icon" color="black" />
    </div>
    <span class="text-center">Designed & Built by Renzo Bedriñana</span>
  </footer>
</template>