// 1. 수정버튼 토글작동
// 2. 할 일 값 수정값에 적용
// 3. 수정 취소하면 원래값 리턴
// 4. 수정 완료하면 할 일에 적용되는지

const editButtons = document.querySelectorAll('.edit_button')

const handleEditButton = (event) => {
   // 클릭한 요소의 부모를 찾아줍니다.
   const parentTarget = event.target.closest('.single_todo')

   // 부모요소 밑에 수정html요소를 찾아줍니다. 할 일 111
   const childrenEditContent = parentTarget.querySelector('.edit_content')

   // 수정html에 클래스를 추가하여 토글 처리해줍니다.
   childrenEditContent.classList.toggle('active')

   // 할 일 텍스트 요소를 찾아줍니다.
   const todoText = parentTarget.querySelector('.todo_text')

   // 수정html에 input 요소를 찾아줍니다.
   const editInput = childrenEditContent.querySelector('.edit_input')

   // 수정input의 기본값으로 할 일을 넣어줍니다.
   editInput.value = todoText.textContent

   const completeEditButton = childrenEditContent.querySelectorAll('.complete_edit_button')
   const cancelEditButton = childrenEditContent.querySelectorAll('.cancle_edit_button')

   // 수정완료버튼 클릭 시 이벤트 처리
   completeEditButton.forEach((complete) => {
      complete.addEventListener('click', () => {
         todoText.textContent = editInput.value
         childrenEditContent.classList.remove('active')
      })
   })

   // 수정취소버튼 클릭 시 이벤트 처리
   cancelEditButton.forEach((cancel) => {
      cancel.addEventListener('click', () => {
         editInput.value = todoText.textContent
         childrenEditContent.classList.remove('active')
      })
   })
}

editButtons.forEach((button) => {
   button.addEventListener('click', handleEditButton)
})
