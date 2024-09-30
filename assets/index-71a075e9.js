(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector("#grades-form"),d=document.querySelector("#your-grade"),s=document.querySelector("#grade-list"),n=[14,9,13,15,18];function t(e){return e.length}function o(e){return e[0]}function c(e){return e.at(-1)}function v(e){return e.length===0?0:e.reduce((r,i)=>r+=i,0)/e.length}function p(e){const r=e.currentTarget.dataset.index;n.splice(r,1),f(n),a(n)}function u(e){const r=e.currentTarget.dataset.index,i=prompt("Enter your new grade:");i!==null&&i!==""&&(n[r]=Number.parseInt(i,10),isNaN(n[r])?(alert("Значение должно быть числом"),u(e)):n[r]>100?(alert("Значение должно быть меньше или равно 100"),u(e)):(f(n),a(n)))}function f(e){s&&(s.innerHTML="",e.forEach((r,i)=>{const h=`
            <li>
              <div class="grade">
                <span>${r}</span>

                <div class="control-buttons">
                  <!-- Кнопка редактирования -->
                  <div class="btn-icon" data-variant="ghost" data-index="${i}">
                    <div data-icon="icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13H15V14H1V13ZM12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z" fill="#161616"/>
                        </svg>
                    </div>
                </div>
    
                <!-- Кнопка удаления -->
                <div class="btn-icon" data-variant="danger-ghost" data-index="${i}">
                    <div data-icon="icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1H6V2H10V1ZM2 3V4H3V14C3 14.6 3.4 15 4 15H12C12.6 15 13 14.6 13 14V4H14V3H2ZM4 14V4H12V14H4ZM6 6H7V12H6V6ZM10 6H9V12H10V6Z" fill="#161616"/>
                        </svg>
                    </div>
                </div>
                </div>
              </div>
            </li>`;s.insertAdjacentHTML("beforeend",h);const m=document.querySelectorAll('[data-variant="ghost"');document.querySelectorAll('[data-variant="danger-ghost"').forEach(g=>{g.addEventListener("click",p)}),m.forEach(g=>{g.addEventListener("click",u)})}))}function a(e){const r=document.querySelector("#stats-table tbody");r&&(r.innerHTML=`
            <tr>
                <td>${t(e)}</td>
                <td>${o(e)}</td>
                <td>${c(e)}</td>
                <td>${v(e)}</td>
           </tr>`,f(e))}l&&l.addEventListener("submit",e=>{e.preventDefault();const r=Number.parseInt(d.value,10);n.push(r),d.value="",a(n)}),a(n)});
