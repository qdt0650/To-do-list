import { saveToDos, readToDos } from '../storage.js'

const todoForm = document.querySelector('#todo_form')
const todoInput = document.querySelector('#todoInput')
const textColorChange = document.querySelector('#textColorChange')
const todoListUl = document.querySelector('#todo_list')
const todoAddButton = document.querySelector('#addBtn')

let todo = []

const newDate = () => {
   // 현재 날짜를 구합니다
   const currentDate = new Date()

   const year = currentDate.getFullYear()
   const month = (currentDate.getMonth() + 1).toString()
   const day = currentDate.getDate().toString()
   const hours = currentDate.getHours().toString()
   const minutes = currentDate.getMinutes().toString()
   const seconds = currentDate.getSeconds().toString()

   return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

const handleInputValue = (event) => {
   // input을 입력할 때 새로고침을 방지해줍니다.
   event.preventDefault()

   // input에 입력한 값을 가져옵니다.
   const todoText = todoInput.value

   // input에 입력한 길이를 가져와 조건에 맞지 않으면 alert창을 띄어줍니다.
   const todoLength = todoText.length
   if (todoLength <= 1 || todoLength >= 20) {
      alert('1자 이상 20자 이하로 입력해주세요')
      return
   }

   // 입력 후 입력창을 비워줍니다.
   todoInput.value = ''

   // 입력한 데이터를 객체 형태로 변환해줍니다.
   const singleTodo = {
      id: Date.now(),
      todo: todoText,
      textColor: textColorChange.value,
      todoDate: newDate(),
      todoCheck: false,
   }

   // 색상변경 후 기본색상으로 돌려줍니다
   textColorChange.value = '#000000'

   // 생성된 객체를 빈 배열(todo)에 추가합니다.
   todo.push(singleTodo)

   // 화면에 생성html 출력합니다.
   updateTodo()

   // 새로고침해도 유지될 수 있도록 로컬스토리지에 저장해줍니다.
   saveToDos(todo)
}

todoForm.addEventListener('submit', handleInputValue)
todoAddButton.addEventListener('click', handleInputValue)

const updateTodo = () => {
   // 배열 형태의 데이터를 map메서드를 이용해서 문자열로 변환해줍니다.
   const createTodoHtml = todo.map((singleTodo) => {
      return `
      <li>
         <div>
            <label for="todoCheck">
               <input type="checkbox" id="todoCheck" ${singleTodo.todoCheck ? 'checked' : ''}/>
            </label>
            <span class="color_change" style="color: ${singleTodo.textColor}">${singleTodo.todo}</span>
            <i>${singleTodo.todoDate}</i>
            <button type="button">
               <span>수정</span>
            </button>
            <button type="button">
               <span>삭제</span>
            </button>
         </div>
      </li>
   `
   })

   // ul요소 밑에 생성된 html을 넣어줍니다.
   todoListUl.innerHTML = createTodoHtml.join('')

   // addEventCheckbox 함수를 호출한다.
   addEventCheckbox()
}

const addEventCheckbox = () => {
   // 모든 checkbox를 가져온다.
   const checkboxAll = document.querySelectorAll('#todoCheck')

   // 모든 checkbox들에 change이벤트를 준다.
   checkboxAll.forEach((checkbox, index) => {
      checkbox.addEventListener('change', (event) => {
         // todo배열 index번째 todoCheck 속성을 변경된 checked값으로 바꿔준다.
         todo[index].todoCheck = event.target.checked

         // 로컬스토리지에 변경된 데이터를 저장한다.
         saveToDos(todo)
      })
   })
}

if (saveToDos !== null) {
   // 저장한 데이터 값이 있을시 readToDos()로 로컬스토리지 데이터를 불러옵니다.
   const getToDos = readToDos()

   // 로컬스토리지에서 불러온 배열 형태의 데이터를 todo에 저장하여 화면에 출력해줍니다.
   todo = getToDos
   updateTodo()
}
