# Daniel Ochoa's personal website V1

This is the version 1 of my personal website, it was made in 2021 using 11ty static site generator because at the moment I was very interested on static site generation and wanted a simple, performant, stable website without having deliver JavaScript on the client-side.

## Dependencies

In order to run this website locally you should have some tools installed.

### Required 

* NPM (9.8.0 or later)
* NodeJS (v20.5.1 or later)

### Optional (but very convenient)

* serve (can be installed with the following command)

```
$ npm i -g serve
```

## How to run the project

Once you have the "Required" dependencies running the project is as easy as installing a normal NPM project and running it.

Go to the root of the project and execute the following commands:

```
$ npm i
$ npm run dev
```

Optionally if you want to build and run the static site generated website project from a server you can build it first and run it later like so:

```
$ npm run build
$ serve -S dist
```

In the former example the "serve" library was used as the simplest possible server but I see no reason why this build couldn't run in some production-ready server such as Nginx, and more fancier tech such as containers, it should be relatively simple as this site is completely self-contained, static and has a static state in terms of its data.
