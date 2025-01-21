# To-do-list


## 프로젝트 소개
- 할 일 관리를 도와주는 프로젝트 입니다. 
- 할 일을 등록하고 수정 및 삭제로 투두리스트를 관리할 수 있습니다.

<br />

## 개발 기간
- 25.01.07 - 25.01.20

<br />

## 사용한 기술 스택
<img src="https://img.shields.io/badge/Visual Studio-5C2D91?style=flat&logo=Visual Studio&logoColor=white"/>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/Scss-CC6699?style=flat-square&logo=Scss&logoColor=white"/>

<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>

<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">

<br />

## 주요 기능
#### 1. 할 일 등록
- 할 일 등록시 각 할 일의 색상을 넣을 수 있습니다.
- 할 일 등록이 완료되면 등록된 날짜가 나타납니다.
- 할 일을 완료 처리할 수 있습니다.

#### 2. 할 일 수정
- 할 일의 텍스트 및 색상을 수정할 수 있습니다.
- 수정 완료시 수정됨 표시 및 수정된 날짜가 나타납니다.

#### 3. 할 일 삭제
- 할 일을 하나씩 삭제할 수 있습니다.
- 할 일을 여러개 선택 후 삭제할 수 있습니다.
- 완료된 할 일만 삭제할 수 있습니다.

<br />

## 프로젝트 구조

```
To-do-list/
├── pubilc/
│   ├── font
│   ├── styles/
│   │   ├── helpers/
│   │   │   └── utilities.scss // 반복적으로 재사용할 스타일
│   │   ├── base/
│   │   │   ├── reset.scss // default값 초기화
│   │   │   ├── font.scss // 웹폰트
│   │   │   └── variables.scss // 색상, 폰트 등의 변수명
│   │   ├── layout/
│   │   │   └── layout.scss
│   │   ├── components/
│   │   │   ├── button.scss
│   │   │   └── label.scss
│   │   └── pages/
│   │       └── common.scss
│   └── images
├── src/
│   ├── index.html
│   ├── features/
│   │   ├── add.js // 등록
│   │   ├── edit.js // 수정
│   │   ├── incompleteDelete.js // 미완료건 삭제
│   │   └── completedDelete.js // 완료건 삭제
│   └── utilities/
│       ├── storage.js
│       ├── newDate.js
│       ├── createHtml.js
│       ├── checkboxEvent.js
│       ├── todoEditButton.js
│       └── completeTodoButton.js
└── package.json
```
## 트러블슈팅
<details>
 <summary>
   
  ### 완료 버튼 클릭 문제  
  
  </summary>
  
  #### 문제
  완료된 할 일의 완료버튼 재클릭 시 다시 완료전 ui 상태로 돌아가는 문제 발생

  #### 해결
  if-else문을 사용하여 버튼 클릭 시 완료가 되어 있으면 return 처리해주고 alert창을 띄워 완료된 할 일을 알려줍니다.  
</details>
<details>
 <summary>
   
  ### 수정버튼 클릭 시 토글 문제  
  
  </summary>
  
  #### 문제
  2번째 할 일 수정버튼 클릭 시 1번째 할 일 수정버튼 이벤트가 동작

  #### 해결
  event.target을 이용하여 클릭한 요소를 찾은 후 이벤트 처리
</details>
<details>
 <summary>
   
  ### 새로 등록한 할 일들 수정버튼 미작동 문제 
  
  </summary>
  
  #### 문제
  기존에 할 일들은 수정버튼이벤트가 동작하지만 새로 등록한 할 일들은 수정버튼 이벤트가 동작하지 않는 문제 발생

  #### 해결
  할 일 등록시 수정버튼이 무조건 동작하도록 이벤트 연결 
</details>
<details>
 <summary>
   
  ### 삭제 후 할 일 등록시 삭제한 데이터 복구됨 문제 
  
  </summary>
  
  #### 문제
  할 일 삭제 처리후 새로운 할 일을 등록하면 이전에 삭제한 할 일들이 다시 복구되는 문제 발생

  #### 해결
  새로운 할 일을 등록하기전에 항상 로컬스토리지에서 최신 데이터를 불러온다 
</details>

