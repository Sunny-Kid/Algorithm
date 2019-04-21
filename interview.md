## 系统进程（线程）间通讯
```
1. 管道
2. 有名管道
3. 信号量
4. 消息队列
5. 信号
6. 共享内存
7. 套接字

信号量与共享内存配套使用，共享内存是最快的IPC通信方式，映射一段能被其他进程所访问的内存，共享内存由一个进程创建，但多个进程可以访问，信号量其实是一个锁机制，防止其进程正在访问共享资源时，其他进程也访问该资源
```
## webpack打包如何提高构建速度，(用dllPlugin)，为什么？了解过externals吗？

```
主要思想在于将一些不做的修改的文件提前打包，这样我们在开发代码发布时就不需要再对这部分代码进行打包，从而节省打包时间

把不常更新的 module 进行编译打包，然后每次开发和上线就只剩下开发过程中的那部分文件了。这样子就能省下来公共资源、不常更新的 module 的编译时间。

关于Webpack的Externals
防止将某些import的包打包到bundle中，而是在运行时再去外部获取这些扩展依赖
```

## react的renderProps和高阶组件的区别？
```
1. HOC如果多层嵌套，可能会出现命名冲突
2. 多个HOC使用，无法判断props或者state从哪里来

renderProps：本质是一个函数，将class组件的state作为函数参数传入到其中，并返回纯函数渲染组件，好处：所有改变都能够在render中触发，能更好地利用react的生命周期
```

## react如何提高渲染性能的？diff算法是否了解？

- https://zhuanlan.zhihu.com/p/20346379
- 关于性能优化提到pureComponent以及shouldCompoenntUpdate

## [] == false输出为true的原理讲解
```
false调用ToNumber(),转换为0,左侧是先调用ToPrimitive(),然后再调用ToNumber(),依旧是0,所以结果为true
```

## 提取字符串中出现频率最多的字符，只能有一个入参

```javascript
function getMost(str) {
  return str.split().reduce((prev,curr) => {
    if (!curr[prev]) {
      curr[prev] = 1
    } else {
      curr[prev] = curr[prev] + 1
    }
    return curr
  }, {})
}
```

## 从数组中抽取两(三)个数字之和等于另一个数字，如何用sort排序去写？
- 详见sum.js

## TCP如何保持高效传输
- https://juejin.im/post/5ba895a06fb9a05ce95c5dac

## cookie中如何做到不被document访问？
```
添加httpOnly字段
```

## cookie中如何做到只能被HTTPS协议加密过的请求发给服务端?
```
添加secure字段
```

## 子网掩码的作用
```
2 MAC地址与IP地址的关系，在以太网上通过ARP维护。ARP简单的工作原理为：2.1 当有新设备加入网络时，会主动广播自己的MAC与IP。
2.2 当接收到2.1的信息的时候，本机建立一张对照表维护这个信息。
2.3 当需要发送数据报给一个IP时，到2.2建立的表中查询对应的MAC并发送。当查询不到信息的时候，广播一个查询申请，要求指定的IP的主机执行2.1动作，并在稍后重新执行本步骤。

3 子网掩码结合本地IP地址后，用来确定目标IP是否在“逻辑上”与本计算机在同一个网络内（不管实际物理情况）。当目标地址同网（逻辑同网，即两个IP在与子网掩码进行AND计算后得出的网络名称相同），根据2.3策略直接发送数据；当目标地址不同网（逻辑不同网，即两个IP在与子网掩码进行AND计算后得出的网络名称不同），则根据2.3策略但将数据报发往默认网关IP对应的主机，由其负责路由代发（*）。
```

## package.json的 dependencies, devDependencies, peerDependencies的区别
```
peerDependencies指定了当前包要兼容的宿主版本
devDependencies只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等

^version: 兼容性版本。从左非零版本数值限定，之后版本数值可变，一般用于major version不变，minor version更新到最新的
~version: minor version不变，patch version更新到最新的

files: 发布的包中包含files中的文件，相当于白名单，package.json、README、CHANGELOG、LICENSE都会包含在publish的package中

(非官方字段)
module:
构建工具在构建项目的时候，如果发现了这个字段，会首先使用这个字段指向的文件，如果未定义，则回退到 main 字段指向的文件。例如：webpack,rollup

esnext:
使用stage4中的语法

sideEffects:
项目中的哪些文件是pure的，由此可以删除文件中未使用的部分
```

## webpack treeShaking的原理
```
Tree shaking的本质是消除无用的JavaScript代码。
因为ES6模块的出现，ES6模块依赖关系是确定的，`和运行时的状态无关`，可以进行可靠的静态分析，然后进行消除
这就是Tree shaking的基础。
```

## 手动实现EventEmitter模块，考察你对观察者模式的理解
- http://scriptoj.mangojuice.top/topic/48/36-%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-eventemitter

## 字节跳动相关的面经
- https://juejin.im/post/5c6e9203518825627d372b06
- https://www.jianshu.com/p/07b24b4baa35

## 前端面试比较好的参考资料
1. 木易杨的github
- https://github.com/Advanced-Frontend/Daily-Interview-Question
- https://github.com/yygmind/blog
2. https://juejin.im/post/5bfff5086fb9a049c84f2d24
3. https://juejin.im/post/5c8bb79e6fb9a04a006fe79a eleme聂小倩的掘金
4. https://juejin.im/post/5c64d15d6fb9a049d37f9c20 字节跳动前端的掘金
5. https://github.com/leftstick/fe-interview leftstick的前端面试工具

## 关于简历
- https://www.zhihu.com/question/25002833

# PS
1. 数组中取多个数求和为定值的题目必考！！（参考sum.js）考算法必问时间复杂度以及空间复杂度！！
2. 关于面试中劣势（非科班出身，计算机基础不好，正在补，一笔带过，然后就说最近在看计算机网络这块，引导面试官问到你知道的问题上，比如TCP如何保持高效传输！！总之把自己的靓点展示给面试官，从而加分）
3. 前端面试中高频的手写题例如：手写throttle，debounce，bind，call，apply，url中的query如何解析，手写Promise这些务必掌握