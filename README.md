# minimum-typescript-node

This project is a minimum set of dependencies for writing NodeJS app using Typescript.

### Getting Started

**TL;DR** - Install NodeJS, Typescript, Git, then run `node tasks/init.js` from the project directory.

##### Some Assumptions

- It's assumed that you already have **NodeJS** installed on the target system.
- It's assumed that you already have **Typescript** installed on the target system.
- It's assumed that you will be using **Git** for source control.


##### Setting Things Up in 2 Steps

1.  Clone the repo.
    ```
    // via HTTPS
    git clone https://github.com/proj-skels/minimum-typescript-node.git
    
    // via SSH
    git clone git@github.com:proj-skels/minimum-typescript-node.git
    ```

2.  From your new repo directory run ...
    
    ```
    node tasks/init.js
    ```
    ... which does the following ... 
    ```
    // Initialize a new node project
    npm init 

    // Install some provided dependencies and scripts
    node tasks/initProject.js 

    // Install a basic igonre file
    cp tasks/assets/.gitignore ./

    // Install a basci tsconfig for compiling the Typescript source files.
    cp tasks/assets/tsconfig.json ./

    // Install the provided dependencies
    npm i

    // Initialize a new git repo and commit your new project.
    git init
    git add .
    git commit -m "Initial commit."
    ```