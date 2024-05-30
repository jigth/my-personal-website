<template>
  <section>
    <h1 class="my-name">Daniel Ochoa Montes</h1>
    <section>
      <h1 ref="specialization" class="specialization">Software Development</h1>
    </section>

    <section class="tech-projects">
      <h2>Projects / 2021 - current</h2>
      <ul class="tech-projects-grid">
        <li
          class="tech-projects-grid__list-item"
          v-for="(project, i) in projects"
        >
          <a class="tech-projects-grid__list-item__link" :href="project.link">
            <div>{{ project.title }}</div>
          </a>
        </li>
      </ul>
    </section>

  </section>
</template>

<script setup lang="ts">
type Project = {
  title: string;
  link: string;
  fullDescription?: string;
  shortDescription?: string;
  relatedTechnologies?: string[];
};

const projects: Project[] = [
  {
    title: "Fifa 21 API Replica",
    link: "https://github.com/jigth/fifa21-api-replica",
  },
  {
    title: "Automated Email Sender System",
    link: "https://github.com/jigth/automated-emails",
  },
  {
    title: "Anime List App",
    link: "https://github.com/jigth/AnimeListApp",
  },
  {
    title: "JinfoTeur",
    link: "https://github.com/jigth/JinfoTeur/",
  },
];

const specialization = ref(null);
const specializationDefined = ref(false);
const isMounted = ref(false);

const detectAnimatedElement = () => {
  if (specialization.value && isMounted.value) {
    specializationDefined.value = true;
  }
}

const manageAnimatedElementVisibility = () => {
  if (specialization.value === null) return;

  const windowHeight = window.innerHeight;
  const specializationNode = (specialization.value as HTMLElement);
  const nodePosition = specializationNode.getBoundingClientRect();

  if (nodePosition.top < windowHeight) {
    specializationNode.classList.add('visible');
  }
}

watch(specialization, detectAnimatedElement);

onMounted(() => {
  isMounted.value = true;
  window.addEventListener('scroll', manageAnimatedElementVisibility);
  window.addEventListener('touchmove', manageAnimatedElementVisibility);
})
</script>

<style scoped lang="scss">
$headingColor: #444;

.my-name {
  font-size: 6.8rem;
  font-family: $titlesFontFamily;
  color: $headingColor;
  padding: 30vh 0;
  text-align: center;
}

.specialization {
  font-size: 3rem;
  
  transform: translateX(-100%);
  transition: transform 1s ease;

  &.visible {
    transform: translateX(0);
    text-align: center;

  }
}

.tech-projects {
  width: 80%;
  margin: 50px auto;
  font-size: 1.5rem;

  h2 {
    margin-bottom: 20px;
  }

  &-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 30px;
    list-style: none;
    transition: transform 0.5s ease;

    &__list-item {
      &:hover {
        transform: scale(1.05);
      }
    }

    &__list-item__link {
      text-decoration: none;

      &:active {
        color: $defaultTextColor;
      }

      &:visited {
        color: $defaultTextColor;
      }

      div {
        display: flex;
        align-self: center;
        justify-content: center;
        padding: 30px;
        border: 1px solid black;
        transition: border-radius 0.55s ease;

        &:hover {
          border-radius: 0 20px 0 20px;
          background: #fbd3aa;
        }
      }
    }
  }
}
</style>
