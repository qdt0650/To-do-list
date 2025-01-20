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
