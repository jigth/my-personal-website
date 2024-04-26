# My Personal Website (Version 2)

Hello! If you're reading this it means you may be interested on the code of my personal website. You're welcome to review it and make improvement suggestions if you have any ideas.

This is a normal Nuxt project with an approach on folder structure a bit different than other projects. After working two years in different frontend projects I have been part of projects with more or less structure, when it was consistent and predictable it was a pleasure to work with those kind of projects, when it wasn't, well... It was not clear where to find files, how to modify them or how to add features because when projects grow they can have a LOT of files and the cognitive load on managing such projects is high.

So this website is my portfolio, my blog and a living experiment on how to organize frontend projects inspired in some ideas such as Hexagonal Architecture, Screaming Architecture, Vertical Slicing and a client-side folder organization proposal that I read from Khalil Stemmler, it has also a bit of inspiration from CodelyTV. 

As an experiment it may not be perfect but it does its best to keep organized, predictable and scalable, minimizing complexity and maximizing readability, discoverability and localization of features (contrary to some MVC-like projects where one has to make big context jumps between folders far from each other).

## How to install and run this app

The installing, run, build, deploy process is exactly the same as any Nuxt project so I suggest you to refer to the [Nuxt official documentation](https://nuxt.com/docs/getting-started/introduction) and the package.json file for very specific use cases not covered in this section.

You will need the following dependencies installed in your machine before proceeding.

* NodeJS (I used the version 20.10.0)
* Yarn or NPM (I used the version 10.5.2 of NPM)

Get the node_modules executing this command from the root of this project

```
npm install
```

Run it in dev mode this way

```
npm run dev
```

Make a production build it this way. This is useful for deploying the app in a server.

```
npm run build
```
