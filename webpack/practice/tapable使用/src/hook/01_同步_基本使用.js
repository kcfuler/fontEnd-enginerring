const { SyncHook } = require("tapable");

class MyCompiler {
  constructor() {
    this.hooks = {
      // 这里是设置可以传入的参数
      syncHook: new SyncHook(["name", "age"]),
    };

    // 用hooks監聽自定義事件
    this.hooks.syncHook.tap("event1", (name, age) => {
      console.log(name, age);
      console.log("event1事件执行啦");
    });
  }
}

const compiler = new MyCompiler();
const hook = compiler.hooks.syncHook.call("why", 18);
