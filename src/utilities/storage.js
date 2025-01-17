export const saveToDos = (todo) => localStorage.setItem('todo', JSON.stringify(todo))

export const readToDos = () => {
   return JSON.parse(localStorage.getItem('todo')) || []
}
