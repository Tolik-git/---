const tasks = ['Задача 1'];

const newTasks = ['Задача 2','Задача 3'];
const tasksUpdated = tasks.concat(newTasks);
console.log(tasksUpdated);

const reverseTasks = tasksUpdated.reverse();
console.log(reverseTasks);

const deletTasks = tasksUpdated.splice(1);
console.log(deletTasks);

