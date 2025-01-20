export const completedDelete = (saveToDos, todos) => {
   const completeTodoDeleteButton = document.querySelector('#completeTodoDeleteButton')
   completeTodoDeleteButton.addEventListener('click', () => {
      const completeTodo = document.querySelectorAll('.complete')
      completeTodo.forEach((todo) => {
         const completeTodoContent = todo.closest('.todo_content')
         completeTodoContent.remove()
         todos = todos.filter((x) => x.completeButton !== true)
         saveToDos(todos)
      })
   })
}
