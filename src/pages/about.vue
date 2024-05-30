<template>
    <section class="about" style="width: 80%; margin: auto">
      <h1 class="about-title" style="padding-bottom: 20px">About me</h1>

      <section class="presentation">
        <div class="presentation-container">
            <img class="presentation-container__img" src="/me.jpg" alt="Daniel Ochoa Montes image" />
            <div class="presentation-container__title">Daniel Ochoa Montes</div>
        </div>

        <section>
            <p class="presentation-description">
                I am a Software Engineer with degree in Systems Engineering. I have
                experience in backend, frontend and cloud technologies such as AWS. I
                have worked at different workplace cultures from a big enterprise with a
                thousand employees to medium and small startups. I consider myself a
                passionate developer that enjoys solving puzzle-like software challenges
                and learning effective and performant technologies and patterns to get
                the job done in a great way.
            </p>
    
            <section class="presentation-tech">
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

      </section>
    </section>
</template>

<style scoped lang="scss">
.about {
    &-title {
        text-align: center;
        font-size: 2.5rem;
    }
}

.presentation {
    display: flex;
    gap: 30px;

    &-container {

        &__img {
            width: 400px;
            min-width: 200px;
            max-width: 40vw;
        }

        &__title {
            text-align: center;
        }
    }

    &-description {
        font-size: 1.3rem;
    }

    &-tech {
        font-size: 1.3rem;  
    }
}
</style>