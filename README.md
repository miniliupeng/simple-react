React 16: 引入Fiber架构、16.8 Hooks
React 17： 
- 事件委托机制变化：React 17 之前，事件绑定在 document 上，React 17 之后，事件绑定在根节点上
- JSX transform  不需要引入React： React.createElement => jsxDEV
React 18
- Concurrent
- Suspense
- Transition


# 3.原始版-初始化渲染：实现最原始的渲染过程
## 3.2 环境准备

## 3.2 虚拟DOM与真实DOM

- 真实DOM：
  - 定义：真实 DOM 是浏览器用来描述网页结构的对象模型
  - 特点：
    - 操作开销大：每次操作都会导致浏览器重新计算样式、布局，甚至重绘页面
    - 同步更新
- 虚拟DOM：
  - 定义：虚拟 DOM 是 JavaScript 对象，用来描述真实 DOM 结构
  - 特点：
    - 高效更新：通过diff算法比较新旧虚拟 DOM，找出差异，然后只更新差异部分
    - 批量更新：将多个更新操作合并成一个，减少浏览器重绘次数

## 3.3 JSX  
- js语法拓展
- React.createElement 函数来创建 React 元素