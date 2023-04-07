const { SyncLoopHook } = require("tapable");

let count = 0;
class MyCompiler {
  constructor() {
    this.hooks = {
      syncLoopHook: new SyncLoopHook(["name", "age"]),
    };

    this.hooks.syncLoopHook.tap("event", (name, age) => {
      // 通过return 的 bool 值来决定是否终止循环
      if (count < 5) {
        console.log(count);
        count++;
        return true;
      } else {
        return false;
      }
    });
  }
}

const compiler = new MyCompiler();
compiler.hooks.syncLoopHook.call("kkk", 19);
