interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const btn: HTMLElement = document.getElementById("btn")!; // note the not null operator at the end

const input = document.getElementById("todo-input")! as HTMLInputElement; // exclamation mark means it is certain to exist -- note how we cast the value here
// note this is before run-time (working with a value that may or may not exist)

const form = document.getElementById("todo-form")! as HTMLFormElement; // note the benefit of using "form" with querySelector
const list = document.getElementById("todo-list")! as HTMLUListElement;

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);
  createTodo(newTodo);
  input.value = "";
}

function createTodo(todo: Todo): void {
  const newLI = document.createElement("li");
  newLI.innerHTML = todo.text;
  list.append(newLI);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(checkbox);
}

form.addEventListener("submit", handleSubmit);

// note the type assertion syntax

// const mystery: unknown = "Hello world!!";

// const numChars = (mystery as string).length; // does not change the type of mystery -- just in this specific context it is treated as a string

// need to remember to recompile when making changes (VERY IMPORTANT)
