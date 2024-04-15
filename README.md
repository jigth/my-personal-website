# Daniel Ochoa's website

This is a website that I use as a portfolio and as a platform to publish technical content about great tech that I use oftenly with a touch of my personal style.

## V1

This version is available at the following branch: [website/v1](https://github.com/jigth/my-personal-website/tree/website/v1)

The version 1 was made in 2021 using [11ty static site generator](https://www.11ty.dev/) because at the moment I was very interested on static site generation and wanted a simple, performant, stable website without having deliver JavaScript on the client-side. [Eleventy.JS](https://www.11ty.dev/) uses JavaScript and the NodeJS runtime to be built providing a lot of flexibility in terms of modules and libraries but it doesn't necessarily produces a JavaScript bundle, providing generally more performance and compatibility for people that do not use JavaScript in the browser for preference.

This website version was not based on any specific design guides and was made as simple as possible with the main goal of showcasing some of my best personal software projects at the time, so a single page website was built in about twelve hours.

The deployment operations were automated using [Netlify](https://www.netlify.com/)'s CI/CD capabilities, so whenever I made a change to the target deployment branch it built the static website and deployed the new version of it to the internet.

The finished V1 version looks like this:

![image](https://github.com/jigth/my-personal-website/assets/49813759/ecb7ee47-97b3-47ea-ac55-8b5d82d3db12)

Take in mind that I zoomed out as much as I could using Firefox Devtools because it was made for low resolution screen monitor and mobile.

At the moment I had only a very simple monitor with low resolution (HD resolution) and designed the website to be responsive on sizes lower than or equal to that resolution but now that I see the website after some years (and using better hardware tools) it still have a lot to improve but IMO it is way better to create a V2 with more possibilities of growth than to refactor V1 version as the V2 offers more ROI in terms of time investments.

## V2

This version is available at the following branch: [website/v2](https://github.com/jigth/my-personal-website/tree/website/v2)

After three years of working as Fullstack developer at companies of different sizes from very small (6 employees) to relatively big (1000 employees) using technologies such as Golang, Python and TypeScript I have learnt more about frontend (VueJS 3 is my main frontend framework), backend and good code organization principles, so I'm creating a version 2 of my personal website but this time using Vue3, TypeScript, [Nuxt](https://nuxt.com/) and some backend technologies as needed to build a more professional website with multiple pages and better UI/UX.

The main idea is to make it more usable for different devices and people and useful in general. As NuxtJS is already a mature framework for creating pages with VueJS 3 I feel it is a better idea to use this technology in comparison to 11ty because it offers more flexibility, scalability, composability and good practices than the previous option with less technical effort per developed feature. Also it showcases my current skills better than the V1 version. I also have chosen Nuxt over Next or any React or Angular based technology because of my professional experience and my strong preference for VueJS over React (IMO it has way better debugging tools and generates a cleaner DOM tree).
