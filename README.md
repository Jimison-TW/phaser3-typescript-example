# phaser3-typescript-example

## Version
phaser version: 3.17.0

## Intro
I am learning the phaser3 game engine, and I want coding by Typescript. But There are only Javascript Example in Phaser Website. So I try to make this Javascript Example into Typescript Version. It also uses the "yarn" to manage all the package, and "webpack" to compile all files.
## Used
If you don't have "yarn" or "typescript", please install them at first.

[yarn](https://yarnpkg.com/zh-Hans/docs/install#windows-stable)

[typescript](https://www.typescriptlang.org/index.html#download-links)

1. First, type `yarn install` to load all modules.

2. Second, type `tsc -p tsconfig.json` in your command line(you must have tsconfig file before). There will find "build" file in project. 

3. Three, in "src/project type/project/" find "index.html" file. Put it on web sever(you can use some tool, like "live-server" or "Preview on web-server"), And you will find the result in your borwser.