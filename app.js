let todo = [];
let req = prompt("Enter ther requiest.");

while (true) {
  if (req == "quit") {
    console.log("quit the todo app");
    break;
  } else if (req == "list") {
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
  } else if (req == "add") {
    let task = prompt("add the new Task");
    todo.push(task);
    console.log("new task is add");
  } else if (req == "delete") {
    let index = prompt("Enter the index no");
    todo.splice(index, 1);
    console.log("task is delete");
  } else {
    console.log("enter the valid req");
  }
  req = prompt("Enter the new req");
}
