export const completedDelete = (saveToDos, todos, completeTodoContent) => {
   const completeTodoDeleteButton = document.querySelector('#completeTodoDeleteButton')
   completeTodoDeleteButton.addEventListener('click', () => {
      const completeTodo = document.querySelectorAll('.complete')
      completeTodo.forEach((todo) => {
         const completeTodoContent = todo.closest('.todo_content')
         //  console.log(completeTodoContent)
         completeTodoContent.remove()

         todos = todos.filter((x) => x.completeButton !== true)
         saveToDos(todos)
      })
   })
}
