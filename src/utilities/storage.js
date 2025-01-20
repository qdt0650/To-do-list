export const saveToDos = (todo) => localStorage.setItem('todo', JSON.stringify(todo))
export const readToDos = () => {
   return JSON.parse(localStorage.getItem('todo')) || []
}

export const deleteSaveToDos = (deleteTodo) => localStorage.setItem('delete', JSON.stringify(deleteTodo))
export const deleteReadToDos = () => {
   return JSON.parse(localStorage.getItem('delete')) || []
}
