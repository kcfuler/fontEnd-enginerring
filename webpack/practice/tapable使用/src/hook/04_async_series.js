const { AsyncSeriesHook } = require("tapable");

class MyCompiler {
  constructor() {
    this.hooks = {
      asyncSeriesHook: new AsyncSeriesHook(["name", "age"]),
    };

    this.hooks.asyncSeriesHook.tapAsync("", (name, age, callback) => {
      console.log(name, age);
      callback();
    });
  }
}
