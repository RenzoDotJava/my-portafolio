<script setup lang="ts">
const jobs = [
  {
    position: 'Frontend Developer',
    company: 'Multiplica',
    startDate: 'July 2023',
    endDate: 'Present',
    milestones: [
      'Build a high-quality design system for Cementos Pacasmayo that covers different digital products (PacasPro, Ayu, Isicom and Cantera)',
      'Develop 25 responsive web components with Angular, Stencil.js, SCSS and design tokens, while working hand-in-hand with designers to guarantee the correct implementation of each component.',
      'Set up 2 pipelines to automate the upload of 3 different packages using Azure Devops',
      'Built a custom Storybook to showcase the components and their different variants, which helped the stakeholders to have a better understanding of the components and their usage'
    ],
    link: 'https://multiplica.com/'
  },
  {
    position: 'Sofware Developer',
    company: 'Wargos Tec',
    startDate: 'Jan 2022',
    endDate: 'Jun 2023',
    milestones: [
      'Worked on a migration from an Angular system to a React Native app called Runner App built with Expo and published on the Play Store and App Store',
      'Built a push notification microservice using Firebase Cloud Messaging',
      'Reworked of auth0-inspired authentication service in order to centralize the login for all the projects and let the customers to enter the system with Google and Apple accounts',
      'Maintained 5 different Wargos projects, which were developed with React, Next.js and Angular',
    ],
    link: 'https://wgt.pe/'
  },
  {
    position: 'Web Developer',
    company: 'MVC Partners',
    startDate: 'July 2021',
    endDate: 'Dec 2021',
    milestones: [
      'Maintained a billing system for G4S Peru, which was developed with JQuery, JavaScript and Django',
      'Built a course manager website for the Peruvian Society of Hematology, which was developed with Angular and Java Spring Boot',
      'Implemented endpoints and stored prodecures to improve server efficiency and reduce the response time of the different systems',
    ],
    link: 'https://mvcpartners.pe/'
  }
]

const active = ref(0)

function setActive(index: number) {
  if (active.value === index) {
    active.value = -1
  } else active.value = index
}
</script>
<template>
  <section id="work" class="flex flex-col py-14 xl:py-24 xl:mx-32">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Companies I've worked at</h1>
    <div class="flex flex-col mt-8 md:mt-12 xl:mt-16 sm:px-14 md:px-20 lg:px-36 xl:px-24 2xl:px-44">
      <div v-for="(job, index) in jobs" :key="index" class="flex flex-col border-b-2 ">
        <div class="flex justify-between cursor-pointer py-5" @click="() => setActive(index)">
          <div class="flex flex-col gap-1">
            <div class="flex gap-1 sm:gap-2">
              <h2 class="text-md sm:text-lg md:text-xl font-medium">{{ job.position }}</h2>
              <span>·</span>
              <a class="text-md sm:text-lg md:text-xl font-medium" @click="(e) => e.stopPropagation()" :href="job.link"
                target="_blank" rel="noopener noreferrer">
                <span class="hover:underline">{{ job.company }}</span>
                <Icon name="mdi:launch" class="h-3 w-3 ms-1" />
              </a>
            </div>
            <span class="text-sm md:text-base">{{ job.startDate }} - {{ job.endDate }} </span>
          </div>
          <Icon name="mdi:chevron-down" :class="['h-8 w-8 transition-all', active === index ? 'active' : '']" />
        </div>
        <div :class="['overflow-hidden transition-all', active === index ? 'max-h-[1000px] pb-5' : 'max-h-0']">
          <ul class="flex flex-col gap-3">
            <li class="ms-5 list-disc text-sm sm:text-base lg:text-lg" v-for="(milestone, index) in job.milestones"
              :key="index">
              {{ milestone }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>