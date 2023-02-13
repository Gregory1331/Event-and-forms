//ФОРМЫ
// 274.1
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('blur', function(){
//     p.innerHTML = elem.value ;
// })
// 275.1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     elem.disabled = true;
// })
// 275.2
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector('#but1');
// let but2 = document.querySelector('#but2');
// but1.addEventListener('click', function(){
//     elem.disabled = true;
// })
// but2.addEventListener('click', function(){
//     elem.disabled = false;
// })
// 275.3
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     console.log(elem.disabled);
// })
// 276.1
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector('#but1');
// let but2 = document.querySelector('#but2');
// but1.addEventListener('click', function(){
//     elem.checked = true
// })
// but2.addEventListener('click', function(){
//     elem.checked = false
// })
// 276.2
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function(){
//     if (elem.checked == true) {
//         p.innerHTML = p.innerHTML + 'Привет '
//     }
//     else if (elem.checked == false) {
//         p.innerHTML = p.innerHTML + 'Пока '
//     }
// })
// 277.2
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     elem.checked = !elem.checked
// })
// 278.1
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
//  for (let radio of radios) {
//      if (radio.checked) {
//          p.innerHTML = radio.value
//      }
//  }
// });
// 279.1
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
//     p.innerHTML = this.value
// })
// 279.2
// let checkbox = document.querySelector('#checkbox');
// let p = document.querySelector('p');
// checkbox.addEventListener('change',function(){
//     p.textContent = checkbox.checked;
// })

// 279.4
// let elem = document.querySelector('#elem');
//     elem.addEventListener('input', function() {
//         if(elem.value.length > 5){
//             this.style.background='red'
//         }
//         else if(elem.value.length < 5){
//             this.style.background='green'
//         }
//     });
// 280.1
// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
//     if(elem.value.length >= 5){
//         alert('>= 5 символов');
//     }
// });
// 280.2
// let elem = document.querySelector('#elem');
//     let p = document.querySelector('p');
//     elem.addEventListener('input', function() {
//         for(let i = 0; i <= elem.value.length; i++){
//             console.log(i);
//             if(elem.value.length <= 5){
//                 p.textContent = 'Столько символов можно ввести ' + (5 - i);
//             }else{
//                 p.textContent = 'Превышена длина текста' + (5 - i);
//             }
//         }
//     });
// 281.1
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('input', function() {
//   let elem1 = this.value;
//   if (elem1.length == 2) {
//     elem2.focus();
//   }
// });
// elem2.addEventListener('input', function() {
//    let elem1 = this.value;
//   if (elem1.length == 2) {
//    elem2.blur();
//   }
// });
// 282.1
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
//     p.innerHTML = select.value
// })
// 282.2
// let select = document.querySelector('#select');
//     let p = document.querySelector('p');
//     let button = document.querySelector('#button');
//     button.addEventListener('click', function(){
//         if(select.value % 4 == 0){
//             p.textContent = 'Високосный год: ' + select.value;
//         }else{
//             p.textContent = 'Не високосный год: ' + select.value;
//         }
//     });
// 282.3
// let select = document.querySelector('#select');
// let p = document.querySelector('p');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     if(select.value == 1 || select.value == 2 || select.value == 3 || select.value == 4 || select.value == 5){
//         p.textContent = 'Рабочий день ' + select.value;
//     }else{
//         p.textContent = 'Выходной день ' + select.value;
//     }
// });
// 283.1 
// let date =new Date();
// let now =date.getMonth()+1;
// let elems = document.querySelectorAll('#select');
// for (let elem of elems){
//     if (elem.value==now){
//         elem.selected=true;
//     }
//     else{
//          elem.selected=false;
//     }       
// }
// 284.1
// let select = document.querySelector('#select');
//     let inp = document.querySelector('#inp');
//     inp.addEventListener('blur', function(){
//         select.value = inp.value;
//     })
// 284.2
// let select = document.querySelectorAll('#select > option');
// let nowDay = new Date();
// document.getElementById('select').value = nowDay.getDay();

// 285.1 
// let select = document.querySelector('#select');
// for(let elem of select){
//     elem.textContent = elem.textContent + ' ' + elem.value
// }
// 286.1
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// select.selectedIndex = 3 ;
// })
// 286.2
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//  alert(select.value) ;
// })
// 286.3 
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//  alert(select.value) ;
// })

// 286.4 
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     for(let elem of select)
//  elem.textContent = elem.textContent + '!';
// })









//ПОИСК ОШИБОК В КОДЕ//

// 287.1
// <textarea></textarea>
// <div></div>
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('blur', function() {
//  div.textContent = textarea.textContent;
// });
// Решение:
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('blur', function() {
//  div.innerHTML = textarea.value;
// });

// 287.2 
// <input type="checkbox">
// <div></div>
// <button>button</button>
// let checkbox = document.querySelectorAll('#checkbox');
// let button = document.querySelectorAll('#button');
// let div = document.querySelectorAll('#div');
// btn.addEventListener('click', function() {
//  if (checkbox.checked) {
//      div.value = '111';
//  } else {
//      div.value = '222';
//  }
// });
// Решение:
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// button.addEventListener('click', function() {
//  if (elem.checked) {
//      div.innerHTML = '111';
//  } else {
//      div.innerHTML = '222';
//  }
// });

// 287.3 
// <input type="checkbox">
// <button>button</button>
// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//  if (checkbox.checked = true) {
//      console.log('+++');
//  } else {
//      console.log('---');
//  }
// });
// Решение:
// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//  if (checkbox.checked) {
//      console.log('+++');
//  } else {
//      console.log('---');
//  }
// });









//Event
// 288.1 Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. Изучите структуру этого объекта.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//  console.log(event);
// });

// 289.1 Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:
// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
//  elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });

// 290.1 В следующем коде в двум событиям привязан один и тот же обработчик:
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
// function func(event) {
//     if (event.type == "click") {
//         elem.style.backgroundColor = "green";
//     }
//     else if(event.type == "dblclick") {
//         elem.style.backgroundColor = "red";
//     }
//   }

// 291.1
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function(event) { 
//   if (event.target.tagName === 'UL') {
//     let li = document.createElement('li');
//     li.innerHTML = 'text';
//     elem.appendChild(li);
//   }
//   if (event.target.tagName === 'LI') {
//     event.target.textContent += '!';
//   }
// })
// 292.1,2
// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
//  elem.addEventListener('keypress', function(event) {
//         console.log(event.key, event.code);
//     });
// });

// 292.3 Определите, какой код будет у клавиши Enter.
// Ответ: Enter 13

// 292.4 Определите, какой код будет у клавиши BackSpace.
// Ответ: Backspace 8
// 292.5
// let elem = document.querySelector('#elem');
//     let p = document.querySelector('p');
//     elem.addEventListener('keypress', func);
//     function func(event) {
//         if(event.keyCode === 13) {
//             p.innerHTML = elem.value;
//             elem.value = '';
//         }
//     };
// 293.1
// let button = document.querySelector('button');
// button.addEventListener('click', function(event) {
//         if (event.altKey) {
//             button.style.backgroundColor = "red";
//         }
//  }
// );
// 293.2
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function(event) { 
//   if (event.ctrlKey) {
//     event.target.textContent += '1';
//   }
//   if (event.shiftKey) {
//     event.target.textContent += '2';
//   }
// })
// 294.1
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem.addEventListener('click', function(event) {
//     elem.textContent = elem.textContent + ' ' + elem.href
//  event.preventDefault();
// });
// elem1.addEventListener('click', function(event) {
//     elem1.textContent = elem1.textContent + ' ' + elem1.href
//  event.preventDefault();
// });

// 294.2
// let inp = document.querySelector('#inp');
// let inp1 = document.querySelector('#inp1');
// let url = document.querySelector('#url');
// let p = document.querySelector('p');
// url.addEventListener('click', function(event){
//     event.preventDefault();
//     p.textContent = + inp.value + + inp1.value;
// })

// 295
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой');
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// 296
// let div1 = document.querySelector('#div1');
// let ul1 = document.querySelector('#ul1');
// let li1 = document.querySelectorAll('#li1');
// div1.addEventListener('click', function(event){
//     if(event.target.matches('div')){
//         console.log('Клик именно по диву');
//     }
//     if(event.target.matches('ul')){
//         console.log('Клик именно по списку');
//         let li1 = document.createElement('li');
//         li1.setAttribute('id', 'li1');
//         li1.innerHTML = 'text';
//         ul1.appendChild(li1);
//     }
//     if(event.target.matches('li')){
//         event.target.textContent = event.target.textContent + '!';
//         console.log('Клик именно по элементу списка');
//     }
// });

// 297
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// button.addEventListener('click', function() {
// 	block.classList.add('active');
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

// 300
// let ul = document.querySelector('ul')
// let li = document.querySelectorAll('li')
// ul.addEventListener('click', function() {
// event.target.innerHTML = event.target.innerHTML + '!';
//     console.log(this);         
// 	console.log(event.target);
// });