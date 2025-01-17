import { readToDos } from '../utilities/storage.js'

export const completeTodoButton = (saveToDos) => {
   const completeButtons = document.querySelectorAll('.complete_buttons')

   const handleComplete = (event) => {
      // 클릭한 버튼의 부모요소 가져옵니다.
      const parentTodoContent = event.target.closest('.todo_content')
      const todoContentId = parentTodoContent.getAttribute('data-id')
      const childrenTodoText = parentTodoContent.querySelector('.todo_text')
      const childrenTodoDate = parentTodoContent.querySelector('.todo_date')

      // 로컬스토리지 데이터를 불러옵니다.
      const getTodo = readToDos()
      const dataChangeCom = getTodo.map((data) => {
         // 로컬스토리지 id값과 클릭한 요소의 id값을 비교해줍니다.
         if (data.id === Number(todoContentId)) {
            // id값이 일치하면 confirm으로 완료 여부를 확인해줍니다.
            const confirmCheck = () => {
               if (confirm('완료 처리 하시겠습니까?')) {
                  // 완료 처리 성공시 클래스 추가와 true값을 리턴해줍니다.
                  childrenTodoText.className += 'complete'
                  childrenTodoDate.className += 'complete'
                  return true
               }
            }

            // 로컬스토리지 데이터값을 복사해서 completeButton에 confirm 처리한 함수를 넣어줍니다.
            return {
               ...data,
               completeButton: confirmCheck(),
            }
         }
         // 다른 모든 로컬스토리지 데이터를 반환해줍니다.
         return data
      })
      // 바뀐 데이터를 로컬스토리지에 저장해줍니다.
      saveToDos(dataChangeCom)
   }

   completeButtons.forEach((button) => {
      button.addEventListener('click', handleComplete)
   })
}
