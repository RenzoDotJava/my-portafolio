<script setup>
const projects = [
  {
    title: 'Pex App',
    subtitle: 'Personal Project',
    src: '/pex_app_project.png',
    alt: 'pex_app',
    descriptions: [
      'A mobile app for tracking your personal expenses. Register your daily expenses and see a summary by day and month. Generate a custom report and export it as an excel file.',
      'The app is currently undergoing internal testing on the Play Store.'
    ],
    techs: ['TypeScript', 'React Native', 'Expo', 'Supabase']
  },
  {
    title: 'SPH Web Course Manager',
    subtitle: 'MVC Partners',
    src: '/sph_courses_project.png',
    alt: 'sph_courses_web',
    descriptions: [
      'A web for managing courses and conferences. Register the speakers, the assistants, and the topics. Generate a certificate for the assistants and export it as a PDF file.'
    ],
    techs: ['TypeScript', 'Angular', 'Java Spring Boot']
  }
]
</script>
<template>
  <section id="projects" class="flex flex-col py-14 sm:mx-4 md:mx-8 xl:mx-16 2xl:mx-36">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Some stuff I've worked on</h1>
    <div class="flex flex-col gap-12 md:gap-16 xl:gap-20 mt-12 md:mt-16 xl:mt-20">
      <div v-for="(project, index) in projects" :key="index"
        class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10">
        <div class="flex justify-center max-h-[300px] sm:max-h-[350px] md:max-h-[400px] 2xl:max-h-[450px]">
          <img class="col-span-1 object-contain" :src="project.src" :alt="project.alt" />
        </div>
        <div class="col-span-1 flex flex-col">
          <h2 class="text-xl xl:text-2xl font-bold">{{ project.title }}</h2>
          <h3 class="text-md xl:text-lg mt-1 text-slate-500 font-medium">{{ project.subtitle }}</h3>
          <div class="mt-2">
            <p v-for="(description, index) in project.descriptions" :key="index"
              class="text-base md:text-lg mt-3 md:mt-5">{{ description }}</p>
          </div>
          <ul class="flex flex-wrap gap-2 mt-6 md:mt-8">
            <li class="rounded-3xl px-2 py-1 border text-sm md:text-base text-center self-center"
              v-for="(tech, index) in project.techs" :key="index">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>