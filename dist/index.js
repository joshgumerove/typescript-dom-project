"use strict";
const btn = document.getElementById("btn"); // note the not null operator at the end
const input = document.getElementById("todo-input"); // exclamation mark means it is certain to exist -- note how we cast the value here
// note this is before run-time (working with a value that may or may not exist)
btn.addEventListener("click", () => alert(input.value));
// note the type assertion syntax
// const mystery: unknown = "Hello world!!";
// const numChars = (mystery as string).length; // does not change the type of mystery -- just in this specific context it is treated as a string
