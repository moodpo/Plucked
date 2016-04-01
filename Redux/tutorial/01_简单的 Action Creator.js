// Tutorial 1 - simple-action-creator.js
// 第二节 简单的 Action Creator

// We started to talk a little about actions in the introduction but what exactly are those "action creators"
// and how are they linked to "actions"?
// 我们开始讨论一下有关上节中 actions 的东西，“action creators” 是什么，它们和“actions”有什么关联？

// It's actually so simple that a few lines of code can explain it all!
// 实际上它是如此简单以至于只需要几行代码就可以完全解释它！

// The action creator is just a function...
// Action creator 仅是一个函数...
var actionCreator = function() {
    // ...that creates an action (yeah, the name action creator is pretty obvious now) and returns it
    //
    return {
        type: 'AN_ACTION'
    }
}

// So is that all? yes.
// 这就是全部东西了？是的！

// However, one thing to note is the format of the action. This is kind of a convention in flux
// that the action is an object that contains a "type" property. This type allows for further
// handling of the action. Of course, the action can also contain other properties to
// pass any data you want.

// 然而，需要注意的一点是 action 的格式。在 flux 中这是一种约定，action 是一个包含 type 属性的对象。这个 type 在之后
// 可以操作 action。当然，action 中也可以包含任何属性，传输任何你想传输的数据。

// We'll also see later that the action creator can actually return something other than an action,
// like a function. This will be extremely useful for async action handling (more on that
// in dispatch-async-action.js).

// 之后我们也会看到 action creator 也能返回别的东西，例如一个 function 。这将非常有用在异步 action 操作中（更多细节
// 在 dispatch-async-action.js 中）。

// We can call this action creator and get an action as expected:
// 调用 action creator 获取一个预期中的 action。
console.log(actionCreator())
// Output: { type: 'AN_ACTION' }

// Ok, this works but it does not go anywhere...
// What we need is to have this action be sent somewhere so that
// anyone interested could know that something happened and could act accordingly.
// We call this process "Dispatching an action".

// Ok，它可以运行，但却不能走的更远...
// 我们需要的是能将这个 action 发送到某些地方，这样那些对此有兴趣的逻辑就能知道发生了什么，可以采取相应的行动。
// 我门可以调用“Dispatching an action”来实现。

// To dispatch an action we need... a dispatch function ("Captain obvious").
// And to let anyone interested know that an action happened, we need a mechanism to register
// "handlers". Such "handlers" to actions in traditional flux application are called stores and
// we'll see in the next section how they are called in redux.

// 分发一个 action 我们需要...一个分发方法 ("Captain obvious")。
// 并且让某个对此感兴趣的地方知道一个 action 已经发生，我们需要一种机制去注册“handlers”。
// 这样的对于在典型的 flux 应用中的 actions 的“处理方法”被叫做 stores ，同时我们将在下一节中看到
// 它们在 redux 中是怎样调用的。

// So far here is the flow of our application:
// ActionCreator -> Action

// Read more about actions and action creators here:
// http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html

// Go to next tutorial: 02_about-state-and-meet-redux.js
