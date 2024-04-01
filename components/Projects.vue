<script setup>
const projects = [
  {
    name: 'Pex App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus maximus erat nec pretium.',
    techs: ['Tech 1', 'Tech 2', 'Tech 3']
  },
  {
    name: 'My Portafolio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus maximus erat nec pretium.',
    techs: ['Tech 1', 'Tech 2', 'Tech 3']
  }
]
</script>
<template>
  <section id="projects" class="flex flex-col py-14 xl:py-24 xl:mx-32">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Some stuff I've created</h1>
    <div class="flex flex-col gap-8 mt-8 md:mt-12 xl:mt-16">
      <div v-for="(project, index) in projects" :key="index" class="flex flex-col gap-3">
        <h2 class="text-lg font-medium">{{ project.name }}</h2>
        <p class="text-justify">{{ project.description }}</p>
        <ul class="flex gap-2">
          <li class="rounded-full px-2 py-1 border text-sm" v-for="(tech, index) in project.techs" :key="index">{{ tech
            }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>