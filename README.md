```npm init -y ``` default install npm package

or if you git cloned and installing then ```npm install``` then that is it! Don't mind below instructions:

``` npm i -D jest``` install jest as a dependency

---basically  both are the same, below is shorter version--

```npm i --save-dev jest``` install jest as deve dependency

``` npm test``` to run jest test

```jest first.test.js --watch``` if you installed jest globally

```json
package.json:

"scripts": {
    "test": "jest --watch *.js" //will run in watch mode and have the test running constantly
  },
  // or run it this way
"scripts": {
    "start": "react-scripts start",
    "test": "jest"
  },
```

## Enzyme; developed by Airbnb and it's purpose to test components to match expected UI;

```bash
# installing as development dependency only during development we need it
npm i --save-dev enzyme enzyme-adapter-react-16 
```
```json
  "devDependencies": {
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.2",
  }
```
With enzyme it needs to have a file `setupTests.js` file.
Enzyme mainly gives 3 things to use:
```js
import { shallow, mount, render } from "enzyme";
shallow()//used 90% of the time => shallow rendering=> contrains you to test 1 component/unit at a time

mount()//does full DOM rendering, use cases like interacting with APIs where using like componentWillMount(), usually used with jsdom

render()// used for rendering static HTML uses Cherio library under the hood
```