<script setup lang="ts">
const { locale } = useI18n();

const jobs = [
  {
    id: 1,
    position: 'Frontend Developer',
    company: 'Multiplica',
    startDate: 'July 2023',
    endDate: 'Present',
    milestones: [
      {
        en: 'Built a high-quality design system for Cementos Pacasmayo that covers different digital products (PacasPro, Ayu, Isicom, Cantera and Digou).',
        es: 'Construí un sistema de diseño de alta calidad para Cementos Pacasmayo que cubre diferentes productos digitales (PacasPro, Ayu, Isicom, Cantera y Digou).'
      },
      {
        en: 'Developed 25 responsive web components with Angular, Stencil.js, SCSS and design tokens, while working hand-in-hand with designers to guarantee the correct implementation of each component.',
        es: 'Desarrollé 25 componentes web responsivos con Angular, Stencil.js, SCSS y tokens de diseño, mientras trabajaba de la mano con el equipo de diseño para garantizarla correcta implementación de cada componente.'
      },
      {
        en: 'Set up 2 pipelines to automate the upload of 3 different packages (design-tokens, stencil-library, angular-components) using Azure Devops.',
        es: 'Configuré 2 pipelines para automatizar la carga de 3 paquetes diferentes (design-tokens, stencil-library, angular-components) utilizando Azure Devops.'
      },
      {
        en: 'Built a custom Storybook to showcase the components and their different variants, which helped the stakeholders to have a better understanding of the components and their usage.',
        es: 'Construí un Storybook personalizado para mostrar los componentes y sus diferentes variantes, lo que ayudó a los interesados a tener una mejor comprensión de los componentes y su uso.'
      }
    ],
    link: 'https://multiplica.com/'
  },
  {
    id: 2,
    position: 'Sofware Developer',
    company: 'Wargos Tec',
    startDate: 'Jan 2022',
    endDate: 'Jun 2023',
    milestones: [
      {
        en: 'Worked on a migration from an Angular system to a React Native app called Runner App built with Expo and published on the Play Store.',
        es: 'Trabajé en una migración de un sistema Angular a una aplicación React Native llamada Runner App construida con Expo y publicada en la Play Store.'
      },
      {
        en: 'Built a push notification microservice using Kotlin and Firebase Cloud Messaging.',
        es: 'Construí un microservicio de notificaciones push usando Kotlin y Firebase Cloud Messaging.'
      },
      {
        en: 'Reworked of auth0-inspired authentication microservice in order to centralize the login for all the projects and let the customers to enter the system with Google and Apple accounts.',
        es: 'Optimicé el microservicio de autentificación inspirado en auth0 para centralizar el inicio de sesión de todos los proyectos y permitir que los clientes ingresen al sistema con cuentas de Google y Apple.'
      },
      {
        en: 'Developed an enterprise system with Next.js to enable the approval of Wargos by the Ministry of Peru, which allowed it to increase its client portfolio.',
        es: 'Desarrollé un sistema empresarial con Next.js para habilitar la homologación de Wargos por parte del Ministerio del Perú, lo cual significó un incremento en la cartera de clientes.'
      },
      {
        en: 'Maintained 5 different enterprise projects, which were developed with React and Angular.',
        es: 'Realicé mantenimiento a 5 proyectos empresariales diferentes, los cuales estaban desarrollados con React y Angular.'
      }
    ],
    link: 'https://wgt.pe/'
  },
  {
    id: 3,
    position: 'Web Developer',
    company: 'MVC Partners',
    startDate: 'July 2021',
    endDate: 'Dec 2021',
    milestones: [
      {
        en: 'Maintained a billing enterprise system for G4S Peru, which was developed with JQuery, JavaScript and Django.',
        es: 'Realicé mantenimiento a un sistema empresarial de facturación para G4S Perú, el cual fue desarrollado con JQuery, JavaScript y Django.'
      },
      {
        en: 'Built a course manager web for the Peruvian Society of Hematology, which was developed with Angular and Java Spring Boot.',
        es: 'Construí una web de administración de cursos para la Sociedad Peruana de Hematología, la cual fue desarrollada con Angular y Java Spring Boot.'
      },
      {
        en: 'Implemented endpoints and stored prodecures to improve server efficiency and reduce the response time of the different systems.',
        es: 'Implementé endpoints y procedimientos almacenados para mejorar la eficiencia del servidor y reducir el tiempo de respuesta de los diferentes sistemas.'
      }
    ],
    link: 'https://mvcpartners.pe/'
  }
]

const active = ref(0)

function setActive(index: number) {
  if (active.value === index) active.value = -1
  else active.value = index
}
</script>
<template>
  <section id="work" class="flex flex-col py-10 xl:py-28 xl:mx-32">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{{ $t('work.title') }}</h1>
    <div class="flex flex-col mt-7 md:mt-12 xl:mt-16 sm:px-14 md:px-20 lg:px-36 xl:px-24 2xl:px-44">
      <div v-for="(job, index) in jobs" :key="index" class="flex flex-col border-b-2 cursor-pointer"
        @click="() => setActive(index)">
        <div class="flex justify-between py-5">
          <div class="flex flex-col gap-1">
            <div class="flex gap-1 sm:gap-2">
              <h2 class="text-lg md:text-xl font-medium">{{ job.position }}</h2>
              <span>·</span>
              <a class="text-lg md:text-xl font-medium" @click="(e) => e.stopPropagation()" :href="job.link"
                target="_blank" rel="noopener noreferrer">
                <span class="underline hover:text-red-700">{{ job.company }}</span>
              </a>
            </div>
            <span class="text-sm md:text-base text-slate-500 font-medium">{{ $t(`work.jobs.job${job.id}.startDate`) }} -
              {{ $t(`work.jobs.job${job.id}.endDate`) }}
            </span>
          </div>
          <Icon name="mdi:chevron-down" :class="['h-8 w-8 transition-all', active === index ? 'active' : '']" />
        </div>
        <div :class="['overflow-hidden transition-all', active === index ? 'max-h-[1000px] pb-5' : 'max-h-0']">
          <ul class="flex flex-col gap-3">
            <li class="ms-5 list-disc text-sm sm:text-base lg:text-lg" v-for="(milestone, index) in job.milestones"
              :key="index">
              {{ locale === 'en' ? milestone.en : milestone.es }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>