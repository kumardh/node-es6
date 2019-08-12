# Javascript Vs Node Js
JavaScript is a simple programming language which runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language which holds a lot of excesses require libraries which can easily be accessed from JavaScript programming for better use.

JavaScript is normally used for any client-side activity for one web application. Activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used on a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like create or executing shell script, or getting some specific hardware related information on one call or installed certificate details in the system or lot of define task which are non-blocking on an operating system.

JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write and put any running environment means proper browser. Whereas Node JS only support V8 engine which googles chrome specific. But whether it support V8 engine, written JavaScript code can able to run in any environment. So there has no browser specific constraint on it.

JavaScript is normally following Java Programming language standard. There may have some different way of writing code but at the same time, we can say it following Java Programming language standard. Whereas node JS is written in C++, and provide V8 engine base browser javascript running engine which helps us to run written javascript program in any browser environment.

For accessing any operating system specific non-blocking task JavaScript has some specific object but all of them are operating system specific. An example is ActiveX Control which is only running in Windows. But Node JS is given utility to run some operating system specific non-blocking tasks from any JavaScript programming. It doesn’t have any operating system specific constant. Node JS is very much familiar to create a specific binding with the file system, and also allowing developer for reading or sometimes write on disk.

# What you should know about Node Js

**npm global vs local dependencies**
Globally installed packages/dependencies are stored in <user-directory>/npm directory. Such dependencies can be used in CLI (Command Line Interface) function of any node.js but can not be imported using require() in Node application directly. To install a Node project globally use -g flag.

By default, npm installs any dependency in the local mode. Here local mode refers to the package installation in node_modules directory lying in the folder where Node application is present. Locally deployed packages are accessible via require(). To install a Node project locally following is the syntax.
	
**global objects in Node**	
Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.
	
	__filename
	__dirname
	setTimeout
	setInterval
	console
	process

**Explain How Do We Decide, When To Use Node.Js And When Not To Use It?**
It’s ideal to use Node.js for developing streaming or event-based real-time applications that require less CPU usage such as.

Chat applications.
Game servers.
Node.js is good for fast and high-performance servers, that face the need to handle thousands of user requests simultaneously.

Good For A Collaborative Environment. It is suitable for environments where multiple people work together. For example, they post their documents, modify them by doing check-out and check-in of these documents.

Node.js supports such situations by creating an event loop for every change made to the document. The “Event loop” feature of Node.js enables it to handle multiple events simultaneously without getting blocked.

Advertisement Servers.Here again, we have servers that handle thousands of request for downloading advertisements from a central host. And Node.js is an ideal solution to handle such tasks.

Streaming Servers.Another ideal scenario to use Node.js is for multimedia streaming servers where clients fire request’s towards the server to download different multimedia contents from it.

To summarize, it’s good to use Node.js, when you need high levels of concurrency but less amount of dedicated CPU time.

Last but not the least, since Node.js uses JavaScript internally, so it fits best for building client-side applications that also use JavaScript.

**When To Not Use Node.Js?**
However, we can use Node.js for a variety of applications. But it is a single threaded framework, so we should not use it for cases where the application requires long processing time. If the server is doing some calculation, it won’t be able to process any other requests. Hence, Node.js is best when processing needs less dedicated CPU time.

**setTimeout with 0 delay vs setImmediate**
setTimeout(fn, delay) calls the given callback fn after the given delay has ellapsed (in milliseconds). However, the callback is not executed immediately at this time, but added to the function queue so that it is executed as soon as possible, after all the currently executing and currently queued event handlers have completed. 

setImmediate(fn) achieves the same effect, except that it doesn’t use the queue of functions. Instead, it checks the queue of I/O event handlers. If all I/O events in the current snapshot are processed, it executes the callback. It queues them immediately after the last I/O handler, somewhat like process.nextTick. This is faster than setTimeout(fn, 0).

So, the same code can be written in Node.js as:
```
console.log("first");
setImmediate(() => {
	console.log("second");
});
console.log("third");
```

**What is “callback hell” and how can it be avoided?**

“Callback hell” refers to heavily nested callbacks that have become unweildy or unreadable. An example of heavily nested code is below:
```
query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
  query(`SELECT * FROM transactions WHERE clientId=${id}`, function(transactions){
    transactions.each((transac) => {
      query(`UPDATE transactions SET value = ${transac.value*0.1} WHERE id=${transac.id}`, (error) => {
        if(!error){
          console.log("success!!");
        }else{
          console.log("error");
        }
      });
    });
  });
});
```
One should use Promise. Promises allow additional desirable behavior such as error propagation and chaining. Node.js includes native support for them.

But the best solution is to use async/await—an approach that leverages Promises and finally makes it easy to flatten the so-called “pyramid of doom” shown above.

**How node.js handle child thread?**
Node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. Technically, Node.js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.

If threading support is desired in a Node.js application, there are tools available to enable it, such as the ChildProcess module. In fact, Node.js 12 has experimental support for threads.

**How to handle unhandled exception?**
Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.
```
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});
```
However, uncaughtException is a very crude mechanism for exception handling and may be removed from Node.js in the future. An exception that has bubbled all the way up to the Process level means that your application, and Node.js may be in an undefined state, and the only sensible approach would be to restart everything.

The preferred way is to add another layer between your application and the Node.js process which is called the domain. Domains provide a way to handle multiple different I/O operations as a single group. So, by having your application, or part of it, running in a separate domain, you can safely handle exceptions at the domain level, before they reach the Process level.

However, domains have been pending deprecation for a few years—since Node.js 4. It’s possible a more future-proof approach would be to use zones.

**How does Node.js support multi-processor platform?**
Since Node.js is by default a single thread application, it will run on a single processor core and will not take full advantage of multiple core resources. However, Node.js provides support for deployment on multiple-core systems, to take greater advantage of the hardware. The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.

**What is typically the first argument passed to a Node.js callback handler?**
Error object. If there is no error, the argument will be null or undefined.

**Time taken by Google Chrome is considerably more than the time required to run it in Node.js when var is used in a loop. Explain why this is so, even though both use the v8 JavaScript Engine?**
Chrome, declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object. As a result, running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop. 

In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object) which therefore makes it much easier and faster to resolve.

**What is REPL? What purpose it is used for?** 
REPL stands for (READ, EVAL, PRINT, LOOP). Node js comes with bundled REPL environment. This allows for the easy creation of CLI (Command Line Interface) applications.

# What you must know about Javascript
	
**Variable scoping**
When we start writing code in a file, we are automatically placed in the global scope of that file. When we declare variables in the file, we place them in the global scope. Functions have their own local scope available to them. This local scope can be thought of as being nested inside the global scope. We can look at the current scope level and outwards, but not inwards.
There’s a mechanism behind variable lookup in JavaScript. When we try to access a variable, the JavasScript engine first looks at the current scope level. If the variable isn’t found, it will jump upwards into the parent scope and look there, and keep going upwards and out until it either finds the variable or reaches the global scope. If it’s not in the global scope, we get a reference error.
Functions can access and change variables in their outer scope. When we omit var, the JavaScript engine will not create a new instance of a variable in the local scope. Instead, it will first attempt to find the variable we are changing. If it’s found in the local scope, it’ll change the variable in the local scope. If it’s not, it’ll go up continuously until it finds it.
```
var x = 5;
var y = 'abc';

function outerFn() {
    var x = 10;
    y = 'xyz';

    function innerFn() {
        x = 20;
        var y = 'jkl';
    }

    innerFn();

    console.log(x);
    console.log(y);
}

outerFn();
// -> ?
// -> ?

console.log(x); // -> ?
console.log(y); // -> ?

Answer 20,xyz,5, xyz
```
**this kewword**
When used with new Constructor function is executed as empty object {}.when dot notation is used with object, this represents the object. when used with call() or apply(), this represent the object passed as argument.

**Another important items in JavaScript**
	Static members
	prototype
	Inheritance
	private members
	privileged methods
	refelxion in JavaScript
	hasOwnProperty
