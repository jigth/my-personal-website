<template>
    <section class="about" style="width: 80%; margin: auto">
      <h1 class="about-title" style="padding-bottom: 20px">About me</h1>

      <section class="about__presentation">
        <div class="about__presentation-container">
            <img class="about__presentation-container__img" src="/img/me.webp" alt="Daniel Ochoa Montes image" />
            <div class="about__presentation-container__title">Daniel Ochoa Montes</div>
        </div>

        <section class="about__presentation-container-2">
            <p class="about__presentation-description">
                I am a Software Engineer with degree in Systems Engineering. I have
                experience in backend, frontend and cloud technologies such as AWS. I
                have worked at different workplace cultures from a big enterprise with a
                thousand employees to medium and small startups. I consider myself a
                passionate developer that enjoys solving puzzle-like software challenges
                and learning effective and performant technologies and patterns to get
                the job done in a great way.
            </p>
    
            <section class="about__presentation-tech">
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
    max-width: 1200px;
    &-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 500;
        color: #444;
    }

    &__presentation {
        display: flex;
        
        gap: 30px;

        &-container {
            &__img {
                width: 400px;
            }

            &__title {
                text-align: center;
            }
        }

        &-description {
            font-size: 1.2rem;
            text-align: justify;
            text-justify: distribute;
            text-align-last: left;
            hyphens: auto;
        }

        &-tech {
            font-size: 1.2rem;
        }
    }
}


@media (width <= 992px) {
    .about {
        &__presentation {
            flex-wrap: wrap;
            justify-content: center;

            &-container-2 {
                min-width: 300px;
            }
        }
    }
}

@media (width <= 768px) {
    .about {
        &-title {
            text-align: center;
            font-size: 2rem;
        }

        &__presentation {
            &-container {
                &__img {
                    width: 300px;
                }
            }
        }
    }
}
</style>