// 단건 삭제, 다건(선택)삭제

export const incompleteDelete = (saveToDos, todos) => {
   const deleteButtons = document.querySelectorAll('.delete_buttons')
   deleteButtons.forEach((deleteButton) => {
      // 삭제버튼 클릭 시 이벤트
      deleteButton.addEventListener('click', (event) => {
         const grandParent = event.target.closest('.multiple_todo')
         const todoContent = event.target.closest('.todo_content')
         const editContent = grandParent.querySelector('.edit_content')
         const todoContentId = todoContent.getAttribute('data-id')

         // 로컬스토리지 id값이랑 클릭한 할 일의 id 값이랑 비교후 일치하지 않는 것들만 반환
         todos = todos.filter((itemt) => itemt.id !== Number(todoContentId))

         // 클릭한 요소를 지워준다.
         grandParent.remove()

         // 수정모드일 때 수정content에 active클래스를 제거하여 같이 없애준다
         editContent.classList.remove('active')

         // 업데이트된 데이터를 로컬스토리지에 저장해준다.
         saveToDos(todos)
      })
   })

   const pickDeleteButton = document.querySelector('#pickDeleteButton')

   pickDeleteButton.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.todo_checkboxes')
      checkboxes.forEach((x) => {
         const grandParent = x.closest('.multiple_todo')
         const checkEditContent = grandParent.querySelector('.edit_content')

         if (x.checked) {
            grandParent.remove()
            checkEditContent.classList.remove('active')
         }
      })

      const checkDeleteFilter = todos.filter((x) => x.todoCheck !== true)
      saveToDos(checkDeleteFilter)
   })
}
