(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const d=t=>localStorage.setItem("todo",JSON.stringify(t)),p=()=>JSON.parse(localStorage.getItem("todo"))||[],C=t=>`
      <li class="multiple_todo" >
         <div data-id=${t.id} class = ${t.todoCheck?"todo_content_checked":"todo_content"}>
            <label for="todoCheckbox">
               <input type="checkbox" class="todo_checkboxes" ${t.todoCheck?"checked":""}/>
            </label>
            <span class="todo_text ${t.completeButton?"complete":""}"  style="color: ${t.textColor}">${t.todo} </span>
            <i class="edit_mark ${t.completeButton?"complete":""}" style="display: ${t.editMark?"inline-block":"none"}">(수정됨)</i>
            <i class="todo_date ${t.completeButton?"complete":""}">${t.todoDate}</i>
            <button type="button" class="complete_buttons" >
                <span>완료</span>
            </button>
            <button type="button" class="edit_buttons">
               <span>수정</span>
            </button>
            <button type="button" class="delete_buttons">
               <span>삭제</span>
            </button>
         </div>
         <form class="edit_content">
            <label for="editInput">
               <input type="text" class="edit_input" />
            </label>
            <label for="editTextColorChange">
               <input type="color" class="edit_text_color input_color" />
            </label>
            <button class="complete_edit_button">
               <span>수정완료</span>
            </button>
            <button type="button" class="cancle_edit_button">
               <span>수정취소</span>
            </button>
         </form>
      </li>
   `,h=()=>{const t=new Date,n=t.getFullYear(),l=(t.getMonth()+1).toString(),r=t.getDate().toString(),e=t.getHours().toString(),o=t.getMinutes().toString(),c=t.getSeconds().toString();return`${n}-${l.padStart(2,"0")}-${r.padStart(2,"0")} ${e.padStart(2,"0")}:${o.padStart(2,"0")}:${c.padStart(2,"0")}`},D=(t,n)=>{document.querySelectorAll(".todo_checkboxes").forEach((r,e)=>{r.addEventListener("change",o=>{r.setAttribute("checked",""),t[e].todoCheck=o.target.checked,n(t)})})},E=(t,n,l,r,e)=>{t.addEventListener("submit",c=>{c.preventDefault();const s=n.querySelector(".todo_content"),u=s.getAttribute("data-id"),b=s.querySelector(".todo_date"),m=s.querySelector(".edit_mark"),y=p().map(f=>{if(f.id===Number(u)){l.style.color=c.target[1].value,b.textContent=h();const v=()=>c.target.value!==l.textContent?(m.style.display="inline-block",!0):!1;return{...f,todo:c.target[0].value,textColor:c.target[1].value,todoDate:h(),editMark:v()}}return f});e(y),l.textContent=r.value,t.classList.remove("active")}),t.querySelector(".cancle_edit_button").addEventListener("click",()=>{r.value=l.textContent,t.classList.remove("active")})},q=t=>{const n=document.querySelectorAll(".multiple_todo"),l=r=>{r.preventDefault();const e=r.target.closest(".multiple_todo"),o=e.querySelector(".todo_text"),c=e.querySelector(".edit_content"),s=c.querySelector(".edit_input");s.value=o.textContent,c.classList.toggle("active"),E(c,e,o,s,t)};n.forEach(r=>{r.querySelectorAll(".edit_buttons").forEach(o=>{o.addEventListener("click",l)})})},x=t=>{const n=document.querySelectorAll(".complete_buttons"),l=r=>{const e=r.target.closest(".todo_content"),o=e.getAttribute("data-id"),c=e.querySelector(".todo_text"),s=e.querySelector(".edit_mark"),u=e.querySelector(".todo_date"),m=p().map(i=>i.id===Number(o)?{...i,completeButton:(()=>{if(i.completeButton)return alert("이미 완료된 할 일 입니다."),!0;if(confirm("완료 처리 하시겠습니까?"))return c.className+="complete",s.className+="complete",u.className+="complete",!0})()}:i);t(m)};n.forEach(r=>{r.addEventListener("click",l)})},T=(t,n)=>{document.querySelectorAll(".delete_buttons").forEach(e=>{e.addEventListener("click",o=>{const c=o.target.closest(".todo_content"),s=c.getAttribute("data-id");n=n.filter(u=>u.id!==Number(s)),c.remove(),t(n)})}),document.querySelector("#pickDeleteButton").addEventListener("click",()=>{document.querySelectorAll(".todo_checkboxes").forEach(c=>{const s=c.closest("div");if(c.checked)return s.remove()});const o=n.filter(c=>c.todoCheck!==!0);t(o)})},B=(t,n)=>{document.querySelector("#completeTodoDeleteButton").addEventListener("click",()=>{document.querySelectorAll(".complete").forEach(e=>{e.closest(".todo_content").remove(),n=n.filter(c=>c.completeButton!==!0),t(n)})})},L=document.querySelector("#todo_form"),_=document.querySelector("#todoInput"),g=document.querySelector("#textColorChange"),$=document.querySelector(".todo_list"),A=document.querySelector("#addBtn");let a=[];const S=t=>{t.preventDefault();const n=p(),l=_.value,r=l.length;if(r<=1||r>=20){alert("1자 이상 20자 이하로 입력해주세요");return}_.value="";const e={id:Date.now(),todo:l,textColor:g.value,todoDate:h(),todoCheck:!1,editMark:!1,completeButton:!1};g.value="#111111",n.push(e),a=n,k(),d(a)};L.addEventListener("submit",S);A.addEventListener("click",S);const k=()=>{const t=a.map(n=>C(n));$.innerHTML=t.join(""),D(a,d),q(d),x(d),T(d,a),B(d,a)};d!==null&&(a=p(),k());
