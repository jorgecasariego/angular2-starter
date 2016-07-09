# angular2-starter

This is a tutorial base on [Angular 2 with Webpack Project Setup](https://www.youtube.com/watch?v=HTFZPF6iixA&list=PLgGUMhSgtxJyIQ4vI3BzlCzZLHL79Ew6p)

Here I set up a project build workflow for an Angular 2 web application from scratch using npm, TypeScript, and Webpack.

[**First Video Tutorial**](https://www.youtube.com/watch?v=HTFZPF6iixA)

The first part start with an empty folder, add an index.html file and the code for a basic Angular component. 
Then we write a package.json file with all the Angular modules and dependencies, briefly explain what each dependency is for, 
and finally use npm to download them all.

[**Second Video Tutorial**](https://www.youtube.com/watch?v=4i1nLrqMR14)

we add the TypeScript Compiler (tsc) to our project and use it to compiler our TypeScript code to ES5 JavaScript. 
We also see how to install type definitions using Typings to fix compilation errors like "Cannot find name: 'Promise'".


[**Third Video Tutorial**](https://www.youtube.com/watch?v=IsBblYt2LUw)

We see how to configure npm scripts to automate our build step, and install type definitions in the postinstall step.

[**Fourth Video Tutorial**](https://www.youtube.com/watch?v=oZBuiqovOZ0)

we add Webpack to our project and see how to configure it to 1) compile our TypeScript code; 2) generate a single bundle with all the JavaScript code required to run our application.

[**Fifth Video Tutorial**](https://www.youtube.com/watch?v=lPhZW8ZyUA4)
we use the html-webpack-plugin to generate our index.html from a template so our "dist" folder contains everything needed to run our application . Then we configure a production build to generate a smaller, more optimised code bundle. Finally we see how to use the webpack-dev-server to speed up our development cycle.





