const btn = document.getElementById("btn")!; // note the not null operator at the end
// note this is before run-time (working with a value that may or may not exist)

btn.addEventListener("click", () => console.log("hello world"));
