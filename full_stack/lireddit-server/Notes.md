1. ts-node is a combination of **compiling the ts to js** and then **running js on node server** i.e. **tsc index.ts + node index.js = ts-node index.ts**
2. **tsc -w** script is watching for **changes in typescript files** and **converting them to js files on any change**
3. **nodemon dist/index.js** is watching for **changes in index.js** file and **re-running server on change**