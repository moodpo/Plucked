// Tutorial 02 - about-state-and-meet-redux.js
// 第二节 关于 state 、邂逅 redux

// Sometimes the actions that we'll handle in our application will not only inform us
// that something happened but also tell us that data needs to be updated.

// 有时候应用中的 actions 不仅会通知我们有些事情发生了，而且也会告诉我们有数据需要更新。

// This is actually quite a big challenge in any app.
// Where do I keep all the data regarding my application along its lifetime?
// How do I handle modification of such data?
// How do I propagate modifications to all parts of my application?

// 这在应用开发中都是一个非常大的挑战。
// 在应用的生命周期中需要在什么地方保存关联数据？
// 这样的数据变更我们怎样处理？
// 怎样把这种数据变更传播给应用的所有部分？

// Here comes Redux.

// Redux (https://github.com/rackt/redux) is a "predictable state container for JavaScript apps"
// Redux 是一个“对JavaScript 应用来说可预测状态的容器”。

// Let's review the above questions and reply to them with
// Redux vocabulary (flux vocabulary too for some of them):
// 回顾上面的问题并使用 Redux 术语回答它们（flux 术语也可以）：

// Where do I keep all the data regarding my application along its lifetime?
//     You keep it the way you want (JS object, array, Immutable structure, ...).
//     Data of your application will be called state. This makes sense since we're talking about
//     all the application's data that will evolve over time, it's really the application's state.
//     But you hand it over to Redux (Redux is a "state container", remember?).
//     你使用你认为的方式保存它（JS 对象，数组，不可变结构，...）。
//     应用的数据被叫做 state。
// How do I handle data modifications?
//     Using reducers (called "stores" in traditional flux).
//     A reducer is a subscriber to actions.
//     A reducer is just a function that receives the current state of your application, the action,
//     and returns a new state modified (or reduced as they call it)
//     使用 reducers（在典型的 flux 中叫做“stores”）。
//     一个 reducer 是一个 actions 的订阅者。
//     一个 reducer 只是一个函数，它接收应用的当前状态，action，并且反悔一个新的被修改的状态（或者）
// How do I propagate modifications to all parts of my application?
//     Using subscribers to state's modifications.
//     使用订阅者方式实现状态变更的通知。

// Redux ties all this together for you.
// To sum up, Redux will provide you:
//     1) a place to put your application state
//     2) a mechanism to dispatch actions to modifiers of your application state, AKA reducers
//     3) a mechanism to subscribe to state updates
//     1) 一个存放应用状态的地方
//     2) 一种可以分发 actions 以修改应用状态的机制
//     3) 一种订阅状态更新的机制

// The Redux instance is called a store and can be created like this:
/*
    import { createStore } from 'redux'
    var store = createStore()
*/

// But if you run the code above, you'll notice that it throws an error:
//     Error: Invariant Violation: Expected the reducer to be a function.

// That's because createStore expects a function that will allow it to reduce your state.
// createStore 期望传入一个函数，这个函数可以用来处理应用状态。

// Let's try again

import { createStore } from 'redux'

var store = createStore(() => {})

// Seems good for now...

// Go to next tutorial: 03_simple-reducer.js
