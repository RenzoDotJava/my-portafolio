<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en_US' },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
});

useSeoMeta({
  title: 'Renzo Bedrinana - Frontend Developer',
  ogTitle: 'Renzo Bedrinana - Frontend Developer',
  ogLocale: 'en_US',
  description: 'Specialized in developing websites, mobile apps, and design systems.',
  ogDescription: 'Specialized in developing websites, mobile apps, and design systems.',
  ogUrl: 'https://rgbo.me/',
  ogType: 'website',
  ogImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Renzo Bedrinana - Frontend Developer',
  twitterImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D',
  twitterDescription: 'Specialized in developing websites, mobile apps, and design systems.',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
