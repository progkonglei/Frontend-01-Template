# 每周总结可以写在这里

结构化程序设计 

JavaScript 做了什么事情 

事件循环是什么？

等待宏观任务执行的过程，即宏观任务的队列相当于事件循环

宏任务 微任务 

在宿主API，产生的任务，如setTimeout

Js引擎是什么？ 

在JS引擎中，产生的任务，如Promise



```js

async function afoo() {
    console.log("-2")


    await new Promise(resolve => resolve());
    console.log("-1")
}


new Promise(resolve => (console.log("0"), resolve()))
    .then(() => (
        console.log("1"),
        new Promise(resolve => resolve())
            .then(() => console.log("1.5"))));


setTimeout(function () {
    console.log("2");

    new Promise(resolve => resolve()).then(console.log("3"))


}, 0)
console.log("4");
console.log("5");
afoo();

```

### 解析：
- 第一个宏任务：
  - 3
    - 入队 4
  - 8
  - 9
  - 1
    - 入队 2
  - 4
    - 入队 5
  - 2
  - 5
- 第二个宏任务：
  - 6
    - 入队 7
  - 7
## 与ECMAScript相关的章节
- RunJobs（P.104）
