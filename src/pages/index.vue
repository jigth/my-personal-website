<template>
  <section>
    <h1 class="my-name">Daniel Ochoa Montes</h1>
    <section>
      <h1 class="specialization">Software Development</h1>
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

    <section style="width: 80%; margin: auto">
      <h1 style="padding-bottom: 20px">About me</h1>
      <p>
        I am a Software Engineer with degree in Systems Engineering. I have
        experience in backend, frontend and cloud technologies such as AWS. I
        have worked at different workplace cultures from a big enterprise with a
        thousand employees to medium and small startups. I consider myself a
        passionate developer that enjoys solving puzzle-like software challenges
        and learning effective and performant technologies and patterns to get
        the job done in a great way.
      </p>

      <p style="margin-top: 1rem">
        The following are the technologies that I use the most depending on the
        need of the project I am working at
      </p>

      <ul style="padding-left: 20px; padding-top: 10px">
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>VueJS 3</li>
        <li>Python</li>
        <li>Docker</li>
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
</script>

<style scoped lang="scss">
$headingColor: #444;

.my-name {
  font-size: 6.8rem;
  font-family: $titlesFontFamily;
  color: $headingColor;
  padding: 30vh 0;
  text-align: center;
  padding-top: 20rem auto;
}

.specialization {
  text-align: center;
  font-size: 3rem;
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
    gap: 10px;
    list-style: none;

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
        padding: 50px;
        border: 1px solid black;
      }
    }
  }
}
</style>
