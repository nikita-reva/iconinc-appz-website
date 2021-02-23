# company-website
Website for a web agency

We are building our first website!

***

### Tech Stack
#### Frontend
* React.js - A JavaScript library for building user interfaces
[Docs](https://reactjs.org/docs/getting-started.html)
* Styled Components - CSS in JS library
[Docs](https://styled-components.com/docs)
* Framer Motion - Animation library for React
[Docs](https://www.framer.com/motion/)
* React Spring - Animation library for React
[Docs](https://www.react-spring.io/)
* React Three Fiber - React renderer for threejs on the web 
[Docs](https://github.com/pmndrs/react-three-fiber)

#### Backend
* Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine
[Docs](https://nodejs.org/en/docs/)
* Express.js - Fast, unopinionated, minimalist web framework for Node.js
[Docs](https://expressjs.com/)

***
TypeScript will not be used in this project for the time being, but it is planned
to migrate to TypeScript later on.
* TypeScript - A superset of JavaScript that adds type definitions to it
[Docs](https://www.typescriptlang.org/docs/)

***

### Developer Instructions

### In the root folder:
* Start backend development server:
```npm run server```
* Start frontend development server:
```npm run client```
* Start frontend and backend development servers concurrently:
```npm run dev```

### In the frontend folder:
* Start frontend development server:
```npm start```

***

### Git Workflow
This guide contains the git commands we will use frequently.
A more comprehensive guide can be found [here](https://www.atlassian.com/git).

##### First you need to initialize Git in a folder designated for it.
* Create a new Git repository 
```git init```
* Add a new remote repository 
```git remote add origin repository_url```
* Clone an existing remote repository 
```git clone repository_url```
*(The url can be obtained from the repository on GitHub)*
##### Now you have a copy of the remote repository and you can start making your changes.
##### To avoid conflicts in the code each team member should only work on files he is assigned to work on.
##### Each team member should make their changes to a branch dedicated to their current responsibility.
##### The branch is later merged with the master branch.
##### The master branch must always be doployable and must be protected from incorrect changes.
* Create a new branch (choose a meaningful branch name) it and switch to it:
```git checkout -b branch_name```
* Create a new branch (choose a meaningful name) it and switch to it:
```git checkout -b branch_name```
* Switch to another branch:
```git checkout branch_name```
* View all existing branches:
```git branch```
* Delete a branch:
```git branch -d branch_name```
* Stage all changes:
```git add .```
* Commit changes with a meaningful message (-m stands for message, e.g. "Initial commit"):
```git commit -m "message_string"```

##### When your task is complete, push your changes to the remote repository
* Push your branch to the remote repository (first push):
```git push -u origin branch_name```
* Push your branch to the remote repository (subsequent pushes):
```git push```

##### To obtain the latest version of the project, pull from the master branch
* First switch to the master (git checkout master) branch and then pull:
```git pull```

##### Merging on the remote repository will be performed by the merge supervisor.
##### However, you can use the merge command to merge branches on your local system.
* Merge changes from another branch to the current branch:
```git merge branche_name```

##### You can check the status of your local repository by using the git status command.
* View status of your local repository
```git status```
