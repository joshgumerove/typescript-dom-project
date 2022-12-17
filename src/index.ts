interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = readTodos();

const btn: HTMLElement = document.getElementById("btn")!; // note the not null operator at the end

const input = document.getElementById("todo-input")! as HTMLInputElement; // exclamation mark means it is certain to exist -- note how we cast the value here
// note this is before run-time (working with a value that may or may not exist)

const form = document.getElementById("todo-form")! as HTMLFormElement; // note the benefit of using "form" with querySelector
const list = document.getElementById("todo-list")! as HTMLUListElement;

// todos.forEach((todo) => createTodo(todo));

todos.forEach(createTodo); // short-hand syntax

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) {
    return [];
  }
  return JSON.parse(todosJSON);
}

function saveTodos(): void {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();

  input.value = "";
}

function createTodo(todo: Todo): void {
  const newLI = document.createElement("li");
  newLI.innerHTML = todo.text;
  list.append(newLI);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  }); // adding the eventListener to the li.checkbox
  newLI.append(checkbox);
}

form.addEventListener("submit", handleSubmit);

// note the type assertion syntax

// const mystery: unknown = "Hello world!!";

// const numChars = (mystery as string).length; // does not change the type of mystery -- just in this specific context it is treated as a string

// need to remember to recompile when making changes (VERY IMPORTANT)
