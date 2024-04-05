<script setup>
const icons = [
  'ph:github-logo',
  'mdi:linkedin'
]
</script>

<template>
  <footer class="h-[140px] flex flex-col mt-5 gap-6">
    <div class="flex gap-6 justify-center">
      <Icon v-for="icon in icons" class="h-8 w-8 md:h-9 md:w-9 cursor-pointer hover:text-red-700" :name="icon" />
    </div>
    <span class="text-base md:text-lg text-center">Designed & Built by Renzo Bedriñana</span>
  </footer>
</template>