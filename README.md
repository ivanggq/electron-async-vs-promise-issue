# electron-async-vs-promise-issue
A repository created to demonstrate a inconsistency in electron regarding warnings shown for async vs manual promise functions.

How to run it:
```
npm install
npm start
```

Observed output:
```
1 caught oops
2 caught oops
(node:1452) UnhandledPromiseRejectionWarning: oops
(node:1452) UnhandledPromiseRejectionWarning: oops
(node:1452) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)
(node:1452) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)
(node:1452) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:1452) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
3 caught oops
(node:1452) PromiseRejectionHandledWarning: Promise rejection was handled asynchronously (rejection id: 3)
(node:1452) PromiseRejectionHandledWarning: Promise rejection was handled asynchronously (rejection id: 3)
```