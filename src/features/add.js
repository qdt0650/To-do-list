import { saveToDos, readToDos } from '../utilities/storage.js'
import { createHtml } from '../utilities/createHtml.js'
import { newDate } from '../utilities/newDate.js'
import { checkboxEvent } from '../utilities/checkboxEvent.js'
import { todoEditButton } from '../utilities/todoEditButton.js'
import { completeTodoButton } from '../utilities/completeTodoButton.js'
import { incompleteDelete } from './incompleteDelete.js'
import { completedDelete } from './completedDelete.js'

const todoForm = document.querySelector('#todo_form')
const todoInput = document.querySelector('#todoInput')
const textColorChange = document.querySelector('#textColorChange')
const todoListUl = document.querySelector('.todo_list')
const todoAddButton = document.querySelector('#addBtn')

let todos = []

const handleInputValue = (event) => {
   // input을 입력할 때 새로고침을 방지해줍니다.
   event.preventDefault()

   // 입력전 로컬스토리지 최신 데이터를 불러옵니다.
   const currentToDos = readToDos()

   // input에 입력한 값을 가져옵니다.
   const todoText = todoInput.value

   // input에 입력한 길이를 가져와 조건에 맞지 않으면 alert창을 띄어줍니다.
   const todoTextLength = todoText.length
   if (todoTextLength <= 1 || todoTextLength >= 30) {
      alert('1자 이상 30자 이하로 입력해주세요')
      return
   }

   // 입력 후 입력창을 비워줍니다.
   todoInput.value = ''

   // 입력한 데이터를 객체 형태로 변환해줍니다.
   const todoData = {
      id: Date.now(),
      todo: todoText, // 할 일 텍스트
      textColor: textColorChange.value, // 할 일 텍스트 색상
      todoDate: newDate(), // 등록 및 수정 날짜
      todoCheck: false, // 할 일 선택
      editMark: false, // 수정
      completeButton: false, // 완료
   }

   // 색상변경 후 기본색상으로 돌려줍니다
   textColorChange.value = '#111111'

   // 생성된 객체를 추가합니다.
   currentToDos.push(todoData)

   // 빈 배열에 생성한 객체를 추가합니다.
   todos = currentToDos

   // 화면에 html을 출력하는 함수를 호출합니다.
   updateTodo()

   // 로컬스토리지에 저장합니다.
   saveToDos(todos)
}

todoForm.addEventListener('submit', handleInputValue)
todoAddButton.addEventListener('click', handleInputValue)

// 화면에 출력해줍니다.
const updateTodo = () => {
   const todoHtml = todos.map((single) => {
      return createHtml(single)
   })
   todoListUl.innerHTML = todoHtml.join('')

   // 체크박스 이벤트 불러옵니다.
   checkboxEvent(todos, saveToDos)

   // 수정버튼 이벤트 불러옵니다.
   todoEditButton(saveToDos)

   // 할 일 완료버튼 이벤트 불러옵니다.
   completeTodoButton(saveToDos)

   // 할 일 삭제버튼 이벤트 불러옵니다.
   incompleteDelete(saveToDos, todos)

   // 완료된 할 일 삭제
   completedDelete(saveToDos, todos)
}

if (saveToDos !== null) {
   // 로컬스토리지에 저장된 데이터를 불러옵니다.
   const getToDos = readToDos()

   // 로컬스토리지에서 불러온 배열 형태의 데이터를 todo에 저장하여 화면에 출력해줍니다.
   todos = getToDos
   updateTodo(todos)
}
