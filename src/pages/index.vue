<template>
  <section class="wrapper-section">
    <p class="my-name">Daniel Ochoa Montes</p>
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
          <a
            class="tech-projects-grid__list-item__link"
            :href="project.link"
            target="_blank"
          >
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
    title: "Automated Emails",
    link: "https://github.com/jigth/automated-emails",
  },
  {
    title: "Anime List App",
    link: "https://github.com/jigth/AnimeListApp",
  },
  {
    title: "Feat It Healthy",
    link: "https://github.com/jigth/Feat-It-Healthy",
  },
  {
    title: "JSON Generator",
    link: "https://github.com/jigth/companies-json-generator",
  },
  {
    title: "TDD 1",
    link: "https://github.com/jigth/TDD-1",
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
};

const manageAnimatedElementVisibility = () => {
  if (specialization.value === null) return;

  const windowHeight = window.innerHeight;
  const specializationNode = specialization.value as HTMLElement;
  const nodePosition = specializationNode.getBoundingClientRect();

  if (nodePosition.top < windowHeight) {
    specializationNode.classList.add("visible");
  }
};

watch(specialization, detectAnimatedElement);

onMounted(() => {
  isMounted.value = true;
  window.addEventListener("scroll", manageAnimatedElementVisibility);
  window.addEventListener("touchmove", manageAnimatedElementVisibility);
});
</script>

<style scoped lang="scss">
$headingColor: #444;
$gapWidth: 20px;

.wrapper-section {
  margin-top: 100px;
  margin-bottom: 100px;
}

.my-name {
  font-size: 6.8rem;
  font-weight: 500;
  font-family: $highlightedFont;
  color: $headingColor;
  padding: 30vh 0;
  text-align: center;
}

.specialization {
  font-size: 3rem;
  font-weight: 500;
  font-family: $highlightedTitlesFont;

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
    font-weight: 500;
    font-family: $defaultFont;
  }

  
  &-grid {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: $gapWidth 30px;
    list-style: none;
    transition: transform 0.5s ease;

    &__list-item {
      width: calc(50% - $gapWidth);

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

@media (width <= 992px) {

  .my-name {
    font-size: 4.6rem;
  }

  .tech-projects {
    &-grid {
      &__list-item__link div {
        font-size: 1.1rem !important;
      }
    }
  }
}

@media (width <= 768px) {
  .wrapper-section {
    margin-top: 50px;
    margin-bottom: 70px;
  }

  .my-name {
    font-family: $highlightedFont !important;
    color: $headingColor;
    padding: 20vh 0;
  }

  .specialization {
    font-size: 1.8rem;
    font-weight: 300;
  }

  .tech-projects {
    &-grid {
      &__list-item {
        width: 80%;
      }
    }

    h2 {
      font-size: 1.2rem;
    }
  }
}

@media (width <= 300px) {
  .my-name {
    font-size: 3.2rem;
    text-align: center;
  }
}
</style>
