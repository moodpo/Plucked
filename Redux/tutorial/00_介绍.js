// Tutorial 0 - introduction.js
// 第一节 介绍

// Why this tutorial?
// While trying to learn Redux, I realized that I had accumulated incorrect knowledge about flux through
// articles I read and personal experience. I don't mean that articles about flux are not well written
// but I just didn't grasp concepts correctly. In the end, I was just applying documentation of different
// flux frameworks (Reflux, Flummox, FB Flux) and trying to make them match with the theoretical concept I read
// about (actions / actions creators, store, dispatcher, etc).
// Only when I started using Redux did I realize that flux is more simple than I thought. This is all
// thanks to Redux being very well designed and having removed a lot of "anti-boilerplate features" introduced
// by other frameworks I tried before. I now feel that Redux is a much better way to learn about flux
// than many other frameworks. That's why I want now to share with everyone, using my own words,
// flux concepts that I am starting to grasp, focusing on the use of Redux.

// 为什么有此教程？
// 当学习 Redux 时，我意识到通过阅读文章和靠个人经验已经积累了很多错误的 flux 的知识。我的意思不是说那些关于 flux 的
// 文章写的不好，而是说我自己不能正确把握的相关概念。最后，我只能应用不同的 flux 框架文档并试图将其与我读到的有关理论概念
//（actions / actions creators, store, dispatcher, 等）匹配对应。
// 直到我开始使用 Redux，我才意识到 flux 比我想的简单的多。感谢 Redux 的良好设计，它移除了之前我试图理解的其他框架的一
// 些“反样板特性”介绍。现在我觉得相比其他框架来说学习 Redux 是更好的学习 flux 的方式。这就是现在我为何想分享给每个人，使用
// 我自己的话说：把握 flux 概念重点在于 Redux 的使用。

// You may have seen this diagram representing the famous unidirectional data flow of a flux application:
// 你可能已经看过下面这个代表了 flux 应用著名的单向数据流的图：

/*
                 _________               ____________               ___________
                |         |             |            |             |           |
                | Action  |------------▶| Dispatcher |------------▶| callbacks |
                |_________|             |____________|             |___________|
                     ▲                                                   |
                     |                                                   |
                     |                                                   |
 _________       ____|_____                                          ____▼____
|         |◀----|  Action  |                                        |         |
| Web API |     | Creators |                                        |  Store  |
|_________|----▶|__________|                                        |_________|
                     ▲                                                   |
                     |                                                   |
                 ____|________           ____________                ____▼____
                |   User       |         |   React   |              | Change  |
                | interactions |◀--------|   Views   |◀-------------| events  |
                |______________|         |___________|              |_________|

*/

// In this tutorial we'll gradually introduce you to concepts of the diagram above. But instead of trying
// to explain this complete diagram and the overall flow it describes, we'll take each piece separately and try to
// understand why it exists and what role it plays. In the end you'll see that this diagram makes perfect sense
// once we understand each of its parts.

// 在本节中，我将逐渐向你介绍上面图例中的概念。然而，不是试图解释整个图或者描述整个流程，相反的，
// 我将分别选取其中的部分，去理解它为何存在以及它扮演的角色。最后，一旦理解了它的每一部份，你将看到这个图描述的完美场景。

// But before we start, let's talk a little bit about why flux exists and why we need it...
// Let's pretend we're building a web application. What are all web applications made of?
// 1) Templates / html = View
// 2) Data that will populate our views = Models
// 3) Logic to retrieve data, glue all views together and to react accordingly to user events,
//    data modifications, etc. = Controller

// 在开始之前，让我们先看一下 flux 为何会存在以及为什么我们需要它...
// 假如我们要构建一个 web 应用，整个 web 应用有什么构成呢？
// 1) 模版 / html = 视图(View)
// 2) 数据，将流向我们的视图 = 模型(Models)
// 3) 操纵数据的业务逻辑，连接所有视图，响应用户事件，数据变更，等灯 = 控制器(Controller)

// This is the very classic MVC that we all know about. But it actually looks like concepts of flux,
// just expressed in a slightly different way:
// - Models look like stores
// - user events, data modifications and their handlers look like
//   "action creators" -> action -> dispatcher -> callback
// - Views look like React views (or anything else as far as flux is concerned)

// 这是非常典型的 MVC。但是它实际上与 flux 概念类似，只是描述方式有一点不同：
//

// So is flux just a matter of new vocabulary? Not exactly. But vocabulary DOES matter, because by introducing
// these new terms we are now able to express more precisely things that were regrouped under
// various terminologies... For example, isn't a data fetch an action? Just like a click is also an action?
// And a change in an input is an action too... Then we're all already used to issuing actions from our
// applications, we were just calling them differently. And instead of having handlers for those
// actions directly modify Models or Views, flux ensures all actions go first through something called
// a dispatcher, then through our stores, and finally all watchers of stores are notified.

// 难道 flux 仅仅是一个新的词汇吗？不全是。但是新的词汇是有用的，因为通过介绍使用新的术语，我们能够更准确的表达一些事情，重组一系列
// 术语... 例如，难道一次获取数据不是一个 action？一次点击也是一个 action？一次输入框的修改也是一个 action ... 然后我们
// 都习惯了从应用的各种 actions 出发去思考，我们只是不同的调用他们。相反的，这些 actions 不是直接去操作 Models 或者 Views，
// flux 确保所有的 actions 通过一个 dispatcher 调用，然后传给 stores，最后所有的 stores 的观察者将被通知到。

// To get more clarity how MVC and flux differ, we'll
// take a classic use-case in an MVC application:
// In a classic MVC application you could easily end up with:
// 1) User clicks on button "A"
// 2) A click handler on button "A" triggers a change on Model "A"
// 3) A change handler on Model "A" triggers a change on Model "B"
// 4) A change handler on Model "B" triggers a change on View "B" that re-renders itself

// 为了获得更明晰的 MVC 和 flux 的不同，我将举一个典型的 MVC 应用的用例：
// 在一个典型的 MVC 应用中，你将很容易的看到下面的行为：
// 1) 用户点击了一个按钮“A”
// 2) 按钮“A”上的点击处理方法被触发，修改了 Model “A”
// 3) Model “A” 的改变触发了 Model “B” 的改变
// 4) Model “B” 的改变触发了 View “B” 的重新渲染

// Finding the source of a bug in such an environment when something goes wrong can become quite challenging
// very quickly. This is because every View can watch every Model, and every Model can watch other Models, so
// basically data can arrive from a lot of places and be changed by a lot of sources (any views or any models).

// 当代码中出现问题事，在这样的情况下找到代码中的 bug 将很快变得极具挑战。这是因为每一个 View 都能访问所有的 Model，并且每一个
// Model 也能访问其他的 Models，所以基本上数据可能来自很多地方，并且许多代码都可以改变它（任何 Views 或者 任何 Models）。

// Whereas when using flux and its unidirectional data flow, the example above could become:
// 1) user clicks on button "A"
// 2) a handler on button "A" triggers an action that is dispatched and produces a change on Store "A"
// 3) since all other stores are also notified about the action, Store B can react to the same action too
// 4) View "B" gets notified by the change in Stores A and B, and re-renders

// 当使用 flux 和它的单向数据流，上面的例子就变成这样了：
// 1) 用户点击按钮“A”
// 2) 按钮“A”上的事件处理方法触发一个 action 被分发并生成一个对 Store “A” 的修改
// 3) 由于所有的其它的 stores 也被相关的 action 通知，Store “B” 也能响应同样的 action
// 4) View “B” 得到 Stores A 和 B 改变的通知，然后重新渲染

// See how we avoid directly linking Store A to Store B? Each store can only be
// modified by an action and nothing else. And once all stores have replied to an action,
// views can finally update. So in the end, data always flows in one way:
//     action -> store -> view -> action -> store -> view -> action -> ...

// 看下我们怎样避免 Store A 和 Store B 直接关联的？每一个 store 只能被一个 action 修改，没有别的了。
// 并且一旦所有的 stores 已经回复一个 action ，视图最后进行更新。因此最后，数据流向总是一种方式：
//     action -> store -> view -> action -> store -> view -> action -> ...

// Just as we started our use case above from an action, let's start our tutorial with
// actions and action creators.

// Go to next tutorial: 01_simple-action-creator.js
