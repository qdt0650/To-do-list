import { readToDos } from '../utilities/storage.js'

export const completeTodoButton = (saveToDos) => {
   const completeButtons = document.querySelectorAll('.complete_buttons')

   const handleComplete = (event) => {
      // 클릭한 버튼의 부모요소를 가져옵니다.
      const grandParent = event.target.closest('.multiple_todo')
      const editContent = grandParent.querySelector('.active')

      const parentTodoContent = event.target.closest('.todo_content')
      const todoContentId = parentTodoContent.getAttribute('data-id')
      const childrenTodoText = parentTodoContent.querySelector('.todo_text')
      const editMark = parentTodoContent.querySelector('.edit_mark')
      const childrenTodoDate = parentTodoContent.querySelector('.todo_date')

      // 로컬스토리지 데이터를 불러옵니다.
      const getTodo = readToDos()
      const dataChangeCom = getTodo.map((data) => {
         // 로컬스토리지 id값과 클릭한 요소의 id값을 비교해줍니다.
         if (data.id === Number(todoContentId)) {
            // 이미 완료된 할 일인지 확인
            if (data.completeButton) {
               alert('이미 완료된 할 일 입니다.')
               return data
            }
            const isConfirm = confirm('완료 처리 하시겠습니까?')
            if (isConfirm) {
               // 완료 처리 성공시 클래스 추가와 true값을 리턴해줍니다.
               grandParent.classList.add('multiple_todo_complete')
               if (editContent) {
                  editContent.classList.remove('active')
               }
               return { ...data, completeButton: true }
            }
         }
         // 다른 모든 로컬스토리지 데이터를 반환해줍니다.
         console.log(data)
         return data
      })
      // 바뀐 데이터를 로컬스토리지에 저장해줍니다.
      saveToDos(dataChangeCom)
   }

   // 각 완료버튼 클릭시 handleComplete 실행
   completeButtons.forEach((button) => {
      button.addEventListener('click', handleComplete)
   })
}
