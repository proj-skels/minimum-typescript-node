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
    git clone https://github.com/proj-skels/minimum-typescript-node.git <your_project_name>
    
    // via SSH
    git clone git@github.com:proj-skels/minimum-typescript-node.git <your_project_name>
    ```

2.  From your new project directory run ...
    
    ```
    node tasks/init.js
    ```
    ... which does the following ... 
    ```
    // Install shx dependency for the init process.
    npm i

    // Blow away the source repo information
    shx rm -rf ./.git // Executed via 'npm run delete.git' in the initial package.json

    // Initialize a new node starter project
    npm init 

    // Install some provided dependencies and scripts.
    node tasks/setupProjectFiles.js 

    // Install a basic igonre file.
    cp tasks/assets/.gitignore ./

    // Install a basic tsconfig for compiling the Typescript source files.
    cp tasks/assets/tsconfig.json ./

    // Install the provided starter project dependencies.
    npm i

    // Initialize a new git repo and commit your new project.
    git init
    git add .
    git commit -m "Initial commit."
    ```