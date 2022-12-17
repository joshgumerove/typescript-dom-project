"use strict";
const btn = document.getElementById("btn"); // note the not null operator at the end
const input = document.getElementById("todo-input"); // exclamation mark means it is certain to exist -- note how we cast the value here
// note this is before run-time (working with a value that may or may not exist)
const form = document.getElementById("todo-form"); // note the benefit of using "form" with querySelector
const list = document.getElementById("todo-list");
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("li");
    newLI.innerHTML = newTodoText;
    list.append(newLI); // note how also could have used a question mark
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(checkbox);
    input.value = "";
};
// would need to specifify the SubmitEvent in this case
form.addEventListener("submit", handleSubmit);
// note the type assertion syntax
// const mystery: unknown = "Hello world!!";
// const numChars = (mystery as string).length; // does not change the type of mystery -- just in this specific context it is treated as a string
// need to remember to recompile when making changes
