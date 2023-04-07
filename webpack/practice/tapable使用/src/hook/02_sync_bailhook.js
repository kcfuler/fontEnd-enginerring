const { SyncBailHook } = require("tapable");
class MyCompiler {
  constructor() {
    this.hooks = {
      syncBailHook: new SyncBailHook(["name", "age"]),
    };

    this.hooks.syncBailHook.tap("event", (name, age) => {
      console.log("syncBailHook");
      console.log(name, age);
      return 123; // return 之后就会终止hook的执行
    });
    this.hooks.syncBailHook.tap("event", (name, age) => {
      console.log("syncBailHook");
      console.log(name, age);
    });
  }
}

const compiler = new MyCompiler();
compiler.hooks.syncBailHook.call("kkk", 19);
